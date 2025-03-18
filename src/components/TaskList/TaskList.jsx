import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[300px] w-full overflow-x-auto flex gap-4 items-center p-4 flex-nowrap'>
        <div className='w-[300px] bg-red-300 h-full rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center p-5 bg-transparent'>
                <h1 className=' bg-red-500 px-4 py-1 rounded-md text-base'>High</h1>
                <h1 className='font-bold text-base bg-transparent'>17 march 2025</h1>
            </div>
            <h1 className='text-2xl px-3 font-semibold  bg-transparent'>Make a youTube video</h1>
            <p className=' px-3 mt-2 font-medium bg-transparent '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem quo architecto velit tempora ipsum?
            </p>
        </div>
        <div className='w-[300px] bg-blue-300 h-full rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center p-5 bg-transparent'>
                <h1 className=' bg-red-500 px-4 py-1 rounded-md text-base'>High</h1>
                <h1 className='font-bold text-base bg-transparent'>17 march 2025</h1>
            </div>
            <h1 className='text-2xl px-3 font-semibold  bg-transparent'>Make a youTube video</h1>
            <p className=' px-3 mt-2 font-medium bg-transparent '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem quo architecto velit tempora ipsum?
            </p>
        </div>
        <div className='w-[300px] bg-green-300 h-full rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center p-5 bg-transparent'>
                <h1 className=' bg-red-500 px-4 py-1 rounded-md text-base'>High</h1>
                <h1 className='font-bold text-base bg-transparent'>17 march 2025</h1>
            </div>
            <h1 className='text-2xl px-3 font-semibold  bg-transparent'>Make a youTube video</h1>
            <p className=' px-3 mt-2 font-medium bg-transparent '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem quo architecto velit tempora ipsum?
            </p>
        </div>
        <div className='w-[300px] bg-yellow-300 h-full rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center p-5 bg-transparent'>
                <h1 className=' bg-red-500 px-4 py-1 rounded-md text-base'>High</h1>
                <h1 className='font-bold text-base bg-transparent'>17 march 2025</h1>
            </div>
            <h1 className='text-2xl px-3 font-semibold  bg-transparent'>Make a youTube video</h1>
            <p className=' px-3 mt-2 font-medium bg-transparent '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem quo architecto velit tempora ipsum?
            </p>
        </div>
    </div>
  )
}

export default TaskList
