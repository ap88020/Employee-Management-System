import React, { useState } from 'react'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [TaskDate, setTaskDate] = useState('');
    const [taskAsignTo, setAsignTo] = useState('')
    const [taskCatogery, setCatogery] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const [task, setTask] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        setTask({taskTitle,TaskDate,taskAsignTo,taskCatogery,taskDescription , active : false ,newTask:true, faild:true,completed:true});


        const data = JSON.parse(localStorage.getItem('employee'));
        data.forEach((elem)=>{
            if(elem.firstName ==  taskAsignTo){
                elem.tasks.push(task);
                // console.log(elem.tasks);
            }
        })
        localStorage.setItem("employee",JSON.stringify(data));

        setTaskDate('');
        setTaskDate('');
        setAsignTo('');
        setCatogery('');
        setTaskDescription('');
    }
  return (
    <div>
            <form 
            onSubmit={(e)=>{
                submitHandler(e);
            }}
            className='flex justify-between items-center p-2 mt[-6rem]'
            >
                <div className='w-[50%]'>
                    <h1 className='font-medium mt-2'>Task Title</h1>
                    <input
                     type="text"
                     value={taskTitle}
                     onChange={(e)=>{
                        setTaskTitle(e.target.value)
                     }}
                     name="" 
                     placeholder='Make a UI design' 
                     className='border border-white w-[50%] h-9 rounded-sm outline-none text-white bg-transparent '
                    />
                    <h1 className='font-medium mt-2'>Date</h1>
                    <input
                    type="date" 
                    name=""
                    value={TaskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }} 
                    className='border border-white w-[50%] h-9 rounded-sm outline-none text-white bg-transparent'
                    />
                    <h1 className='font-medium mt-2'>Asign to</h1>
                    <input
                     type="text"
                     name=""
                     value={taskAsignTo}
                     onChange={(e)=>{
                        setAsignTo(e.target.value)
                     }}
                     placeholder='employee name' 
                     className='border border-white w-[50%] h-9 rounded-sm outline-none text-white bg-transparent' 
                     />
                    <h1 className='font-medium mt-2'>Category</h1>
                    <input 
                    type="text" 
                    name="" 
                    value={taskCatogery}
                     onChange={(e)=>{
                        setCatogery(e.target.value)
                     }}
                    placeholder='design dev etv' 
                    className='border border-white w-[50%] h-9 rounded-sm outline-none text-white bg-transparent' />
                </div>
                <div className='w-[50%]'>
                    <h1 className='font-medium'>Description</h1>
                    <textarea    
                    name="" 
                    value={taskDescription}
                     onChange={(e)=>{
                        setTaskDescription(e.target.value)
                     }}
                    className='h-[200px] w-[70%] border border-white'
                    ></textarea>
                    <br />
                    <button className='bg-emerald-500 font-medium rounded-md w-[70%] py-2'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask