import React from 'react'
import { Link } from 'react-router-dom'
import {Menu, Search, ShoppingBag, X} from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen,SetIsOpen] = useState(false);

    const handleClose = () => {SetIsOpen(false)};

  return (
    <div className='sticky top-0 z-50 w-full h-[50px] md:h-[80px] bg-white border'>
        <div className='flex justify-between items-center mt-2 mx-4 h-8 md:h-12 md:mt-4 md:mx-[40px] '>
        <div className='flex items-center gap-2 lg:gap-8'>
            <div className='md:hidden'>
                <button onClick={()=> {SetIsOpen(!isOpen)}}><Menu /></button>
                
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
            <Link to="/login" onClick={handleClose}>
              <button className='mt-4 w-full border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'>
                Login
              </button>
            </Link>
          </div>
          </>
                )
                }
            </div>
        <div className='text-2xl font-extrabold md:text-4xl md:ml-2 '><Link to="/">Shop</Link></div>
        <div className="hidden gap-5 lg:flex ">
            <Link to="/Shop" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>Shop</Link>
            <Link to="/OnSale" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>On sale</Link>
            <Link to="/New-Arrivals" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>New Arrivals</Link>
            <Link to="/Brands" className='text-gray-500 transition-colors duration-200 hover:text-black hover:underline'>Brands</Link>
        </div>
        </div>
        
        <div className='flex items-center gap-6'>
            <div className='md:hidden'><Search /></div> {/*After clicking on search button , search bar should open to get the user input */}
            <div className='hidden md:flex'>
            <input type="text" placeholder='Search' className='w-80 h-10 rounded-[20px] border bg-gray-300 text-black pl-3'></input>
        </div>
        <Link to="/cart"><div> <ShoppingBag /> </div></Link>
        <Link to="login"><button className='border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'>Login</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar