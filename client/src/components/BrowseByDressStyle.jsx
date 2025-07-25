import React from 'react'

const BrowseByDressStyle = () => {
  return (
    <div className='flex md:flex-row md:px-20 flex-col px-4'> 
      <div className='border border-gray-400 w-full rounded-2xl bg-gray-200'>
        <div className='flex items-center justify-center py-4'>
          <h1 className='text-5xl font-bold text-center'>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className='grid grid-cols-1 md:flex md:flex-col gap-4 px-7 py-4'>
          <div className='md:grid md:grid-cols-[36%_62%] md:grid-rows-[300px] md:gap-6 grid grid-rows-[180px_180px] gap-4'>
          <div className=' rounded-2xl overflow-hidden border'>
            <h1 className='text-black absolute p-4 font-semibold text-2xl'>Casual</h1>
            <img src='image1.png' className='md:w-full h-full' />
            
          </div>
          <div className='rounded-2xl overflow-hidden border'>
            <h1 className='text-black absolute p-4 font-semibold text-2xl'>Formal</h1>
            <div className='flex justify-end h-full w-full'>
            <img src='image2.png' className=' md:h-full md:w-full' />
            </div>
          </div>
          </div>
           <div className='md:grid md:grid-cols-[62%_36%] md:grid-rows-[300px] md:gap-6 grid grid-rows-[180px_180px] gap-4'>
          <div className='rounded-2xl overflow-hidden border bg-white' >
            <h1 className='text-black absolute p-4 font-semibold text-2xl'>Party</h1>
            <div className='flex justify-end h-full w-full'>
            <img src='image3.png' className='h-full w-[1/2]' />
            </div>
          </div>
          <div className='rounded-2xl bg-white overflow-hidden border'>
            <h1 className='text-black absolute p-4 font-semibold text-2xl'>Gym</h1>
            <div className='flex justify-end'>
            <img src='image4.png' className=' w-[1/2] md:h-full md:w-full' /> 
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default BrowseByDressStyle