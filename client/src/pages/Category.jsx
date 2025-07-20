import React from 'react'


const Category = () => {
  return (
    <div className='border px-10 py-10'>
        <div className='grid grid-cols-[20%_80%] gap-4'>
            <div className='border px-2 font-semibold flex items-center'>Filters</div>
            <div className='border'>
            <div className='border px-2 flex justify-between'>
                <h1 className=' px-2 font-semibold text-2xl'>Casual</h1>
                <div className='px-2 flex items-center gap-x-4'>
                    <p className='text-gray-500'>Showing 1-10 of 50 Products</p>
                    <p>Sort by:Most Popular</p>
                </div>
               </div> 
                <div>hello</div>
                </div>
        </div>
    </div>
  )
}

export default Category