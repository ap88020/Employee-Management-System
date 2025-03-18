import React from 'react'

const NewTask = ({elem}) => {
    // console.log(elem)
    // console.log("this is newTaks")
  return (
        <div className='w-[300px] bg-blue-300 h-full rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center p-5 bg-transparent'>
                <h1 className=' bg-red-500 px-4 py-1 rounded-md text-base'>{elem.category}</h1>
                <h1 className='font-bold text-base bg-transparent'>{elem.taskDate}</h1>
            </div>
            <h1 className='text-2xl px-3 font-semibold  bg-transparent'>{elem.taskTitle}</h1>
            <p className=' px-3 mt-2 font-medium bg-transparent '>
                {elem.taskDescription}
            </p>
            <div className='bg-transparent px-2 mt-3'>
                <button className='bg-yellow-500 text-black font-bold rounded-md px-2 py-1'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask