import React from 'react'

import ProductTabs from '../components/ProductTabs'
import TopSelling from '../components/TopSelling'
import NewArrivals from '../components/NewArrivals'

const ProductDetails = () => {
  return (
    <div className='md:px-10 md:py-10'>
      <div className='justify-between md:flex'>
        <div className=' md:min-w-[49%] md:h-auto grid grid-cols-[25%_65%] grid-rows-3 gap-2 px-3 py-3'>
            <div className='overflow-hidden border rounded-2xl'>
              {/*<img src={products.product_1} className=''/>*/}
            </div>
            <div className='col-start-1 row-start-2 overflow-hidden border rounded-2xl'>
              {/*<img src={products.product_1} className=''/>*/}
            </div>
            <div className='col-start-1 row-start-3 overflow-hidden border rounded-2xl'>
              {/*<img src={products.product_1} className=''/>*/}
            </div>
            <div className='col-span-2 col-start-2 row-span-3 row-start-1 border rounded-2xl'></div>
        </div>
        
      
        <div className='md:min-w-[49%] md:h-auto px-5 py-5'>
          <div className='flex flex-col gap-y-2'>
            <h1 className='text-4xl font-bold'>One Life Graphic T-shirt</h1>
            <p className='text-2xl'>$260</p>
            <p className='font-extralight'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, 
              it offers superior comfort and style.</p>
          </div>
          <div className='my-5 border border-gray-400'></div> {/*line*/}
          <div className=''> {/*colors*/}
            Select Colors
            <div className='grid grid-cols-[40px_40px_40px] h-10 gap-2 mt-2'>
              <div className='border bg-amber-950 rounded-4xl'></div>
              <div className='border bg-violet-400 rounded-4xl'></div>
              <div className='bg-blue-300 border rounded-4xl'></div>
            </div>
            </div> 
          <div className='my-5 border border-gray-400'></div> {/*line*/}
          <div> {/*Choose size div*/}
            choose size
            <div className='md:h-10 m-2 md:grid md:grid-cols-[20%_20%_20%_20%] md:gap-5 gap-2 flex '>
                <div className='flex items-center justify-center px-2 bg-gray-300 border rounded-3xl'> Small</div>
                <div className='flex items-center justify-center px-2 bg-gray-300 border rounded-3xl'> Medium </div>
                <div className='flex items-center justify-center px-2 bg-gray-300 border rounded-3xl'> Large </div>
                <div className='flex items-center justify-center px-2 bg-gray-300 border rounded-3xl'> X-Large </div>
            </div>
            </div> 
          <div className='my-5 border border-gray-400'></div> {/*line*/}
          <div className='grid grid-cols-[20%_70%] gap-5 h-10'>
            <div className='flex items-center justify-between w-full px-2 border rounded-3xl'>
              <div>+</div>
              <div>0</div>
              <div>-</div>
            </div>
            <div className='flex items-center justify-center text-white bg-black border rounded-3xl'> Add to cart</div>
          </div>
        </div>
      </div>
      <ProductTabs />
      <NewArrivals />
    </div>
  )
}

export default ProductDetails