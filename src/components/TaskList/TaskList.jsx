import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'

const TaskList = ({data}) => {
    // console.log("data-> " , data.tasks)
  return (
    <div id='taskList' className='h-[300px] w-full overflow-x-auto flex gap-4 items-center p-4 flex-nowrap'>
        {data.tasks.map((e , idx) => {
            if(e.active){
                return < AcceptTask key={idx} elem={e} />
            }

            if(e.newTask){
                return < NewTask key={idx} elem={e} />
            }

            if(e.completed){
                return < CompleteTask key={idx} elem={e} />
            }

            if(e.faild){
                return <FaildTask key={idx} elem={e} />
            }
        })}
    </div>
  )
}

export default TaskList
