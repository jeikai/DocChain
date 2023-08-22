import React from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import { grey, blue } from '@mui/material/colors';
const Sidebar = () => {
  return (
    <aside className='fixed top-0 bottom-0 z-10 w-[250px] bg-white shadow-md'>
      <div className='relative h-[100vh] pb-30px overflow-y-auto overflow-x-hidden'>
        <nav>
          <span className='block px-4 py-4 text-xl font-semibold'>ProofGuard</span>
        </nav>
        <ul className='mt-2 flex flex-col'>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <GridViewOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm'>Dashboard</span>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <AccountBoxOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm'>My Admin</span>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <SlideshowOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm flex-1'>Trainings & Events</span>
              <ChevronRightOutlinedIcon/>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <WorkspacePremiumOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm flex-1'>Marketing</span>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <FolderOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm flex-1'>Projects</span>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <BusinessCenterOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm flex-1'>Consultancy Service</span>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm flex-1'>eService</span>
              <ChevronRightOutlinedIcon/>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <LibraryBooksOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm flex-1'>Facilities booking</span>
            </a>
          </li>
          <li className='mx-1 my-2'>
            <a className='flex items-center px-4 py-2 gap-2' href="">
              <StorefrontOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm flex-1'>ProofGuard E-Shop</span>
            </a>
          </li>
        </ul>
        <div className='mt-auto py-4 absolute bottom-0 w-full'>
        <div className='w-fit flex justify-center gap-2 border-[1.5px] m-auto bg-slate-200 p-1  rounded-xl'>
            <div className='flex items-center justify-center gap-2 bg-[#0764EC] px-3 py-1 rounded-xl'>
                <WbSunnyOutlinedIcon sx={{ color: grey[50]}}/>
                <span className='text-white'>Light</span>
            </div>       
            <div className='flex items-center justify-center gap-2 px-3 py-1'>
                <DarkModeOutlinedIcon sx={{ color: blue[400]}}/>
                <span className='text-[#0764EC]'>Dark</span>
            </div>       
        </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar