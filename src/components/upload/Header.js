import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { blue} from '@mui/material/colors';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

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

const Header = () => {
  return (
    <div className='flex items-center gap-11 py-5 px-12 m-auto shadow-xl'>
      <div className="font-bold text-3xl pr-6">ProofGuard</div>
      <div className="border-[1.5px] border-blue-500 rounded-xl p-1">
        <MenuIcon sx={{ color: blue[500] }}/>
      </div>
      <div className="border-[1.5px] border-slate-600 w-1/4 rounded-3xl p-1 pl-5 flex gap-2 items-center">
        <SearchIcon/>
        <InputBase className='w-full' placeholder="Search…"/>
      </div>
      
      <div className='ml-auto'>
        <ul className='flex items-center gap-8'>
          <li><a href="#scan"><DocumentScannerOutlinedIcon sx={{ fontSize: 30 }}/></a></li>
          <li><a href="#mail"><MailOutlineIcon sx={{ fontSize: 30 }}/></a></li>
          <li><a href="#notify"><NotificationsNoneOutlinedIcon sx={{ fontSize: 30 }}/></a></li>
          <li><a href="setting"><SettingsOutlinedIcon sx={{ fontSize: 30 }}/></a></li>
          <li><a href="question"><LiveHelpOutlinedIcon sx={{ fontSize: 30 }}/></a></li>

          <li>
            <Dropdown
              menu={{items}}>
              <a href='#user'>
              <Space>
                <AccountCircleOutlinedIcon sx={{ fontSize: 30 }}/>
                <DownOutlined />
              </Space>
            </a>
            </Dropdown>
          </li>

          <li><a className='flex items-center gap-2 border-[1.5px] border-blue-500 rounded-xl p-3 px-10' href="logout">
            <LogoutOutlinedIcon sx={{ color: blue[400] }}/>
            <p className='text-blue-500'>Logout</p>
          </a></li>
        </ul>
      </div>

    </div>
  )
}

export default Header