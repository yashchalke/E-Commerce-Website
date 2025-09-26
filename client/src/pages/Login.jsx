import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/Api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, Password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login was successful!');
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.details._id); // ✅ Store userId for cart sync
        window.dispatchEvent(new Event('storage'));

        await fetchCartFromDB(data.details._id, data.token);
        
        navigate('/');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Something went wrong!');
    }
  };

  const fetchCartFromDB = async (userId, token) => {
  try {
    const res = await fetch(`https://r7cs0v6v-3000.inc1.devtunnels.ms/Api/Cart/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await res.json();
    localStorage.setItem('cart', JSON.stringify(data.items || []));
  } catch (err) {
    console.error('Failed to fetch cart:', err);
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
              <input
                className='w-full border rounded'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                className='w-full border rounded'
                type='password' // ✅ Correct input type
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
              />
              <a href='/forgot-password' className='text-sm text-gray-700 underline'>
                Forgot Password?
              </a>
            </div>
            <div>
              <button className='w-full py-2 text-white bg-black border rounded-3xl' type='submit'>
                Login
              </button>
            </div>
            <div>
              <button
                className='w-full py-2 text-white bg-black border rounded-3xl'
                type='button'
                onClick={() => navigate('/SignUp')}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
};

export default Login;