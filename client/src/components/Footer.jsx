import { Facebook, Github, Instagram, PartyPopper, Twitter } from 'lucide-react'
import React from 'react'
import {FaCcVisa,FaCcMastercard,FaPaypal,FaApplePay,FaGooglePay} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='relative mt-15 lg:mt-20'>
        {/* Newsletter Subscription Section */}
        <div className='absolute z-10 inset-x-4 lg:inset-x-16 -top-16 lg:-top-20'>
          <div className='p-6 bg-black rounded-2xl lg:p-8'>
            <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
              {/* Newsletter Text */}
              <div className='text-center text-white lg:text-left'>
                <h2 className='text-2xl font-bold leading-tight lg:text-4xl'>
                  STAY UPTO DATE ABOUT
                  <br className='hidden lg:block' />
                  <span className='block lg:inline'> OUR LATEST OFFERS</span>
                </h2>
              </div>
              
              {/* Input Form */}
              <div className='flex flex-col gap-3 w-full lg:w-auto lg:min-w-[350px]'>
                <input 
                  className='w-full px-4 py-3 text-gray-600 placeholder-gray-400 bg-white rounded-full' 
                  placeholder='Enter your Email address'
                  type="email"
                />
                <button className='w-full px-6 py-3 font-medium text-black transition-colors bg-white rounded-full hover:bg-gray-100'>
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='px-4 pt-24 pb-8 bg-gray-100 lg:pt-28 lg:px-16'>
          {/* Footer Links Section */}
          <div className='flex flex-col mb-8 lg:flex-row lg:justify-between'>
            {/* Company Info */}
            <div className='mb-8 lg:mb-0 lg:max-w-xs mt-25 lg:mt-0'>
              <h1 className='mb-4 text-2xl font-extrabold lg:text-3xl'>SHOP.CO</h1>
              <p className='mb-6 text-sm leading-relaxed text-gray-600'>
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className='flex gap-3'>
                <Twitter className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50'/>
                <Facebook className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50'/>
                <Instagram className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50'/>
                <Github className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50'/>
              </div>
            </div>

            {/* Footer Links Grid */}
            <div className='grid flex-1 grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-16 lg:max-w-3xl'>
              <div className='space-y-4'>
                <h3 className='text-sm font-bold'>COMPANY</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='cursor-pointer hover:text-black'>About</div>
                  <div className='cursor-pointer hover:text-black'>Features</div>
                  <div className='cursor-pointer hover:text-black'>Works</div>
                  <div className='cursor-pointer hover:text-black'>Careers</div>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-sm font-bold'>HELP</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='cursor-pointer hover:text-black'>Customer Support</div>
                  <div className='cursor-pointer hover:text-black'>Delivery Details</div>
                  <div className='cursor-pointer hover:text-black'>Terms & Conditions</div>
                  <div className='cursor-pointer hover:text-black'>Privacy Policy</div>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-sm font-bold'>FAQ</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='cursor-pointer hover:text-black'>Account</div>
                  <div className='hidden cursor-pointer hover:text-black lg:block'>Manage Deliveries</div>
                  <div className='cursor-pointer hover:text-black'>Orders</div>
                  <div className='cursor-pointer hover:text-black'>Payments</div>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-sm font-bold'>RESOURCES</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='cursor-pointer hover:text-black'>Free eBook</div>
                  <div className='hidden cursor-pointer hover:text-black lg:block'>Development Tutorial</div>
                  <div className='cursor-pointer hover:text-black'>How-to Blog</div>
                  <div className='cursor-pointer hover:text-black'>Youtube Playlist</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className='pt-6 border-t border-gray-200'>
            <div className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between'>
              <div className='text-sm text-gray-600'>
                Yash Chalke © 2025 , All Rights Reserved
              </div>
              <div className='flex gap-3'>
                <FaCcVisa className='w-12 h-8 text-gray-600 cursor-pointer hover:text-black'/>
                <FaCcMastercard className='w-12 h-8 text-gray-600 cursor-pointer hover:text-black'/>
                <FaPaypal className='w-12 h-8 text-gray-600 cursor-pointer hover:text-black'/>
                <FaApplePay className='w-12 h-8 text-gray-600 cursor-pointer hover:text-black'/>
                <FaGooglePay className='w-12 h-8 text-gray-600 cursor-pointer hover:text-black'/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
