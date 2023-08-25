const vision = require('@google-cloud/vision');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const client = new vision.ImageAnnotatorClient({
    keyFilename: './APIKey.json'
});
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
const removeNewlines = (inputString) => {
    return inputString.replace(/\n/g, ' ');
};
function removeSpaces(inputString) {
    return inputString.replace(/\s/g, '');
}
exports.detect = async (req, res) => {
    let image = req.file;
    const file_path = image.buffer;
    try {
        let [text] = await client.textDetection(file_path);
        let [face] = await client.faceDetection(file_path);
        let [logo] = await client.logoDetection(file_path);
        let logo_detail = logo.logoAnnotations[0];
        let face_detail = face.faceAnnotations[0];
        let newString = removeNewlines(text.fullTextAnnotation.text);
        const ReportNumber = ExtractValue(newString, "Report Form", RegExp(`\\d{2}\\s?[A-Z]{2}\\d{6}[A-Z]{4}\\s?\\d{3}[A-Z]{1}`)) === null ?
            ExtractValue(newString, "Report Form", RegExp(`\\d{2}\\s?[A-Z]{2}\\d{6}[A-Z]{3}\\s?\\d{3}[A-Z]{1}`)) :
            ExtractValue(newString, "Report Form", RegExp(`\\d{2}\\s?[A-Z]{2}\\d{6}[A-Z]{4}\\s?\\d{3}[A-Z]{1}`));
        const promises = [
            ExtractValue(newString, "Centre Number", RegExp(`[a-zA-Z]{${2}}\\d{${3}}[^a-zA-Z0-9\\s]{${0}}`)),
            ExtractValue(newString, "Candidate Number", RegExp(`[a-zA-Z]{${0}}\\d{${6}}[^a-zA-Z0-9\\s]{${0}}`)),
            ExtractValue(newString, "Date", RegExp(`\\d{2}\\/[a-zA-Z]{3}\\/\\d{4}`)),
            ExtractValue(newString, "Birth", RegExp(`\\d{2}\\/\\d{2}\\/\\d{4}`)),
            ExtractValue(newString, "CEFR", RegExp(`[a-zA-Z]{${1}}\\d{${1}}`)),
            ExtractValue(newString, "Listening", RegExp(`\\d{1}\\.\\d{1}`)),
            ExtractValue(newString, "Reading", RegExp(`\\d{1}\\.\\d{1}`)),
            ExtractValue(newString, "Writing", RegExp(`\\d{1}\\.\\d{1}`)),
            ExtractValue(newString, "Speaking", RegExp(`\\d{1}\\.\\d{1}`)),
            ExtractValue(newString, "Overall", RegExp(`\\d{1}\\.\\d{1}`)),
            ExtractValue(newString, "Date", RegExp(`\\d{2}\\/\\d{2}\\/\\d{4}`)),
            ExtractValue(newString, "Candidate ID", RegExp(`\\d{12}`)),
            ExtractValue(newString, "Sex", RegExp(`[MF]`)),
            ExtractValue(newString, "Report Form", RegExp(`\\d{2}\\s?[A-Z]{2}\\d{6}[A-Z]{4}\\s?\\d{3}[A-Z]{1}`)) == null ?
                ExtractValue(newString, "Report Form", RegExp(`\\d{2}\\s?[A-Z]{2}\\d{6}[A-Z]{3}\\s?\\d{3}[A-Z]{1}`)) :
                ExtractValue(newString, "Report Form", RegExp(`\\d{2}\\s?[A-Z]{2}\\d{6}[A-Z]{4}\\s?\\d{3}[A-Z]{1}`))
        ];
        const [
            centreNumber,
            CandidateNumber,
            Date_Exam,
            Birth,
            CEFR,
            Listening,
            Reading,
            Writing,
            Speaking,
            Overall,
            Date_Sign,
            ID,
            Sex,
            ReportFormNumber
        ] = await Promise.all(promises);
        const response = {
            centreNumber: centreNumber,
            CandidateNumber: CandidateNumber,
            Date_Exam: Date_Exam,
            Birth: Birth,
            CEFR: CEFR,
            Listening: Listening,
            Reading: Reading,
            Writing: Writing,
            Speaking: Speaking,
            Overall: Overall,
            Date_Sign: Date_Sign,
            CandidateId: ID,
            ReportFormNumber: ReportFormNumber,
            Sex: Sex,
            rollAngle: face_detail.rollAngle,
            panAngle: face_detail.panAngle,
            tiltAngle: face_detail.tiltAngle,
            logo_type: logo_detail.description,
            string_check: newString
        }
        res.json({ response, status: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false });
    }
};
