import React from 'react'
import BrandCard from '../components/BrandCard'
import TopSelling from '../components/TopSelling'

const BrandPage = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-center gap-4 px-8 py-4 lg:px-30 lg:py-4 md:flex md:gap-10 md:justify-center'>
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