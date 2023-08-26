import React, { Fragment, useContext, useEffect, useState } from "react";
import { bg, ielts } from "../assets/index";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import { useContract, useContractRead } from "@thirdweb-dev/react-core";
import { PublicKeyContext } from "./PublicKeyContext";

const Modal = ({visible, onClose, image}) => {
    if (!visible) {
        return false
    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10"
      onClick={() => onClose()}
    >
      <div className="p-[2px] rounded w-1/2 bg-gradient-to-tr from-[#2BFF88] via-[#15BFFD] to-[#9C37FD]">
        <div className="w-full bg-black rounded p-4">
            <div className="flex items-center justify-between pb-2 border-b-2 mb-4 ">
            <span className="text-lg font-medium">Preview Documentations</span>
            <div className="cursor-pointer">
                <CloseRoundedIcon />
            </div>
            </div>
            <div className="overflow-y-auto h-[650px]">
              <div className="mr-2">
                <img className="w-full" src={image} alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Guest = () => {
  const [showModal, setShowModal] = useState(false);
  const { contract } = useContract(process.env.REACT_APP_ADDRESS_CONTRACT);
  const { data, isLoading } = useContractRead(contract, "getAllSigned")
  const [error, setError] = useState(false)
  const [transaction, setTransaction] = useState()
  const { publicKey } = useContext(PublicKeyContext);
  console.log(isLoading)
  useEffect(() => {
    const doc = data?.find(item => item.publicKey === publicKey)
    if(doc){
      console.log(doc);
      setTransaction(doc)
    }else{
      setError(true)
      console.log('Not Found');
    }
  }, [])
//   const [transaction, setTransaction] = useState({})
  const handleOnClose = () => setShowModal(false)
  return (
    <Fragment>
        <div className="bg-gradient-to-r w-screen h-screen relative flex items-center justify-center">
        <img
            className="w-screen h-screen object-cover absolute"
            src={bg}
            alt=""
        />
        {isLoading ? 
            <div>
            <div className="w-16 h-16 border-l-2 border-t-2 border-l-[#15BFFD] border-t-[#15BFFD] rounded-full p-1 animate-spin delay-75">
              <div className="w-full h-full border-l-2 border-t-2 border-l-[#9C37FD] border-t-[#9C37FD] rounded-full p-1 animate-spin delay-150">
                <div className="w-full h-full border-l-2 border-t-2 border-l-[#FF2525] border-t-[#FF2525] rounded-full animate-spin delay-200"></div>   
              </div>   
            </div>   
            </div>
          :
            error ?
              <div className="py-4 px-8 w-1/2 border-[1px] border-[rgba(255, 255, 255, .2)] backdrop-blur-xl rounded-xl">
                  Error loading ...
              </div>
            :
              <div className="py-4 px-8 w-1/2 border-[1px] border-[rgba(255, 255, 255, .2)] backdrop-blur-xl rounded-xl">
                  <div className="flex items-center justify-between pb-4">
                  <span className="text-xl font-medium">Document Overview</span>
                  <div className="cursor-pointer">
                      <CloseRoundedIcon />
                  </div>
                  </div>
                  <div className="h-[1px] bg-gradient-to-r from-[#2BFF88] via-[#15BFFD] to-[#9C37FD]"></div>
                  <div className="flex gap-12 py-8">
                    <div className="p-4 w-48 h-60 border-[1px] relative group"
                        onClick={() => setShowModal(true)}
                    >
                        <img src={transaction?.hash} alt="" />
                        <div className="hidden items-center justify-center absolute w-full h-full top-0 left-0 backdrop-brightness-[0.25] cursor-pointer z-10 group-hover:flex">
                            <RemoveRedEyeRoundedIcon />
                        </div>
                    </div>
                  <div>
                      <div className="flex items-center gap-12 mb-8">
                      <span className="font-bold flex-1">Document name: </span>
                      <span>Ielts certification </span>
                      </div>
                      <div className="flex items-center gap-12 mb-8">
                      <span className="font-bold flex-1">Status: </span>
                      <span>Verify </span>
                      </div>
                      <div className="flex items-center gap-12 mb-8">
                      <span className="font-bold flex-1">Upload on: </span>
                      <span>{transaction?.timestamp.toString()} </span>
                      </div>
                      <div className="flex items-center gap-12 mb-8">
                      <span className="font-bold flex-1">Type: </span>
                      <span>Certification </span>
                      </div>
                  </div>
                  </div>
              </div>
        }
        </div>
        <Modal onClose={handleOnClose} visible={showModal} image={transaction?.hash}  />
    </Fragment>
  );
};

export default Guest;
