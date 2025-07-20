import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../assets/products/productimages'


const Category = () => {
    const dummy = [
        {
                id:1,
                productimage:products.product_1,
                Title:"T-Shirt with tape Details",
                Price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                Title:"Skinny Fit Jeans",
                Price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                Title:"Checkered Shirt",
                Price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                Title:"Sleeve Stripped T-shirt",
                Price:"$130"
              },
              {
                id:1,
                productimage:products.product_1,
                Title:"T-Shirt with tape Details",
                Price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                Title:"Skinny Fit Jeans",
                Price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                Title:"Checkered Shirt",
                Price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                Title:"Sleeve Stripped T-shirt",
                Price:"$130"
              },
              {
                id:1,
                productimage:products.product_1,
                Title:"T-Shirt with tape Details",
                Price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                Title:"Skinny Fit Jeans",
                Price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                Title:"Checkered Shirt",
                Price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                Title:"Sleeve Stripped T-shirt",
                Price:"$130"
              },{
                id:1,
                productimage:products.product_1,
                Title:"T-Shirt with tape Details",
                Price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                Title:"Skinny Fit Jeans",
                Price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                Title:"Checkered Shirt",
                Price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                Title:"Sleeve Stripped T-shirt",
                Price:"$130"
              },
              {
                id:1,
                productimage:products.product_1,
                Title:"T-Shirt with tape Details",
                Price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                Title:"Skinny Fit Jeans",
                Price:"$140"
              },
              
    ];
  return (
    <div className='md:px-10 md:py-10 px-4 py-2'>
        <div className='md:grid md:grid-cols-[20%_80%] gap-4'>
            <div className='hidden border px-2 font-semibold md:flex items-center'>Filters</div>
            <div className=''>
            <div className=' px-2 flex justify-between'>
                <h1 className=' md:px-16 font-semibold text-2xl'>Casual</h1>
                <div className=' flex items-center gap-x-4'>
                    <p className='text-gray-500'>Showing 1-10 of 50 Products</p>
                    <p className='hidden md:block'>Sort by:Most Popular</p>
                </div>
            </div> 
                <div className='md:px-17 md:py-4 md:flex md:flex-wrap md:gap-5 flex flex-wrap gap-5 py-5'>
                    {dummy.map((product) => (
                    <div className="w-[160px] md:w-auto " key={product.id}>
                        <ProductCard 
                    id = {product.id}
                    productimage = {product.productimage}
                    Title = {product.Title}
                    Price = {product.Price}
                    />
                    </div>))}
                    
                </div>
                <div className=' border-gray-400'></div>
                <div className=' flex justify-between md:px-20 md:py-3 items-center flex-wrap mb-10'>
                    <div className='border md:px-10 md:py-3 rounded'>Previous</div>
                    <div>
                        <li className='flex md:gap-x-10 gap-x-2'>
                            <ul>1</ul>
                            <ul>2</ul>
                            <ul>3</ul>
                            <ul>4</ul>
                            <ul>5</ul>
                            <ul>6</ul>
                            <ul>7</ul>
                            <ul>8</ul>
                            <ul>9</ul>
                        </li>
                    </div>
                    <div className='border md:px-10 md:py-3 rounded'>Next</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category