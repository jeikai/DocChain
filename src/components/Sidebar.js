import React from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
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
import { useNavigate } from 'react-router-dom';
import { ConnectWallet, useAddress, useLogin } from '@thirdweb-dev/react'

const Sidebar = () => {
  const navigate = useNavigate()
  const address = useAddress()
  return (
    <aside className='fixed top-0 bottom-0 z-10 w-[250px] shadow-xl shadow-gray-800'>
      <div className='relative h-[100vh] pb-30px overflow-y-auto overflow-x-hidden'>
        <nav>
          <span className='block px-4 py-4 text-xl font-semibold'>DocChain</span>
        </nav>
        <ul className='mt-2 flex flex-col'>
          <li className='mx-1 my-2 cursor-pointer hover:bg-gray-900'>
            <div className='flex items-center px-4 py-2 gap-2'
            onClick={() => navigate( address === '0x807ed9A362411A5ba06dd8Fea8C69b717C696145' ? '/admindashboard' : '/user')}
            >
              <GridViewOutlinedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm'>Dashboard</span>
            </div> 
          </li>
          <li className='mx-1 my-2 cursor-pointer hover:bg-gray-900'>
            <div className='flex items-center px-4 py-2 gap-2'
            onClick={() => navigate( address === '0x807ed9A362411A5ba06dd8Fea8C69b717C696145' ? '/admindashboard/verified' : '/verified')}
            >
              <VerifiedIcon sx={{ fontSize: 20 }} />
              <span className='text-sm'>Verified</span>
            </div>
          </li>
        </ul>
        {/*<div className='mt-auto py-4 absolute bottom-0 w-full'>
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
        </div>*/}
      </div>
    </aside>
  )
}

export default Sidebar