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
    console.log(result.fullTextAnnotation.text);
};

detectText('./anh_ielts.jpg');
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
