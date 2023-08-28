import React from 'react'
import PublishRoundedIcon from '@mui/icons-material/PublishRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded'
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp'
import WestRoundedIcon from '@mui/icons-material/WestRounded';
const UserLayout = (props) => {
  return (
    <div className="flex justify-center font-sans overflow-hidden mt-12">
    <div className="w-full lg:w-5/6">
      <div className='flex items-center justify-around gap-2 w-full text-xl'>
        <div className='flex gap-2 items-center'>
            <PublishRoundedIcon sx={{ fontSize: 30 }} />
            <span className='border-b-2 mb-2 border-black'>Upload your file</span>
        </div>
        <div className='flex gap-2 items-center'>
            <ArrowForwardRoundedIcon sx={{ fontSize: 30 }} />
        </div>
        {/* <div className='flex gap-2 items-center'>
            <PermContactCalendarRoundedIcon sx={{ fontSize: 30 }} />
            <span className='border-b-2 mb-2 border-black'>Personal Information</span>
        </div>
        <div className='flex gap-2 items-center'>
            <ArrowForwardRoundedIcon sx={{ fontSize: 30 }} />
        </div> */}
        <div className='flex gap-2 items-center'>
            <ExpandCircleDownSharpIcon sx={{ fontSize: 30 }} />
            <span className='border-b-2 mb-2 border-black'>Submitting</span>
        </div>
      </div>

      {<props.children {...props.data} />}
      
      {/* <div className='flex items-center justify-between gap-2 w-full text-xl mt-12'>
        <div className='flex gap-2 items-center'>
            <WestRoundedIcon sx={{ fontSize: 30 }} />
            <span>Prev</span>
        </div>
        <div className='flex gap-2 items-center'>
            <span>Next</span>
            <ArrowForwardRoundedIcon sx={{ fontSize: 30 }} />
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default UserLayout