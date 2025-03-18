import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashBoard = ({data}) => {
  return (
    <div>
        <Headers data={data} />
        < CreateTask />
        < AllTask />
    </div>
  )
}

export default AdminDashBoard