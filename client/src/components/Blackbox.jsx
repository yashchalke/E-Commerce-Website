import React from 'react'
import { Link } from 'react-router-dom'

const Blackbox = () => {
  return (
    <div className='bg-black text-white text-center text-[10px] md:text-[15px] h-[38px] pt-3 md:pt-2'>
        Sign up and get 20% off to your first order. <span className='font-bold underline cursor-pointer'><Link to="/SignUp">Sign Up Now</Link></span>
        </div>
  )
}

export default Blackbox