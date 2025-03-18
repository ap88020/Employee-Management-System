import React from 'react'
import Headers from '../others/Headers'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({data}) => {
  // console.log(data);
  return (
    <div className='px-5'>
        <Headers data={data} />
        < TaskListNumber data={data} />
        < TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard