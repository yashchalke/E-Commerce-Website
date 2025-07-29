import React, { useState } from 'react'

const SignUp = () => {
    const [username,setUsername] = useState('');
    const [Email,setemail] = useState('');
    const [Password,setPassword] = useState('');

    const ShowToast = (message) =>{
        alert(message);
    }

    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!username || !Email || !Password){
            ShowToast('All Fields are Required');
        }

        try{
            const res = await fetch('http://localhost:3000/Api/Auth/register',
                {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({ username , Email , Password})
                }
            );

            const data = await res.json();

            if(data.Success){
                ShowToast("Registration Done Successfully!!!!");
            }
            else{
                ShowToast(data.message || "Error");
            }
        }
        catch(err){
            ShowToast("Network Error. Please try Again");
            console.log(err);
        }

            
    };
    
    
    
  return (
    <div className='flex items-center justify-center px-10 py-10'>
        <div className='w-full overflow-hidden border md:max-w-120 rounded-xl '>
            <div className='flex items-center px-4 text-2xl text-white bg-black h-15'>
                Register
            </div>
            <div className='px-2 py-2'>
                <form className='flex flex-col mt-2 gap-y-4' onSubmit={handleSubmit}>
                    <div>
                    <label>UserName</label>
                    <input className='w-full border rounded'
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    required
                    ></input>
                    </div>
                    <div>
                    <label>Email</label>
                    <input className='w-full border rounded'
                    type='email'
                    value={Email}
                    onChange={(e)=> setemail(e.target.value)}
                    required
                    ></input>
                    </div>
                    <div>
                    <label>Password</label>
                    <input className='w-full border rounded'
                    type='password'
                    value={Password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    ></input>
                    </div>
                    <div>
                        <button className='w-full py-2 text-white bg-black border rounded-3xl' type='submit'>Register</button>
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