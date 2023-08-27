const vision = require('@google-cloud/vision');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const client = new vision.ImageAnnotatorClient({
    keyFilename: './APIKey.json'
});
const removeNewlines = (inputString) => {
    return inputString.replace(/\n/g, ' ');
};
const findAllIndexes = (string, keyword) => {
    const indexes = [];
    let index = string.indexOf(keyword);
    while (index !== -1) {
        indexes.push(index);
        index = string.indexOf(keyword, index + 1);
    }
    return indexes;
};
const ExtractValue = async (string, title, format) => {
    const titlesIndexes = findAllIndexes(string, title);
    let nearestValue = null;
    let nearestDistance = Infinity;
    for (const startIndex of titlesIndexes) {
        const endIndex = startIndex + title.length;
        if (endIndex <= string.length) {
            const searchArea = string.substring(endIndex);
            const regex = format;
            const match = searchArea.match(regex);
            if (match) {
                const foundValue = match[0];

                const distance = string.indexOf(match[0]) - endIndex;
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestValue = foundValue;
                }

            }
        }
    }
    return nearestValue;
};
const ExtractValueFromText = async (string, format) => {
    const matches = string.match(format);
    if (matches) {
        return matches[0];
    }
    return null;
};
exports.detect = async (req, res) => {
    let image = req.file;
    const file_path = image.buffer;
    try {
        let response = {}; // Initialize an empty response object

        let [text] = await client.textDetection(file_path);
        let newString = removeNewlines(text.fullTextAnnotation.text);

        if (newString.includes('IELTS')) {
            let [face] = await client.faceDetection(file_path);
            let face_detail = face.faceAnnotations[0];
 
            const promises = [
                ExtractValue(newString, "Centre", RegExp(`[a-zA-Z]{${2}}\\d{${3}}`)),
                ExtractValue(newString, "Candidate Number", RegExp(`\\d{6}`)),
                ExtractValueFromText(newString, RegExp(`\\d{2}\\/[a-zA-Z]{3}\\/\\d{4}`)),
                ExtractValue(newString, "Birth", RegExp(`\\d{2}\\/\\d{2}\\/\\d{4}`)),
                ExtractValue(newString, "CEFR", RegExp(`[a-zA-Z]{1}\\d{1}`)),
            ];
            const [
                centreNumber,
                CandidateNumber,
                Date_Exam,
                Birth,
                CEFR
            ] = await Promise.all(promises);
            // Check if any value is null in the response
            if (
                centreNumber === null ||
                CandidateNumber === null ||
                Date_Exam === null ||
                Birth === null ||
                CEFR === null
            ) {
                res.json({ status: false });
                return;
            }
            response = {
                CandidateNumber: CandidateNumber,
                Date_Exam: Date_Exam,
                Birth: Birth,
                CEFR: CEFR,
                centreNumber: centreNumber,
                rollAngle: face_detail.rollAngle,
                panAngle: face_detail.panAngle,
                tiltAngle: face_detail.tiltAngle,
                string_check: newString
            };

        } else if (newString.includes("ĐỘC QUYỀN")) {
            const promises = [
                ExtractValueFromText(newString, RegExp(`\\d{1}[-]{1}\\d{4}[-]{1}\\d{5}`)),
            ];
            const [
                Number,
            ] = await Promise.all(promises);

            if (Number === null) {
                res.json({ status: false });
                return;
            }

            response = {
                Number: Number,
                string_check: newString
            };
        } else if (newString.includes("Certificate") || newString.includes("CERTIFICATE") || newString.includes("certificate")) {
            const promises = [
                ExtractValueFromText(newString, RegExp(`[A-Z]*[-]{1}\\d+[-]{1}\\d+`)),
            ];
            const [
                Number,
            ] = await Promise.all(promises);

            if (Number === null) {
                res.json({ status: false });
                return;
            }
            response = {
                Series: Number,
                string_check: newString
            }
        }
        res.json({ response, status: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error, status: false });
    }
};
