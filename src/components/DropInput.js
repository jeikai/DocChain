import React, { useEffect, useRef, useState } from "react";
import cloud from "../assets/cloud.png";
const DropImageInput = () => {
  const [file, setFile] = useState();
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState("");
  const [isDragEnter, setIsDragEnter] = useState(false);

  useEffect(() => {
    if (file) {
      setBlob(URL.createObjectURL(file));
    }

    return () => {
      URL.revokeObjectURL(blob);
    };
  }, [file]);

  const onFileChange = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    if (newFile) {
      if (!newFile.type.match("image.*")) {
        //File không đúng định dạng
      } else {
        inputFileRef.current && (inputFileRef.current.value = null);
        setFile(newFile);
      }
    }
  };

  const onDragLeave = () => {
    setIsDragEnter(false);
  };

  const onDragEnter = () => {
    setIsDragEnter(true);
  };

  const onDrop = (e) => {
    setIsDragEnter(false);
    const newFile = e.dataTransfer.files?.[0];
    if (newFile) {
      if (!newFile.type.match("image.*")) {
        //File không đúng định dạng
      } else {
        setFile(newFile);
      }
    }
  };

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // Disable open image in new tab
    };

    window.addEventListener("dragover", handler);
    window.addEventListener("drop", handler);

    return () => {
      window.removeEventListener("dragover", handler);
      window.removeEventListener("drop", handler);
    };
  }, []);
  return (
    <div
        style={{
            "--bg": `url(${blob})`,
        }}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onClick={() => inputFileRef.current && inputFileRef.current.click()}
      className={`${blob ? "before-bg-file" : ""} relative p-6 cursor-pointer h-[400px] w-[570px] mx-auto mt-10 border-2 border-dashed border-black flex flex-col items-center justify-center text-base leading-[1.6] select-none`}
    >
      <input
        ref={inputFileRef}
        onChange={onFileChange}
        type="file"
        accept="image/*"
        hidden
      />
      <div className="bg-black">
        <img src={cloud} alt="" />
      </div>
      <p className="text-center my-3 pointer-events-none text-xl font-semibold">
        Browse files to upload Or Drop files here...
      </p>
    </div>
  );
};

export default DropImageInput;
