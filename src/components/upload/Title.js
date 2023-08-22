import React from 'react'
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import {green} from '@mui/material/colors';

const Title = () => {
  return (
    <div className='w-[95%] py-5'>
        <div className='border-b-[2px]  pb-3 flex gap-2 items-center'>
            <ChecklistOutlinedIcon/>
            <span className='text-[25px] font-bold'>Transaction</span>
        </div>
        <div className='py-5 flex items-center justify-between'>
            <div className="border-[1.5px] border-slate-600 w-1/3 rounded-3xl p-1 pl-5 flex gap-2 items-center">
                <SearchIcon/>
                <InputBase className='w-full' placeholder="Search by Name, Manager & Phone No."/>
            </div>
                
            <div className='border-[1.5px] border-slate-600 w-[10%] rounded-lg p-1 pl-5 flex gap-2 items-center'>
                <CalendarTodayOutlinedIcon/>
                <span>Date</span>
                <ReplayOutlinedIcon sx={{color: green[500]}}/>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <StickyNote2OutlinedIcon/>
            <span>You have 0 Pending Document Submission that require immediate action and 3 Pending Document For Approval</span>
        </div>
    </div>
  )
}

export default Title