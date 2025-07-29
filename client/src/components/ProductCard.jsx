import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({id,productname,productimage,price}) => {
  const navigate = useNavigate();

  return (
    
    <div className='px-3 py-3 border border-gray-300 lg:min-w-70 lg:min-h-80 min-w-40 min-h-46 rounded-2xl' onClick={()=> navigate(`/product/${id}`)}>
        <div className='mb-2 max-w-70 lg:min-h-60 rounded-2xl'>
        <img src={productimage} />
        </div>
        <div className=' lg:mt-3 lg:h-12'>
            <h1 className='text-[11px] md:text-[13px]'>{productname}</h1>
            <h1 className='text-[15px] md:text-[20px]'>{price}</h1>
        </div>
    </div>
    
  )
}

export default ProductCard