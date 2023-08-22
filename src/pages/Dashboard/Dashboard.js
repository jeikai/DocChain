import React from 'react'
import { Header, Sidebar, Transaction } from '../../components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import { grey } from "@mui/material/colors";

const Dashboard = ({children}) => {
  return (
    <main className='flex w-full h-full'>
      <Sidebar />
      <div className='dashboard-content ml-[250px] w-full'>
        <Header />
        <div className='dashboard-link px-8 my-4 flex item-center'>
          <HomeOutlinedIcon sx={{ color: grey[500] }}/>
          <ChevronRightOutlinedIcon sx={{ color: grey[500] }}/>
          <span>Performance Report</span>
          <ChevronRightOutlinedIcon sx={{ color: grey[500] }}/>
          <span>Top Recruiters</span>
        </div>
        <Transaction />
      </div>
    </main>
  )
}

export default Dashboard