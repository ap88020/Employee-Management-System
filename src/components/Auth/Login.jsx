import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin(email,password);

        console.log({"email" : email, "password" : password});
        setEmail('');
        setPassword('');
    }
    // console.log(handleLogin)
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <div className='border-2 border-emerald-500 p-10 rounded-xl '>
                <h1 className='text-3xl font-semibold text-center mb-3 text-emerald-500'>Login</h1>
                <form
                onSubmit={(e) => {
                    submitHandler(e);
                }} 
                className='flex flex-col'>
                    <input type="text"
                     value={email}
                     onChange={(e)=>{
                        setEmail(e.target.value);
                     }}
                     name="" 
                     placeholder='Enter your email' 
                     className='border-2 rounded-xl bg-transparent border-emerald-400 p-3 text-white placeholder:text-gray-400 outline-none' />

                    <input 
                     type="password" 
                     value={password}
                     onChange={(e)=>{
                        setPassword(e.target.value);
                     }}
                     name="" 
                     placeholder='Enter your password' 
                     className='border-2 rounded-xl bg-transparent border-emerald-400 p-3 text-white placeholder:text-gray-400 outline-none mt-3' />

                    <button className='border-2 rounded-xl bg-emerald-500 border-emerald-400 p-3 text-white placeholder:text-gray-400 outline-none mt-4'>Submit</button>
                </form>
        </div>
    </div>
    
  )
}

export default Login