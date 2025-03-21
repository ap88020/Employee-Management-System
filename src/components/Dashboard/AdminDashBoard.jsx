import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashBoard = (props) => {
  return (
    <div>
        <Headers changeUser={props.changeUser} data={props.data} />
        < CreateTask />
        < AllTask />
    </div>
  )
}

export default AdminDashBoard