import React from 'react'

const SignUp = () => {
  return (
    <div className='px-10 py-10'>
        <div className='w-full border rounded-xl overflow-hidden'>
            <div className='h-15 bg-black text-white flex items-center px-4 text-2xl'>
                Register
            </div>
            <div className='px-2 py-2'>
                <form className='flex flex-col gap-y-4 mt-2'>
                    <div>
                    <label>UserName</label>
                    <input className='border w-full rounded'></input>
                    </div>
                    <div>
                    <label>Email</label>
                    <input className='border w-full rounded'></input>
                    </div>
                    <div>
                    <label>Password</label>
                    <input className='border w-full rounded'></input>
                    </div>
                    <div>
                        <button className='border bg-black text-white w-full py-2 rounded-3xl'>Register</button>
                    </div>
                    <div className='text-center'>
                        <p>Already have Account? <a href='/login' className='text-blue-800 underline'>Login</a></p>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default SignUp