import React from 'react'
import { products } from '../assets/products/productimages'
import ProductTabs from '../components/ProductTabs'

const ProductDetails = () => {
  return (
    <div className='px-10 py-10'>
      <div className='md:flex justify-between'>
        <div className=' md:min-w-[49%] md:h-auto grid grid-cols-[25%_65%] grid-rows-3 gap-2 px-3 py-3'>
            <div className='border rounded-2xl overflow-hidden'>
              <img src={products.product_1} className=''/>
            </div>
            <div className='border rounded-2xl col-start-1 row-start-2 overflow-hidden'>
              <img src={products.product_1} className=''/>
            </div>
            <div className='border rounded-2xl col-start-1 row-start-3 overflow-hidden'>
              <img src={products.product_1} className=''/>
            </div>
            <div className='border rounded-2xl col-span-2 row-span-3 col-start-2 row-start-1'></div>
        </div>
        
        
        
        
        
        <div className='md:min-w-[49%] md:h-auto px-5 py-5'>
          <div className=' flex flex-col gap-y-2'>
            <h1 className='font-bold text-4xl'>One Life Graphic T-shirt</h1>
            <p className='text-2xl'>$260</p>
            <p className='font-extralight'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, 
              it offers superior comfort and style.</p>
          </div>
          <div className='border border-gray-400 my-5'></div> {/*line*/}
          <div className=''> {/*colors*/}
            Select Colors
            <div className='grid grid-cols-[40px_40px_40px] h-10 gap-2 mt-2'>
              <div className='border bg-amber-950 rounded-4xl'></div>
              <div className='border bg-violet-400 rounded-4xl'></div>
              <div className='border bg-blue-300 rounded-4xl'></div>
            </div>
            </div> 
          <div className='border border-gray-400 my-5'></div> {/*line*/}
          <div> {/*Choose size div*/}
            choose size
            <div className='h-10 m-2 grid grid-cols-[20%_20%_20%_20%] gap-5'>
                <div className='border rounded-3xl flex items-center justify-center bg-gray-300'> Small</div>
                <div className='border rounded-3xl flex items-center justify-center bg-gray-300'> Medium </div>
                <div className='border rounded-3xl flex items-center justify-center bg-gray-300'> Large </div>
                <div className='border rounded-3xl flex items-center justify-center bg-gray-300'> X-Large </div>
            </div>
            </div> 
          <div className='border my-5 border-gray-400'></div> {/*line*/}
          <div className='grid grid-cols-[20%_70%] gap-5 h-10'>
            <div className='border rounded-3xl flex items-center justify-center gap-x-5 overflow-hidden'>
              <div>+</div>
              <div>0</div>
              <div>-</div>
            </div>
            <div className='border rounded-3xl flex items-center justify-center text-white bg-black'> Add to cart</div>
          </div>
        </div>
      </div>
      <ProductTabs />
    </div>
  )
}

export default ProductDetails