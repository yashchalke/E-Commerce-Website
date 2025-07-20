import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id,productimage,Title,Price}) => {
  return (
    <Link to={`/product/${id}`}>
    <div className='lg:min-w-70 lg:min-h-80 min-w-30 min-h-40 px-3 py-3 border rounded-2xl border-gray-300'>
        <div className='w-full lg:min-h-60 mb-2 rounded-2xl'>
        <img src={productimage} />
        </div>
        <div className=' lg:mt-3 lg:h-12 '>
            <h1 className='text-[13px]'>{Title}</h1>
            <h1>{Price}</h1>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard