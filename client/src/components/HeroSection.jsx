import React from 'react'

const HeroSection = () => {
  return (
  <div className='w-full flex'>
    <div className='w-full h-auto flex justify-between px-6'> {/*herosection div*/}
      <div className='px-10 py-20 flex-col space-y-15'> {/*Left div*/}
        <div className=' flex-col space-y-4'>
        <h1 className='font-extrabold text-6xl '>FIND CLOTHES <br /> THAT MATCHES<br /> YOUR STYLE</h1>
        <p className='mt-0 font-extralight'> Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style. </p>
        </div>
        <div>
        <button className=" bg-black text-white rounded-3xl px-15 py-3 hover:cursor-pointer">Shop Now</button></div>
        <div className=' flex h-20 justify-between '>
          <div className=''>
            <h1 className='text-4xl font-bold'>200+</h1>
            <p className='font-extralight'>International Brands</p>
            </div>
          <div className=''>
            <h1 className='text-4xl font-bold'>2,000+</h1>
            <p className='font-extralight'>International Brands</p>
          </div>
          <div className=''>
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