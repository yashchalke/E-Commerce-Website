import React from 'react'

const Logoslider = () => {
  return (
    <div className='lg:h-40 h-25 bg-black lg:px-1 lg:py-1 flex items-center justify-center border'>
        <div className=' text-white flex lg:gap-x-30 lg:text-5xl text-2xl gap-x-8 border border-black'>
            <div>Versace</div>
            <div>zara</div>
            <div>Gucci</div>
            <div className='hidden lg:block'>Prada</div>
            <div className='hidden lg:block'>Calvin klein</div>
        </div>
    </div>
        
   
  )
}

export default Logoslider