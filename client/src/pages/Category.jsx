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
    <div className=' px-10 py-10'>
        <div className='grid grid-cols-[20%_80%] gap-4'>
            <div className='border px-2 font-semibold flex items-center'>Filters</div>
            <div className=''>
            <div className=' px-2 flex justify-between'>
                <h1 className=' px-16 font-semibold text-2xl'>Casual</h1>
                <div className=' flex items-center gap-x-4'>
                    <p className='text-gray-500'>Showing 1-10 of 50 Products</p>
                    <p>Sort by:Most Popular</p>
                </div>
            </div> 
                <div className='px-17 py-4 flex flex-wrap gap-5'>
                    {dummy.map((product) => (<ProductCard 
                    id = {product.id}
                    productimage = {product.productimage}
                    Title = {product.Title}
                    Price = {product.Price}
                    />))}
                    
                </div>
                <div className=' border-gray-400'></div>
                <div className='flex justify-between px-20 py-3 items-center'>
                    <div className='border px-10 py-3 rounded'>Previous</div>
                    <div>
                        <li className='flex gap-x-10'>
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
                    <div className='border px-10 py-3 rounded'>Next</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category