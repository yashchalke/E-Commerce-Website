import React from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NewArrivals from '../components/NewArrivals'

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
                ShowToast('Login was Successfull!!');
                localStorage.setItem('token',data.token);
                navigate('/');
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
    <div className='flex items-center justify-center px-10 py-10'>
        <div className='w-full overflow-hidden border md:max-w-120 rounded-xl'>
            <div className='flex items-center px-4 text-2xl text-white bg-black h-15'>
                Login
            </div>
            <div className='px-2 py-2'>
                <form className='flex flex-col mt-2 gap-y-4' onSubmit={handlesubmit}>
                    <div>
                    <label>UserName or Email</label>
                    <input className='w-full border rounded' 
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Username'
                    required
                    ></input>
                    </div>
                    <div>
                    <label>Password</label>
                    <input className='w-full border rounded'
                    type='text'
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    required
                    ></input>
                    <a href='/forgot-password' className='text-sm text-gray-700 underline'>Forgot Password?</a>
                    </div>
                    <div>
                        <button className='w-full py-2 text-white bg-black border rounded-3xl' type='submit'>Login</button>
                    </div>
                    <div>
                        <button className='w-full py-2 text-white bg-black border rounded-3xl' onClick={()=> navigate('/SignUp')}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login