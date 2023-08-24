import React, { useEffect, useState } from "react"
import GetAppIcon from '@mui/icons-material/GetApp'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DoneIcon from '@mui/icons-material/Done'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import PublishRoundedIcon from '@mui/icons-material/PublishRounded'
import { green, red, yellow } from "@mui/material/colors"
import Modal from "./Modal"
import { useNavigate } from "react-router"
const ViewTable = () => {
  const [showModal, setShowModal] = useState(false)
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

  return (
    <div class="overflow-x-auto mt-12">
      <div class="flex justify-center font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
          <div className='flex justify-end w-full'>
            <div className='border-2 flex items-center gap-2 rounded-md py-2 px-4 cursor-pointer'
              onClick={() => navigate('/user')}
            >
              <PublishRoundedIcon/>
              <span>Upload</span>
            </div>
          </div>
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">No</th>
                  <th class="py-3 px-6 text-left">Name</th>
                  <th class="py-3 px-6 text-left">Upload on</th>
                  <th class="py-3 px-6 text-center">Type</th>
                  <th class="py-3 px-6 text-center">Resource</th>
                  <th class="py-3 px-6 text-center">Status</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm">
                <tr class="border-b border-gray-200 hover:bg-gray-100 text-base">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">1</span>
                        </div>
                      </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium">Ielts 9.0</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>18/04/2023</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        <span>Certification</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div className="flex gap-2 items-center border-2 px-4 py-1 rounded-lg cursor-pointer"
                          onClick={() => setShowModal(true)}
                        >
                          <GetAppIcon />
                          <span>ielts_9.0.pdf</span>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div className="flex item-center justify-center gap-2">
                        <DoneIcon sx={{ color: green[800] }} />
                        <span className="font-medium">Approved</span>
                      </div>
                    </td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100 text-base">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">1</span>
                        </div>
                      </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium">Ielts 9.0</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>18/04/2023</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        <span>Certification</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div className="flex gap-2 items-center border-2 px-4 py-1 rounded-lg cursor-pointer"
                          onClick={() => setShowModal(true)}
                        >
                          <GetAppIcon />
                          <span>ielts_9.0.pdf</span>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div className="flex item-center justify-center gap-2">
                        <DoneIcon sx={{ color: green[800] }} />
                        <span className="font-medium">Approved</span>
                      </div>
                    </td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100 text-base">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">1</span>
                        </div>
                      </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium">Ielts 9.0</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>18/04/2023</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        <span>Certification</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div className="flex gap-2 items-center border-2 px-4 py-1 rounded-lg cursor-pointer"
                          onClick={() => setShowModal(true)}
                        >
                          <GetAppIcon />
                          <span>ielts_9.0.pdf</span>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div className="flex item-center justify-center gap-2">
                        <DoneIcon sx={{ color: green[800] }} />
                        <span className="font-medium">Approved</span>
                      </div>
                    </td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100 text-base">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">1</span>
                        </div>
                      </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium">Ielts 9.0</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>18/04/2023</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        <span>Certification</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div className="flex gap-2 items-center border-2 px-4 py-1 rounded-lg cursor-pointer"
                          onClick={() => setShowModal(true)}
                        >
                          <GetAppIcon />
                          <span>ielts_9.0.pdf</span>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div className="flex item-center justify-center gap-2">
                        <DoneIcon sx={{ color: green[800] }} />
                        <span className="font-medium">Approved</span>
                      </div>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default ViewTable;
