import React from 'react'
import BrandCard from '../components/BrandCard'

const BrandPage = () => {
  return (
    <div>
        <div className='lg:px-30 lg:py-4 px-8 py-4 gap-4 justify-center md:flex flex flex-wrap md:gap-10 md:justify-center'>
          <BrandCard 
          Brandname={"ZARA"}
          />
          <BrandCard 
          Brandname={"PRADA"}
          />
          <BrandCard 
          Brandname={"VERSACHE"}
          />
          <BrandCard 
          Brandname={"ADIDAS"}
          />
          <BrandCard 
          Brandname={"NIKE"}
          />
          <BrandCard 
          Brandname={"PUMA"}
          />
          <BrandCard 
          Brandname={"h&m"}
          />
          <BrandCard 
          Brandname={"Zudio"}
          />
          <BrandCard 
          Brandname={"Arrow"}
          />
          <BrandCard 
          Brandname={"Lee"}
          />
            
        </div>
    </div>
  )
}

export default BrandPage