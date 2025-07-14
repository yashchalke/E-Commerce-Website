import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const HappyCustomers = () => {
  return (
    <div className='border px-4 py-4 lg:px-20'>
        <div className='border flex justify-between'>
        <div className='font-extrabold text-xl lg:text-3xl'>OUR HAPPY CUSTOMERS</div>
        <div className='border flex items-center'>
            <ArrowLeft />
            <ArrowRight />
        </div>
        </div>
    </div>
  )
}

export default HappyCustomers