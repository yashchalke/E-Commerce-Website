import { Facebook, Github, Instagram, PartyPopper, Twitter } from 'lucide-react'
import React from 'react'
import {FaCcVisa,FaCcMastercard,FaPaypal,FaApplePay,FaGooglePay} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='relative mt-15 lg:mt-20'>
        {/* Newsletter Subscription Section */}
        <div className='absolute inset-x-4 lg:inset-x-16 -top-16 lg:-top-20 z-10'>
          <div className='bg-black rounded-2xl p-6 lg:p-8'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
              {/* Newsletter Text */}
              <div className='text-white text-center lg:text-left'>
                <h2 className='text-2xl lg:text-4xl font-bold leading-tight'>
                  STAY UPTO DATE ABOUT
                  <br className='hidden lg:block' />
                  <span className='lg:inline block'> OUR LATEST OFFERS</span>
                </h2>
              </div>
              
              {/* Input Form */}
              <div className='flex flex-col gap-3 w-full lg:w-auto lg:min-w-[350px]'>
                <input 
                  className='w-full px-4 py-3 bg-white rounded-full text-gray-600 placeholder-gray-400' 
                  placeholder='Enter your Email address'
                  type="email"
                />
                <button className='w-full px-6 py-3 text-black bg-white rounded-full font-medium hover:bg-gray-100 transition-colors'>
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='bg-gray-100 pt-24 lg:pt-28 pb-8 px-4 lg:px-16'>
          {/* Footer Links Section */}
          <div className='flex flex-col lg:flex-row lg:justify-between mb-8'>
            {/* Company Info */}
            <div className='mb-8 lg:mb-0 lg:max-w-xs mt-25 lg:mt-0'>
              <h1 className='text-2xl lg:text-3xl font-extrabold mb-4'>SHOP.CO</h1>
              <p className='text-sm text-gray-600 mb-6 leading-relaxed'>
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className='flex gap-3'>
                <Twitter className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer'/>
                <Facebook className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer'/>
                <Instagram className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer'/>
                <Github className='w-10 h-10 p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer'/>
              </div>
            </div>

            {/* Footer Links Grid */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 flex-1 lg:max-w-3xl'>
              <div className='space-y-4'>
                <h3 className='font-bold text-sm'>COMPANY</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='hover:text-black cursor-pointer'>About</div>
                  <div className='hover:text-black cursor-pointer'>Features</div>
                  <div className='hover:text-black cursor-pointer'>Works</div>
                  <div className='hover:text-black cursor-pointer'>Careers</div>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='font-bold text-sm'>HELP</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='hover:text-black cursor-pointer'>Customer Support</div>
                  <div className='hover:text-black cursor-pointer'>Delivery Details</div>
                  <div className='hover:text-black cursor-pointer'>Terms & Conditions</div>
                  <div className='hover:text-black cursor-pointer'>Privacy Policy</div>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='font-bold text-sm'>FAQ</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='hover:text-black cursor-pointer'>Account</div>
                  <div className='hover:text-black cursor-pointer hidden lg:block'>Manage Deliveries</div>
                  <div className='hover:text-black cursor-pointer'>Orders</div>
                  <div className='hover:text-black cursor-pointer'>Payments</div>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='font-bold text-sm'>RESOURCES</h3>
                <div className='space-y-3 text-sm text-gray-600'>
                  <div className='hover:text-black cursor-pointer'>Free eBook</div>
                  <div className='hover:text-black cursor-pointer hidden lg:block'>Development Tutorial</div>
                  <div className='hover:text-black cursor-pointer'>How-to Blog</div>
                  <div className='hover:text-black cursor-pointer'>Youtube Playlist</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className='border-t border-gray-200 pt-6'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-4'>
              <div className='text-sm text-gray-600'>
                Shop.co © 2000-2023, All Rights Reserved
              </div>
              <div className='flex gap-3'>
                <FaCcVisa className='w-12 h-8 text-gray-600 hover:text-black cursor-pointer'/>
                <FaCcMastercard className='w-12 h-8 text-gray-600 hover:text-black cursor-pointer'/>
                <FaPaypal className='w-12 h-8 text-gray-600 hover:text-black cursor-pointer'/>
                <FaApplePay className='w-12 h-8 text-gray-600 hover:text-black cursor-pointer'/>
                <FaGooglePay className='w-12 h-8 text-gray-600 hover:text-black cursor-pointer'/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
