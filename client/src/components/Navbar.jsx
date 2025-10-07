import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [query, setquery] = useState('');
  const navigate = useNavigate();
  const userMenuRef = useRef();

  const searchItem = () => {
    const trimmed = query.trim();
    navigate(`/shop?search=${encodeURIComponent(trimmed.trim())}`);
  }

  const handleinputchange = (e) => {
    setquery(e.target.value);
  }

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkLogin();
    window.addEventListener('storage', checkLogin);

    return () => {
      window.removeEventListener('storage', checkLogin);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('cart');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleClose = () => SetIsOpen(false);

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
                <div className="fixed inset-0 z-40 bg-white opacity-60" onClick={handleClose} />
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
                    <div ref={userMenuRef} className='relative'>
                      <button
                        className='mt-4 w-full border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'
                        onClick={() => setShowUserMenu(!showUserMenu)}
                      >
                        <User />
                      </button>
                      {showUserMenu && (
                        <div className='absolute left-0 w-40 mt-2 bg-white border rounded shadow-lg'>
                          <button
                            className='w-full px-4 py-2 text-left hover:bg-gray-100'
                            onClick={() => {
                              navigate('/orders');
                              setShowUserMenu(false);
                              handleClose();
                            }}
                          >
                            My Orders
                          </button>
                          <button
                            className='w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100'
                            onClick={() => {
                              handleLogout();
                              setShowUserMenu(false);
                              handleClose();
                            }}
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
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
            <Link to="/Shop" className='text-gray-500 hover:text-black hover:underline'>Shop</Link>
            <Link to="/OnSale" className='text-gray-500 hover:text-black hover:underline'>On sale</Link>
            <Link to="/New-Arrivals" className='text-gray-500 hover:text-black hover:underline'>New Arrivals</Link>
            <Link to="/Brands" className='text-gray-500 hover:text-black hover:underline'>Brands</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-6'>
          <div className='md:hidden'><Search /></div>

          {/* Search Bar */}
          <div className='hidden md:flex rounded-[20px] bg-gray-300 '>
            <input type="text" value={query} onChange={handleinputchange} placeholder='Search' className='h-10 p-3 text-black outline-none w-80' />
            <button className='pr-3 cursor-pointer hover:scale-110' onClick={searchItem}><Search /></button>
          </div>

          {/* Add to cart */}
          <Link to="/cart"><ShoppingBag /></Link>
          {!isLoggedIn ? (
            <Link to="/login">
              <button className='border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'>Login</button>
            </Link>
          ) : (
            <div ref={userMenuRef} className='relative'>
              <button
                className='border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User />
              </button>
              {showUserMenu && (
                <div className='absolute right-0 w-40 mt-2 bg-white border rounded shadow-lg'>
                  <button
                    className='w-full px-4 py-2 text-left hover:bg-gray-100'
                    onClick={() => {
                      navigate('/orders');
                      setShowUserMenu(false);
                    }}
                  >
                    My Orders
                  </button>
                  <button
                    className='w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100'
                    onClick={() => {
                      handleLogout();
                      setShowUserMenu(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;