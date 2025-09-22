import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  const checkLogin = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  checkLogin(); // initial check

  window.addEventListener('storage', checkLogin); // listen for login/logout

  return () => {
    window.removeEventListener('storage', checkLogin);
  };
}, []);

  const handleClose = () => SetIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('cart');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className='sticky top-0 z-50 w-full h-[50px] md:h-[80px] bg-white border'>
      <div className='flex justify-between items-center mt-2 mx-4 h-8 md:h-12 md:mt-4 md:mx-[40px]'>
        {/* Left Section */}
        <div className='flex items-center gap-2 lg:gap-8'>
          {/* Mobile Menu */}
          <div className='md:hidden'>
            <button onClick={() => SetIsOpen(!isOpen)}><Menu /></button>

            {isOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-white opacity-60"
                  onClick={handleClose}
                />
                <div className='fixed top-0 left-0 z-50 flex flex-col w-64 h-full gap-4 p-6 bg-white shadow-lg animate-slideIn'>
                  <button onClick={handleClose} className="self-end mb-4" aria-label="Close menu">
                    <X size={24} />
                  </button>
                  <Link to="/Shop" className="py-2 border-b" onClick={handleClose}>Shop</Link>
                  <Link to="/OnSale" className="py-2 border-b" onClick={handleClose}>On sale</Link>
                  <Link to="/New-Arrivals" className="py-2 border-b" onClick={handleClose}>New Arrivals</Link>
                  <Link to="/Brands" className="py-2 border-b" onClick={handleClose}>Brands</Link>
                  <Link to="/cart" className="py-2 border-b" onClick={handleClose}>Cart</Link>
                  {!isLoggedIn ? (
                    <Link to="/login" onClick={handleClose}>
                      <button className='mt-4 w-full border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'>
                        Login
                      </button>
                    </Link>
                  ) : (
                    <button
                      className='mt-4 w-full border px-4 py-2 bg-red-600 text-white rounded-[10px] cursor-pointer'
                      onClick={() => {
                        handleLogout();
                        handleClose();
                      }}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Logo */}
          <div className='text-2xl font-extrabold md:text-4xl md:ml-2'>
            <Link to="/">Shop</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden gap-5 lg:flex">
            <Link to="/Shop" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>Shop</Link>
            <Link to="/OnSale" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>On sale</Link>
            <Link to="/New-Arrivals" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>New Arrivals</Link>
            <Link to="/Brands" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>Brands</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-6'>
          <div className='md:hidden'><Search /></div>
          <div className='hidden md:flex'>
            <input type="text" placeholder='Search' className='w-80 h-10 rounded-[20px] border bg-gray-300 text-black pl-3' />
          </div>
          <Link to="/cart"><div><ShoppingBag /></div></Link>
          {!isLoggedIn ? (
            <Link to="/login">
              <button className='border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'>Login</button>
            </Link>
          ) : (
            <button
              className='border px-4 py-2 bg-red-600 text-white rounded-[10px] cursor-pointer'
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;