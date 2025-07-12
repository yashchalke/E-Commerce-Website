import React from 'react'
import { Link } from 'react-router-dom'
import {Menu, Search, ShoppingBag} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full h-[50px] md:h-[80px] bg-white border'>
        <div className='flex justify-between items-center mt-2 mx-4 h-8 md:h-12 md:mt-4 md:mx-[40px] '>
        <div className='flex gap-2 lg:gap-8 items-center'>
            <div className='md:hidden'>
                <Menu />
            </div>
        <div className='font-extrabold text-2xl md:text-4xl md:ml-2 '><Link to="/">Shop</Link></div>
        <div className="hidden lg:flex gap-5 ">
            <Link to="/Shop" className='text-gray-500 hover:text-black hover:underline  transition-colors duration-200'>Shop</Link>
            <Link to="/On-Sale" className='text-gray-500 hover:text-black hover:underline transition-colors duration-200'>On sale</Link>
            <Link to="/New-Arrivals" className='text-gray-500 hover:text-black hover:underline transition-colors duration-200'>New Arrivals</Link>
            <Link to="/Brands" className='text-gray-500 hover:text-black hover:underline transition-colors duration-200'>Brands</Link>
        </div>
        </div>
        
        <div className='flex items-center gap-6'>
            <div className='md:hidden'><Search /></div>
            <div className='hidden md:flex'>
            <input type="text" placeholder='Search' className='w-80 h-10 rounded-[20px] border bg-gray-300 text-black pl-3'></input>
        </div>
        <Link to="/cart"><div> <ShoppingBag /> </div></Link>
        <Link to="login-page"><button className='border px-4 py-2 bg-black text-white rounded-[10px] cursor-pointer'>Login</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar