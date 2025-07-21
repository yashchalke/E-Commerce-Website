import React from 'react'
import Reviewcard from '../components/Reviewcard'
import CartItemCard from '../components/CartItemCard'

const Cart = () => {
  return (
    <div className='md:px-12 md:py-5 px-5 py-5'> 
      <h1 className='md:text-4xl font-extrabold text-2xl mb-5'>YOUR CART</h1>
      
      <div className='md:grid md:grid-cols-[60%_39%] gap-4'>
        {/* Cart Items Section */}
        <div className='border border-gray-300 rounded-xl p-2 mt-5 md:mt-0 overflow-hidden'>
          <div className='border-b-2 border-gray-300 w-full'>
            <CartItemCard />
          </div>
          <div className='border-b-2 border-gray-300 w-full'>
            <CartItemCard />
          </div>
        </div>

        {/* Order Summary Section */}
        <div className='mt-5 md:mt-0'>
          <div className='border rounded-xl border-gray-300 p-4'>
            <h2 className='font-semibold text-lg mb-4'>Order Summary</h2>
            
            <div className='space-y-3'>
              {/* Price Breakdown */}
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='font-light'>Subtotal</span>
                  <span className='font-semibold'>$565</span>
                </div>
                
                <div className='flex justify-between'>
                  <span className='font-light'>Discount</span>
                  <span className='font-semibold text-red-500'>-$113</span>
                </div>
                
                <div className='flex justify-between'>
                  <span className='font-light'>Delivery Fee</span>
                  <span className='font-semibold'>$15</span>
                </div>
              </div>

              <hr className='border-gray-300' />

              <div className='flex justify-between text-lg'>
                <span className='font-semibold'>Total</span>
                <span className='font-bold'>$467</span>
              </div>

              {/* Coupon Section */}
              <div className='grid grid-cols-[1fr_auto] gap-3 mt-4'>
                <input 
                  className='py-2 px-3 bg-gray-100 rounded-full text-sm w-full' 
                  placeholder='Apply Coupon'
                  type="text"
                />
                <button className='px-4 py-2 text-white bg-black rounded-full text-sm font-medium hover:bg-gray-800 transition-colors'>
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className='w-full py-3 text-white bg-black rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mt-4'>
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
