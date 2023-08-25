import React, { useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import { blue } from '@mui/material/colors'

import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";

const Header = () => {
  const ref = useRef(null)
  return (
    <div className='header h-16 flex items-center px-8 justify-between w-full shadow-md'>
      <div className='header-left flex items-center gap-4'>
        <div>
          <MenuIcon sx={{ color: blue[500], fontSize: 30 }}/>
        </div>
        <div className="border-[1.5px] border-slate-600 rounded-3xl p-2 flex gap-2 items-center w-[400px]">
        <SearchIcon/>
        <input className='w-full bg-transparent outline-none' placeholder="Search…"/>
      </div>
      </div>
      <div className='header-right'>
        <ul className='flex gap-4 items-center'>
          <li>
            <a href="">
              <DocumentScannerOutlinedIcon />
            </a>
          </li>
          <li>
            <a href="">
              <MailOutlineIcon />
            </a>
          </li>
          <li>
            <a href="">
              <NotificationsNoneOutlinedIcon />
            </a>
          </li>
          <li>
            <a href="">
              <SettingsOutlinedIcon />
            </a>
          </li>
          <li>
            <a href="">
              <LiveHelpOutlinedIcon />
            </a>
          </li>
          {/* <li>
            <a href="" className='flex items-center'>
              <img className='w-8 h-8 rounded-full' src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" alt="" />
            </a>
          </li>
          <li className='ml-8'>
            <a href="">
              <button className='outline-blue-500 text-blue-500 outline outline-offset-2 px-4 py-2 flex gap-4 outline-2 rounded-md'>
                <div className='rotate-180'>
                  <LogoutOutlinedIcon sx={{ color: blue[400] }}/>
                </div>
                Logout
              </button>
            </a>
          </li> */}
          {/* <li className='ml-8'> */}
            {/* <a href=""> */}
              {/* <button className='outline-blue-500 text-blue-500 outline outline-offset-2 px-4 py-2 flex gap-4 outline-2 rounded-md'
                onClick={() => ref.current?.click()}
              >
                <div className='rotate-180'>
                  <LogoutOutlinedIcon sx={{ color: blue[400] }}/>
                </div>
                Connect your wallet
              </button> */}
            {/* </a> */}
          {/* </li> */}
          <li className=''>
            {/* <Web3Button
              ref={ref}
              className='outline-blue-500 text-blue-500 outline outline-offset-2'
              contractAddress="{{contract_address}}"
              action={async (contract) => contract.call("myFunctionName")}
            >
              Login
            </Web3Button> */}
            <ConnectWallet
            className='outline-blue-500 text-blue-500 outline outline-offset-2'
              theme="dark"
              btnTitle="Connect Wallet"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header