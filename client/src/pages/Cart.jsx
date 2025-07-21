import React from 'react'
import Reviewcard from '../components/Reviewcard'

const Cart = () => {

  return (
    <>
    <div className='md:px-12 md:py-5 px-5 py-5'> 
      <h1 className='md:text-4xl font-extrabold text-2xl'>YOUR CART</h1>
      <div className=' md:grid md:grid-cols-[60%_39%] gap-4 md:mb-4'>
        <div className='border border-gray-300 rounded-xl px-2 py-2 mt-5'>
          <div className='border h-30'></div>
          <div className='border h-30'></div>
          <div className='border h-30'></div>
        </div>
        <div className='md:mt-5 md:mb-4 mt-5 mb-4'>
          <div className='border rounded-xl border-gray-300 px-2 py-2'>
            <h1 className='font-semibold'>Order Summary</h1>
            <div className='mt-3 flex flex-col gap-y-3'>
              <div className='flex justify-between'>
                <h1 className='font-light'>Subtotal</h1>
                <h1 className='font-semibold'>$565</h1>
              </div>

              <div className='flex justify-between'>
                <h1 className='font-light'>Discount</h1>
                <h1 className='font-semibold text-red-500'>-$113</h1>
              </div>

              <div className='flex justify-between'>
                <h1 className='font-light'>Delivery Fee</h1>
                <h1 className='font-semibold'>$15</h1>
              </div>

              <div className='border'></div>

              <div className='flex justify-between'>
                <h1 className='font-light'>Total</h1>
                <h1 className='font-semibold'>$467</h1>
              </div>

              <div className='grid grid-cols-[70%_27%] gap-4'>
                <div className=' '>
                  <input className='py-1 w-full bg-gray-100 rounded-2xl px-2 md:text-[15px] text-[12px]' placeholder='Apply Coupon'></input>
                </div>
                <div className=''>
                  <button className='h-full w-full text-white bg-black rounded-2xl border md:text-[15px] text-[12px] flex justify-center items-center'>Apply</button>
                </div>
              </div>

              <div>
                <button className='px-7 py-2 h-full w-full text-white bg-black rounded-3xl border md:text-[15px] text-[12px]'>Go to CheckOut</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart