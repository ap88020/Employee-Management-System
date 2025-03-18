import React from 'react'

const Headers = () => {
  return (
    <div className='flex items-center justify-between px-10'>
        <h1 className='font-semibold text-white text-2xl' >hii  <span className='block text-3xl text-red-300 font-medium'>Akash 👋</span> </h1>
        <button className='text-white font-medium px-3 py-2 rounded-sm bg-red-600'>Log Out</button>
    </div>
  )
}

export default Headers