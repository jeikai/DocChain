import React, { useEffect, useState } from 'react'
import Tesseract from 'tesseract.js';
import axios from 'axios';
function Demo_Upload() {
    const [image, setImage] = useState(null);
    const [text, setTextResult] = useState("")
    const handleChange = e => {
        setImage(e.target.files[0])
    }
    const convertImageToText = async () => {
        if (image) {
            const worker = await Tesseract.createWorker();
            await worker.loadLanguage("eng");
            await worker.initialize("eng");
            const { data } = await worker.recognize(image);
            setTextResult(data.text)
        }
    };

    useEffect(() => {
        convertImageToText();
    }, [image])
    return (
        <div>
            <h1>Image - Text</h1>
            <div>
                <label htmlFor='upload'>Upload: </label>
                <input type='file' id='upload' accept='image/*' onChange={handleChange}></input>
            </div>
            <div>
                {image && (
                    <div>
                        <img src={URL.createObjectURL(image)} alt='thumb'></img>
                    </div>
                )}
                {text && (
                    <div>
                        <p>{text}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Demo_Upload
