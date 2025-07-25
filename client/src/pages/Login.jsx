import React from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='px-10 py-10'>
        <div className='w-full border rounded-xl overflow-hidden'>
            <div className='h-15 bg-black text-white flex items-center px-4 text-2xl'>
                Login
            </div>
            <div className='px-2 py-2'>
                <form className='flex flex-col gap-y-4 mt-2'>
                    <div>
                    <label>UserName or Email</label>
                    <input className='border w-full rounded'></input>
                    </div>
                    <div>
                    <label>Password</label>
                    <input className='border w-full rounded'></input>
                    <a href='/forgot-password' className='text-sm text-gray-700 underline'>Forgot Password?</a>
                    </div>
                    <div>
                        <button className='border bg-black text-white w-full py-2 rounded-3xl'>Login</button>
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