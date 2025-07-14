import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className='relative lg:mt-20 mt-15 '>
        <div className='absolute top-[-80px] lg:px-10 px-5 py-5 ml-4 w-82 w-min-82 rounded-2xl lg:min-w-330 lg:ml-24 lg:min-h-30 lg:top-[-60px] bg-black'>
            <div className='flex flex-col gap-y-3 lg:flex lg:justify-between lg:flex-row'>
                <div className='text-white text-[13px] text-center lg:text-left lg:flex lg:items-center lg:font-extrabold lg:text-3xl'>
                    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                </div>
                <div className='flex flex-col gap-y-3'>
                    <input className='border border-white h-10 px-4 bg-white rounded-3xl' placeholder='Enter your Email address'/>
                    <button className='text-black bg-white py-2 lg:px-30 rounded-3xl'>subscribe to Newsletter</button>
                </div>
            </div>
        </div>
        <div className='bg-gray-300 h-150 lg:h-90 py-30 px-4 lg:py-24 lg:px-24'>
            <div className='h-40 lg:flex lg:justify-between'>
                <div className='lg:w-60 px-3 py-3 lg:flex lg:flex-col gap-y-3'> {/*logo*/}
                    <h1 className=' lg:text-3xl lg:font-extrabold'>SHOP.CO</h1>
                    <p className='text-[13px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex flex-row gap-x-3 lg:mt-10'>
                        <Twitter className='border w-10 h-10 p-2 rounded-3xl bg-white'/>
                        <Facebook className='border w-10 h-10 p-2 rounded-3xl bg-white'/>
                        <Instagram className='border w-10 h-10 p-2 rounded-3xl bg-white'/>
                        <Github className='border w-10 h-10 p-2 rounded-3xl bg-white'/>
                    </div>
                </div>

            <div className='flex flex-col gap-y-3 py-3'>
                <div>Company</div>
                <div>About</div>
                <div>Features</div>
                <div>Works</div>
                <div>Careers</div>
            </div>
            <div className='flex flex-col gap-y-3 py-3'>
                <div>Company</div>
                <div>About</div>
                <div>Features</div>
                <div>Works</div>
                <div>Careers</div>
            </div>
            <div className='flex flex-col gap-y-3 py-3'>
                <div>Company</div>
                <div>About</div>
                <div>Features</div>
                <div>Works</div>
                <div>Careers</div>
            </div>
            <div className='flex flex-col gap-y-3 py-3'>
                <div>Company</div>
                <div>About</div>
                <div>Features</div>
                <div>Works</div>
                <div>Careers</div>
            </div>
            </div>
        </div>
    </div>
    </footer>
  )
}


export default Footer