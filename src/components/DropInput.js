import React, { useEffect, useRef, useState } from "react";
import cloud from "../assets/cloud.png";
import { toast } from 'react-toastify';
import { useAddress, useContract, useContractRead, useContractWrite, useStorageUpload } from "@thirdweb-dev/react";
import { async } from "q";
import Swal from "sweetalert2";
import axios from "axios";
const DropImageInput = () => {
  const [file, setFile] = useState();
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState("");
  const [isDragEnter, setIsDragEnter] = useState(false);
  const { mutateAsync: upload } = useStorageUpload();
  const [img, setImg] = useState('')

  const address = useAddress();
  const { contract, isLoading } = useContract(process.env.REACT_APP_ADDRESS_CONTRACT)
  const { data } = useContractRead(contract, "getAllData")
  const { mutateAsync: storeImageData } = useContractWrite(contract, "storeImageData")
  const [loading, setLoading] = useState(false)
  const call = async (_url, _fileName) => {
    try {
      const data = await storeImageData({ args: [_url, _fileName] });
      console.info("contract call successs", data);
      Swal.fire({
        icon: 'success',
        title: 'Tài liệu đã được xác thực',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (err) {
      console.error("contract call failure", err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 1500
      })
    }
  }
  const handleSubmit = async () => { 
    setLoading(true)
    const imageData = new FormData();
    imageData.append("image", file);
    try {
      if (file) {
        // gọi api check AI
        const response = await axios.post("https://dull-red-eel-ring.cyclic.cloud/ggVision/verify", imageData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
        console.log(response)
        //gọi api compare
        if (response.data.status) {
          const verify = await axios.post("https://dull-red-eel-ring.cyclic.cloud/verify/check", response.data.response, {
            headers: {
              "Content-Type": "application/json",
            }
          })
          if (verify.data.status) {
            const uploadUrl = await upload({
              data: [file],
              options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
            });
            console.log(uploadUrl)
            let flag = false

            data?.some((obj) => {
              return Object.values(obj).some((value) => {
                if (value === uploadUrl[0]) {
                  flag = true; // Cập nhật biến cờ thành true
                }
              });
            });
            console.log(flag)
            if (!flag) {
              call(uploadUrl[0], file.name)
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tài liệu này đã có sẵn!',
                timer: 1500
              })
            }
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Dữ liệu không chính xác',
              timer: 1500
            })
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng kiểm tra lại tài liệu của bạn!',
            timer: 1500
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Bạn chưa upload file',
          timer: 1500
        })
      }
    } catch (error) {

      console.error("Error submitting image:", error);
    }
    setLoading(false)
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
      {loading ?
        <div className="mt-12 flex items-center justify-center w-full">
          <div className="w-16 h-16 border-l-2 border-b-2 border-l-[#15BFFD] border-b-[#15BFFD] rounded-full p-1 animate-spin delay-75">
            <div className="w-full h-full border-t-2 border-r-2 border-t-[#9C37FD] border-r-[#9C37FD] rounded-full p-1 animate-spin delay-150">
              <div className="w-full h-full border-l-2 border-b-2 border-l-[#FF2525] border-b-[#FF2525] rounded-full animate-spin delay-200"></div>
            </div>
          </div>
        </div>
        :
        <button className="mt-12 m-auto flex bg-gradient-to-tr from-[#21D4FD] to-[#B721FF] px-12 py-4 text-xl rounded-lg" type="button" onClick={handleSubmit}>Submit</button>
      }
    </>
  );
};


export default DropImageInput;
