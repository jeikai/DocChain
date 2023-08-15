import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'

const Dashboard = () => {
  return (
    <div className='flex gap-10 py-4'>
        <Sidebar/>
        <Body/>
    </div>
  )
}

export default Dashboard