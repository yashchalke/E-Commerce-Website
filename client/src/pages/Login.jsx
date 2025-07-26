import React from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [username,setUsername] = useState('');
    const [Password,setPassword] = useState('');
    const navigate = useNavigate();

    const ShowToast = (message) =>{
        alert(message)
    };

    const handlesubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:3000/Api/Auth/login',
                {
                    method:'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({username,Password})
                }
            );

            const data = await response.json();

            if(response.ok){
                ShowToast('Login was Successfull!!')
            }
            else{
                ShowToast(data.message || 'Login Failed');
            }
        }
        catch(err){
            ShowToast('Something went Wrong!');
        }
    };
  return (
    <div className='px-10 py-10 flex items-center justify-center'>
        <div className='w-full md:max-w-120 border rounded-xl overflow-hidden'>
            <div className='h-15 bg-black text-white flex items-center px-4 text-2xl'>
                Login
            </div>
            <div className='px-2 py-2'>
                <form className='flex flex-col gap-y-4 mt-2' onSubmit={handlesubmit}>
                    <div>
                    <label>UserName or Email</label>
                    <input className='border w-full rounded' 
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Username'
                    required
                    ></input>
                    </div>
                    <div>
                    <label>Password</label>
                    <input className='border w-full rounded'
                    type='text'
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    required
                    ></input>
                    <a href='/forgot-password' className='text-sm text-gray-700 underline'>Forgot Password?</a>
                    </div>
                    <div>
                        <button className='border bg-black text-white w-full py-2 rounded-3xl' type='submit'>Login</button>
                    </div>
                    <div>
                        <button className='border bg-black text-white w-full py-2 rounded-3xl' onClick={()=> navigate('/SignUp')}>Sign Up</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login