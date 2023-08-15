import React from 'react'
import Title from './Title'
import DataTable from './DataTable'

const Content = () => {
  return (
    <div className='w-[95%] rounded-3xl flex flex-col items-center shadow-2xl pb-8'>
        <Title/>
        <DataTable/>
    </div>
  )
}

export default Content