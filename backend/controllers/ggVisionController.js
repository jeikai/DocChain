const vision = require('@google-cloud/vision')
const mindee = require("mindee");
const Tesseract = require('tesseract.js');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const client = new vision.ImageAnnotatorClient({
    keyFilename: '../APIKey.json'
});
  
exports.detectText = async (req, res) => {
    const file_path = require('../anh_ielts.jpg')
    let [result] = await client.textDetection(file_path);
    res.json(result.fullTextAnnotation.text);
};

// exports.uploadImage = upload.single('image', async function(req, res) {
//     try {
//       
//       res.json({ title: 'Tesseract OCR Example', result: detectText() });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('An error occurred.');
//     }
// });
