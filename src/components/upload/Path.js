import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Path = () => {
  return (
    <div className='flex items-center gap-[0.7] py-3'>
        <HomeOutlinedIcon/>
        <ChevronRightOutlinedIcon/>
        <span>Performance Report</span>
        <ChevronRightOutlinedIcon/>
        <span>Top Recruiters</span>
    </div>
  )
}

export default Path