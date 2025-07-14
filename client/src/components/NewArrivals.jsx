import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';


const NewArrivals = () => {
    const dummy = [1,2,3,4];
  return (
    <div className='flex flex-col gap-y-5 px-6 py-4'>
        <div className='text-center py-2 text-3xl font-bold'>NEW ARRIVALS</div>
        <div className='lg:flex lg:gap-x-8 lg:px-30 flex flex-row overflow-x-auto gap-x-4 scroll-smooth'>
            {dummy.map((item)=>(<ProductCard />))}
        </div>
        <div className='flex justify-center'>
        <button className='border px-12 py-1 rounded-3xl hover:cursor-pointer hover:bg-black hover:text-white transition duration-200'>view all</button>
        </div>
    </div>
  )
}

export default NewArrivals