import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Button from '@mui/material/Button';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useContract, useContractWrite } from '@thirdweb-dev/react-core';


const Modal = ({visible, onClose, transaction, admin}) => {

    const { contract } = useContract(process.env.REACT_APP_ADDRESS_CONTRACT);
    const { mutateAsync: storeSignedData, isLoading } = useContractWrite(contract, "storeSignedData")
  
    const call = async (_hash, _sender, _imageName, _publicKey, _signature) => {
      try {
        const data = await storeSignedData({ args: [_hash, _sender, _imageName, _publicKey, _signature] });
        Swal.fire({ 
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {

              onClose()
          },1500)
        console.info("contract call successs", data);
      } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            timer: 1500
        })
        console.error("contract call failure", err);
      }
    }


    if (!visible) {
        return false
    }

    const handleSign = async () => {
        const res = await axios.post('http://localhost:5000/esign/sign', {
            data: transaction.hash
        }).then(res => res.data)

        console.log(res);
        call(transaction.hash, transaction.sender, transaction.imageName, res.publicKey, res.signature)
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
        <div className=' p-4 rounded w-1/2 h-4/5 '>
            <div className='flex items-center justify-between pb-2 border-b-2 mb-4 '>
                <span className='text-lg font-medium'>Preview Documentations</span>
                <div className='cursor-pointer' onClick={onClose}>
                    <CloseRoundedIcon/>
                </div>
            </div>
            <div className='overflow-y-auto h-4/5'>
                <img className='w-full' src={transaction.hash} alt="" />
            </div>
            <div className='flex justify-end pt-3'>
                {admin&&
                    <Button 
                    variant="contained" size="large" endIcon={<DriveFileRenameOutlineIcon />}
                    onClick={handleSign}
                    >
                    Sign
                    </Button>
                }
            </div>
        </div>
    </div>
  )
}

export default Modal