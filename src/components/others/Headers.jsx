import React from 'react'

const Headers = (props) => {
  // console.log("admin-> :" , data);
  // console.log("admin->firstName-> :" , data.firstName);
console.log(props);
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser();
  }

  return (
    <div className='flex items-center justify-between px-10'>
        <h1 className='font-semibold text-white text-2xl' >hii  <span className='block text-3xl text-red-300 font-medium'> {props.data.firstName == undefined ? props.data[0].firstName : props.data.firstName} 👋</span> </h1>
        <button onClick={logOutUser} className='text-white font-medium px-3 py-2 rounded-sm bg-red-600'>Log Out</button>
    </div>
  )
}

export default Headers