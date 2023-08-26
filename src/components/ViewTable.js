import React, { useEffect, useState } from "react"
import GetAppIcon from '@mui/icons-material/GetApp'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DoneIcon from '@mui/icons-material/Done'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import PublishRoundedIcon from '@mui/icons-material/PublishRounded'
import { green, red, yellow } from "@mui/material/colors"
import Modal from "./Modal"
import { useNavigate } from "react-router"
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";




const ViewTable = () => {
  const address = useAddress()
  const { contract } = useContract(process.env.REACT_APP_ADDRESS_CONTRACT);
  const { data, isLoading } = useContractRead(contract, "getAllData");
  const [transaction, setTransaction] = useState({});
  const { data: data2 } = useContractRead(contract, "getAllSigned")
  const filterDuplicates = (arr1, arr2, key) => {
    const uniqueElements = arr1?.filter(obj1 => {
      return arr2?.some(obj2 => obj2[key] === obj1[key]);
    });
    // return uniqueElements;
    return uniqueElements?.filter(item => item.sender === address);
  };  

  const filteredArray = filterDuplicates(data, data2, 'hash');
  
  console.log(data)
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
  return (
    <div class="overflow-x-auto mt-12">
      <div class="flex justify-center font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
          <div className='flex justify-end w-full'>
            <div className='border-2 flex items-center gap-2 rounded-md py-2 px-4 cursor-pointer'
              onClick={() => navigate('/upload')}
            >
              <PublishRoundedIcon/>
              <span>Upload</span>
            </div>
          </div>
          <div class="p-4 rounded my-6 shadow-lg shadow-gray-800 overflow-y-auto h-[500px]">
            <table class="min-w-max w-full table-auto ">
              <thead>
                <tr class="  uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">No</th>
                  <th class="py-3 px-6 text-left">Address User</th>
                  <th class="py-3 px-6 text-left">Upload on</th>
                  <th class="py-3 px-6 text-center">Resource</th>
                  {/* <th class="py-3 px-6 text-center">Status</th> */}
                </tr>
              </thead>
              <tbody class="text-sm">
                {filteredArray?.map((item, index) => {
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
                                setTransaction(item)
                                setShowModal(true)
                              }}
                            >
                              <GetAppIcon />
                              <span>{item.imageName}</span>
                            </div>
                          </div>
                        </td>
                        {/* <td class="py-3 px-6 text-center">
                          <div className="flex item-center justify-center gap-2">
                            <DoneIcon sx={{ color: green[800] }} />
                            <span className="font-medium">Approved</span>
                          </div>
                        </td> */}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} transaction={transaction} />
    </div>
  );
};

export default ViewTable;
