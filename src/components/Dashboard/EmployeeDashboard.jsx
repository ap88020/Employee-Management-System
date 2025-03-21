import React from 'react'
import Headers from '../others/Headers'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className='px-5'>
        <Headers changeUser={props.changeUser} data={props.data}  />
        < TaskListNumber data={props.data} />
        < TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard