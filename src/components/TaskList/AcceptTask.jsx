import React from 'react'

const AcceptTask = ({elem}) => {
    // console.log(elem);
  return (
        <div className='w-[300px] bg-red-300 h-full rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center p-5 bg-transparent'>
                <h1 className=' bg-red-500 px-4 py-1 rounded-md text-base'>{elem.category}</h1>
                <h1 className='font-bold text-base bg-transparent'>{elem.taskDate}</h1>
            </div>
            <h1 className='text-2xl px-3 font-semibold  bg-transparent'>{elem.taskTitle}</h1>
            <p className=' px-3 mt-2 font-medium bg-transparent '>
                {elem.taskDescription}
            </p>
            <div className='flex justify-between mt-4 bg-transparent px-2'>
                <button className='bg-green-600 py-1 px-2 text-sm rounded-sm'>mark as done</button>
                <button className='bg-red-600 py-1 px-2 text-sm rounded-sm'>Faild</button>
            </div>
        </div>
  )
}

export default AcceptTask