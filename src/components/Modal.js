import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Button from '@mui/material/Button';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import axios from 'axios';
import Swal from 'sweetalert2'


const Modal = ({visible, onClose, image, admin}) => {
    if (!visible) {
        return false
    }
    const handleClose = () => {
        onClose()
    }

    const handleSign = async () => {
        const res = await axios.post('http://localhost:5000/esign/sign', {
            data: image
        }).then(res => res.data)

        console.log(res);
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {

              onClose()
          },1500)
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
                <img className='w-full' src={image} alt="" />
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