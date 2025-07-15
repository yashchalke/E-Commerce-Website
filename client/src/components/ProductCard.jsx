import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id,productimage,Title,Price}) => {
  return (
    <Link to={`/product/${id}`}>
    <div className='lg:min-w-70 lg:min-h-80 min-w-50 min-h-60  border px-3 py-3'>
        <div className='w-full lg:min-h-60 min-h-40 border rounded-2xl '>
        <img src={productimage} />
        </div>
        <div className='border mt-3 h-12'>
            <h1>{Title}</h1>
            <h1>{Price}</h1>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard