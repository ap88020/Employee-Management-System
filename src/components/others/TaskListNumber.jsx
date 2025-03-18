import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between items-center gap-1 p-2'>
        <div className='bg-red-400 w-[43%] py-3 px-4 rounded-xl'>
            <h1 className='text-2xl text-white font-bold rounded-xl bg-transparent'>{data.taskCount.active}</h1>
            <h3 className='text-3xl text-white font-medium bg-transparent'>Active task</h3>
        </div>
        <div className='bg-green-400 w-[43%] py-3 px-4 rounded-xl '>
            <h1 className='text-2xl text-white font-bold bg-transparent'>{data.taskCount.completed}</h1>
            <h3 className='text-3xl text-white font-medium bg-transparent'>Completed task</h3>
        </div>
        <div className='bg-blue-400 w-[43%] py-3 px-4 rounded-xl'>
            <h1 className='text-2xl text-white font-bold bg-transparent'>{data.taskCount.newTask}</h1>
            <h3 className='text-3xl text-white font-medium bg-transparent'>New task</h3>
        </div>
        <div className='bg-yellow-400 w-[43%] py-3 px-4 rounded-xl'>
            <h1 className='text-2xl font-bold bg-transparent text-black'>{data.taskCount.faild}</h1>
            <h3 className='text-3xl text-black font-medium bg-transparent'>Faild task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber