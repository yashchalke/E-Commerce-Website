import React from 'react'
import { products } from '../assets/products/productimages'

const CartItemCard = () => {
  return (
    <div className='w-full max-w-full'>
      <div className='grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-3 p-2'>
        {/* Image Container */}
        <div className='flex-shrink-0'>
          <div className='w-full aspect-square bg-gray-100 rounded-lg overflow-hidden'>
            <img 
              className="w-full h-full object-cover" 
              src={products.product_1}
              alt="Gradient Graphic T-shirt"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className='min-w-0 flex flex-col justify-between'>
          <div className='space-y-2'>
            <h3 className='text-lg md:text-xl font-medium truncate'>
              Gradient Graphic T-shirt
            </h3>
            <div className='text-sm space-y-1'>
              <p className='flex'>
                Size: <span className='text-gray-500 ml-1'>Large</span>
              </p>
              <p className='flex'>
                Color: <span className='text-gray-500 ml-1'>White</span>
              </p>
            </div>
          </div>

          <div className='flex justify-between items-center mt-3'>
            <h2 className='font-bold text-xl md:text-2xl'>$145</h2>
            <div className='flex items-center gap-3 px-3 py-1 bg-gray-100 rounded-full'>
              <button className='w-6 h-6 flex items-center justify-center'>-</button>
              <span className='min-w-[20px] text-center'>1</span>
              <button className='w-6 h-6 flex items-center justify-center'>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard
