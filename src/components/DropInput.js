import React, { useEffect, useRef, useState } from "react";
import cloud from "../assets/cloud.png";
import { useAddress, useContract, useContractWrite, useStorageUpload } from "@thirdweb-dev/react";
import { async } from "q";

const DropImageInput = () => {
  const [file, setFile] = useState();
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState("");
  const [isDragEnter, setIsDragEnter] = useState(false);
  const { mutateAsync: upload } = useStorageUpload({
    rewriteFileNames: {
      fileStartNumber: 1,
    },
  });
  const [img, setImg] = useState('')
  
  const address = useAddress();
  const { contract, isLoading } = useContract(process.env.REACT_APP_ADDRESS_CONTRACT)
  const { mutateAsync: storeImageData } = useContractWrite(contract, "storeImageData")

  const call = async (_url, _fileName) => {
    try {
      const data = await storeImageData({ args: [_url, _fileName] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const handleSubmit = async () => {
    const uploadUrl = await upload({
      data: [file],
      options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
    });
    // console.log(uploadUrl[0], file.name)
    // setImg(uploadUrl[0])
    call(uploadUrl[0], file.name)
  }
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
    <>
    <div
        style={{
            "--bg": `url(${blob})`,
        }}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onClick={() => inputFileRef.current && inputFileRef.current.click()}
      className={`${blob ? "before-bg-file" : ""} relative p-6 cursor-pointer h-[400px] w-[570px] mx-auto mt-10 border-2 border-dashed  flex flex-col items-center justify-center text-base leading-[1.6] select-none`}
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
    <button type="button" onClick={handleSubmit}>Submit</button>
    <img src={img} alt="" />
          </>
  );
};

export default DropImageInput;
