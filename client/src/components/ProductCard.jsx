import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id,productname,productimage,price}) => {
  return (
    <Link to={`/product/${id}`}>
    <div className='lg:min-w-70 lg:min-h-80 min-w-40 min-h-46 px-3 py-3 border rounded-2xl border-gray-300'>
        <div className='max-w-70 lg:min-h-60 mb-2 rounded-2xl'>
        <img src={productimage} />
        </div>
        <div className=' lg:mt-3 lg:h-12 '>
            <h1 className='text-[11px] md:text-[13px]'>{productname}</h1>
            <h1 className='text-[15px] md:text-[20px]'>{price}</h1>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard