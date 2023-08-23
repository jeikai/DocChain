const express = require('express');
const cors = require('cors');
const app = express();
const vision = require('@google-cloud/vision')
const mindee = require("mindee");
const port = 5000;
app.use(cors());
app.use(express.json());

const client = new vision.ImageAnnotatorClient({
    keyFilename: './APIKey.json'
});

const detectText = async (file_path) => {
    let [result] = await client.textDetection(file_path);
    let [label] = await client.labelDetection(file_path);
    let [face] = await client.faceDetection(file_path);
    console.log(face)
    return result.fullTextAnnotation.text;
};

detectText('./anh_ielts2.jpg')
detectText('./ava.png')
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
