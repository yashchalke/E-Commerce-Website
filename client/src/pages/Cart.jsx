import React from 'react'
import ProductCard from '../components/ProductCard'

const Cart = () => {

  const cartitems = [
    "test-1","test-2","test-3","test-4","test-5"
  ]

  return (
    <>
    <div className='w-full flex flex-col items-center border px-10 py-10 gap-y-4 lg:flex lg:flex-row lg:gap-x-3'>
      {
        cartitems.map((items)=> (
          <ProductCard />
        )
        )
      }
    </div>
    </>
  )
}

export default Cart