import React from 'react'
import Headers from '../others/Headers'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
  return (
    <div className='px-5'>
        <Headers/>
        < TaskListNumber />
        < TaskList />
    </div>
  )
}

export default EmployeeDashboard