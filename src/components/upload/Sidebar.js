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
import { grey, blue } from '@mui/material/colors';

const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
           menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          menu item
        </a>
      ),
      key: '1',
    }
  ];

const Sidebar = () => {
  return (
    <div className='px-5 flex-[0.75] flex flex-col h-[85vh] '>
        <ul className='space-y-3 shadow-2xl p-8 rounded-xl'>
            <li><a className='flex items-center gap-3'  href="#dasboard">
                <GridViewOutlinedIcon/>
                <span className='text-[18px]'>Dashboard</span>
            </a></li>

            <li><a className='flex items-center gap-3' href="#myadmin">
                <AccountBoxOutlinedIcon/>
                <span className='text-[18px] flex-1'>My Admin</span>
                <Dropdown 
                    menu={{items}}>
                    <Space>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </a></li>

            <li><a className='flex items-center gap-3' href="#trainevent">
                <SlideshowOutlinedIcon/>
                <span className='text-[18px] flex-1'>Trainings & Events</span>
                <Dropdown
                    menu={{items}}>
                    <Space>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </a></li>

            <li><a className='flex items-center gap-3' href="#marketing">
                <WorkspacePremiumOutlinedIcon/>
                <span className='text-[18px]'>Marketing</span>
            </a></li>

            <li><a className='flex items-center gap-3' href="#project">
                <FolderOutlinedIcon/>
                <span className='text-[18px]'>Projects</span>
            </a></li>

            <li><a className='flex items-center gap-3' href="#conservice">
                <BusinessCenterOutlinedIcon/>
                <span className='text-[18px]'>Consultancy Service</span>
            </a></li>

            <li><a className='flex items-center gap-3' href="#eservice">
                <AssignmentTurnedInOutlinedIcon/>
                <span className='text-[18px] flex-1'>eService</span>
                <Dropdown
                    menu={{items}}>
                    <Space>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </a></li>

            <li><a className='flex items-center gap-3' href="#facibook">
                <LibraryBooksOutlinedIcon/>
                <span className='text-[18px]'>Facilities booking</span>
            </a></li>

            <li><a className='flex items-center gap-3' href="#pgeshop"> 
                <StorefrontOutlinedIcon/>
                <span className='text-[18px]'>ProofGuard E-Shop</span>
            </a></li>
        </ul>
    
        <div className='mt-auto py-4'>
        <div className='w-fit flex justify-center gap-2 border-[1.5px] m-auto bg-slate-200 px-2  py-2 rounded-xl'>
            <div className='flex justify-center gap-2 bg-[#0764EC] px-3 py-2 rounded-xl'>
                <WbSunnyOutlinedIcon sx={{ color: grey[50]}}/>
                <span className='text-white'>Light</span>
            </div>       
            <div className='flex justify-center gap-2 p-2'>
                <DarkModeOutlinedIcon sx={{ color: blue[400]}}/>
                <span className='text-[#0764EC]'>Dark</span>
            </div>       
        </div>
        </div>
    </div>
  )
}

export default Sidebar