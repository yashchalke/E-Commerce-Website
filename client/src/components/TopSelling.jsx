import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';
import { products } from '../assets/products/productimages';


const TopSelling = () => {
    const dummy = [
          {
            id:5,
            productimage:products.product_5,
            productname:"Vertical Stripped Shirt",
            price:"$212"
          },
          {
            id:6,
            productimage:products.product_6,
            productname:"Courage Graphic T-shirt",
            price:"$145"
          },
          {
            id:7,
            productimage:products.product_7,
            productname:"Loose Fit Bermuda Shorts",
            price:"$80"
          },
          {
            id:8,
            productimage:products.product_8,
            productname:"Faded Skinny jeans",
            price:"$210"
          }
        ];
  return (
    <div className='flex flex-col gap-y-5 px-6 py-4'>
        <div className='text-center py-2 text-3xl font-bold'>TOP SELLING</div>
        <div className='lg:flex lg:gap-x-8 lg:px-30 flex flex-row overflow-x-auto gap-x-4 scroll-smooth'>
            {dummy.map((item)=>(<ProductCard 
              id = {item.id}
              productimage = {item.productimage}
              productname = {item.productname}
              price ={item.price}
            />))}
        </div>
        <div className='flex justify-center'>
        <button className='border px-12 py-1 rounded-3xl hover:cursor-pointer hover:bg-black hover:text-white transition duration-200'>view all</button>
        </div>
    </div>
  )
}

export default TopSelling