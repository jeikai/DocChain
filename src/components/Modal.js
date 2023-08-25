import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
const Modal = ({visible, onClose, image}) => {
    if (!visible) {
        return false
    }
    const handleClose = () => {
        onClose()
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10' onClick={handleClose}>
        <div className=' p-4 rounded w-1/2 h-4/5 overflow-y-auto'>
            <div className='flex items-center justify-between pb-2 border-b-2 mb-4 '>
                <span className='text-lg font-medium'>Preview Documentations</span>
                <div className='cursor-pointer' onClick={onClose}>
                    <CloseRoundedIcon/>
                </div>
            </div>
            <img className='w-full' src={image} alt="" />
        </div>
    </div>
  )
}

export default Modal