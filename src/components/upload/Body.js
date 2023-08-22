import React from 'react'
import Content from './Content'
import Path from './Path'

function Body() {
  return (
    <div className='flex-[4] flex flex-col gap-2'>
      <Path />
      <Content />
    </div>
  )
}

export default Body