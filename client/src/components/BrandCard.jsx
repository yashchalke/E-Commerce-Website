import React from 'react'

const BrandCard = ({Brandname}) => {
  return (
    <div className='border md:w-50 md:h-30 min-w-30 min-h-20 rounded-xl bg-black text-white flex justify-center items-center'>
       <div>{Brandname}</div>
    </div> 
  )
}

export default BrandCard