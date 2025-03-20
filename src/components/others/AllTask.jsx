import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext);
    // console.log();
  return (
    <div className='p-3 h-48'>
        <div className='flex justify-between border border-white rounded w-full px-3 mt-1 py-2'>
                    <h1 className='bg-transparent text-2xl font-semibold w-1/5'>Emplyee Name</h1>
                    <h3 className='bg-transparent text-2xl font-semibold w-1/5'>New Task</h3>
                    <h1 className='bg-transparent text-2xl font-semibold w-1/5'>Active Task</h1>
                    <h1 className='bg-transparent text-2xl font-semibold w-1/5'>Completed</h1>
                    <h1 className='bg-transparent text-2xl font-semibold w-1/5'> Faild </h1>
        </div>
        <div id='allTask' className='h-[80%] overflow-auto' >
        {
            authData.employee.map((elem,idx) => {
                return <div className='flex justify-between border border-green-500 rounded w-full px-3 mt-1 py-2'>
                    <h1 key={idx} className='bg-transparent text-2xl font-semibold w-1/5'>{elem.firstName}</h1>
                    <h3 key={idx} className='bg-transparent text-2xl font-semibold w-1/5 text-fuchsia-400'>{elem.taskCount.active}</h3>
                    <h1 key={idx} className='bg-transparent text-2xl font-semibold w-1/5 text-green-400'>{elem.taskCount.newTask} </h1>
                    <h1 key={idx} className='bg-transparent text-2xl font-semibold w-1/5 text-yellow-400'>{elem.taskCount.completed}</h1>
                    <h1 key={idx} className='bg-transparent text-2xl font-semibold w-1/5 text-red-400'>{elem.taskCount.faild}</h1>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default AllTask