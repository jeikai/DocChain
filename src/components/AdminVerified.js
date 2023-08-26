import React, { useEffect, useState } from "react"
import GetAppIcon from '@mui/icons-material/GetApp'
import copy from 'clipboard-copy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DoneIcon from '@mui/icons-material/Done'
import VerifiedIcon from '@mui/icons-material/Verified';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import PublishRoundedIcon from '@mui/icons-material/PublishRounded'
import { green, red, yellow } from "@mui/material/colors"
import Modal from "./Modal"
import { useNavigate } from "react-router"
import { useContract, useContractRead } from "@thirdweb-dev/react";

const ViewTable = () => {
  const { contract } = useContract(process.env.REACT_APP_ADDRESS_CONTRACT);
  const { data, isLoading } = useContractRead(contract, "getAllSigned")
  const [showModal, setShowModal] = useState(false)
  const [image, setImage] = useState('')
  const handleOnClose = () => setShowModal(false)
  const navigate = useNavigate()
  useEffect(() => { 
    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        handleOnClose()
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  const shortenPublicKey = (address) => `${address.slice(0, 10)}...${address.slice(address.length - 4)}`;

  return (
    <div class="overflow-x-auto mt-12">
      <div class="flex justify-center font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
          
          <div class="p-4 rounded my-6 shadow-xl shadow-gray-800">
            <table class="min-w-max w-full table-auto ">
              <thead>
                <tr class="border-b border-gray-200  uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">No</th>
                  <th class="py-3 px-6 text-left">Name</th>
                  <th class="py-3 px-6 text-left">Upload on</th>
                  <th class="py-3 px-6 text-center">Resource</th>
                  <th class="py-3 px-6 text-center">PublicKey</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                {data?.map((item, index) => {
                  return (
                    <tr class="border-b border-gray-200 hover:bg-gray-900 text-base">
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center">
                              <span class="font-medium">{index}</span>
                            </div>
                          </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <span class="font-medium">{shortenAddress(item.sender)}</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                          <div class="flex items-center">
                            <span>{new Date(item.timestamp.toNumber() * 1000).toLocaleString()}</span>
                          </div>
                        </td>
                    
                        <td class="py-3 px-6 text-center">
                          <div class="flex item-center justify-center">
                            <div className="flex gap-2 items-center border-2 px-4 py-1 rounded-lg cursor-pointer"
                              onClick={() => {
                                setImage(item.hash)
                                setShowModal(true)
                              }}
                            >
                              <GetAppIcon />
                              <span>{item.imageName}</span>
                            </div>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-center">
                          <div className="flex item-center justify-center gap-4">
                            <span class="font-medium">{shortenPublicKey(item.publicKey)}</span>
                            <ContentCopyIcon onClick={() => copy(item.publicKey)} className="cursor-pointer"/>
                          </div>
                        </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal visible={showModal} onClose={handleOnClose} transaction={image} admin={true} />
    </div>
  );
};

export default ViewTable;
