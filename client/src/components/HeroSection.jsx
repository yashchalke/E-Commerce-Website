import React from 'react'

const HeroSection = () => {
  return (
  <div className='w-full flex'>
    <div className='w-full h-auto flex flex-col lg:flex lg:flex-row lg:justify-between px-6'> {/*herosection div*/}
      <div className='lg:px-10 lg:py-20 py-10 flex-col space-y-15 '> {/*Left div*/}
        <div className=' flex-col space-y-4 '>
        <h1 className='lg:font-extrabold lg:text-6xl font-extrabold text-4xl '>FIND CLOTHES <br /> THAT MATCHES<br /> YOUR STYLE</h1>
        <p className='mt-0 font-extralight'> Browse through our diverse range of meticulously crafted garments, designed <br className='hidden lg:block'/> to bring out your individuality and cater to your sense of style. </p>
        </div>
        <div>
        <button className=" bg-black text-white rounded-3xl lg:px-15 w-full lg:w-auto py-3 hover:cursor-pointer">Shop Now</button></div>
        <div className=' lg:flex lg:flex-row lg:h-20 lg:justify-between flex flex-col gap-y-5'>
          <div className='lg:text-left text-center'>
            <h1 className='text-4xl font-bold'>200+</h1>
            <p className='font-extralight'>International Brands</p>
            </div>
          <div className='lg:text-left text-center'>
            <h1 className='text-4xl font-bold'>2,000+</h1>
            <p className='font-extralight'>International Brands</p>
          </div>
          <div className='lg:text-left text-center'>
            <h1 className='text-4xl font-bold'>30,000+</h1>
            <p className='font-extralight'>International Brands</p>
          </div>
        </div>
      </div>
      
      <div className=''> {/*Right div*/}
        <div className=''>
        <img src="Model-Photo-1.png" className='w-[650px] '/>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default HeroSection