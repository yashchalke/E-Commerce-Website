import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import Reviewcard from './Reviewcard'

const HappyCustomers = () => {
  const reviews = [1,2,3]
  return (
    <div className=' px-4 py-4 lg:px-20'>
        <div className=' flex justify-between'>
        <div className='font-extrabold text-xl lg:text-3xl'>OUR HAPPY CUSTOMERS</div>
        <div className=' flex items-center'>
            <ArrowLeft />
            <ArrowRight />
        </div>
        </div>
        <div className='flex overflow-x-auto'>
          {reviews.map((review) => (<Reviewcard />))}
        </div>
    </div>
  )
}

export default HappyCustomers