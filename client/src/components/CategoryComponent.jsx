import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../assets/products/productimages'
import { FilterIcon } from 'lucide-react';
import {RangeSlider} from "react-range-slider-input"

const CategoryComponent = ({CategoryType}) => {
    const dummy = [
        {
                id:1,
                productimage:products.product_1,
                productname:"T-Shirt with tape Details",
                price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                productname:"Skinny Fit Jeans",
                price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                productname:"Checkered Shirt",
                price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                productname:"Sleeve Stripped T-shirt",
                price:"$130"
              },
              {
                id:1,
                productimage:products.product_1,
                productname:"T-Shirt with tape Details",
                price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                productname:"Skinny Fit Jeans",
                price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                productname:"Checkered Shirt",
                price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                productname:"Sleeve Stripped T-shirt",
                price:"$130"
              },
              {
                id:1,
                productimage:products.product_1,
                productname:"T-Shirt with tape Details",
                price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                productname:"Skinny Fit Jeans",
                price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                productname:"Checkered Shirt",
                price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                productname:"Sleeve Stripped T-shirt",
                price:"$130"
              },{
                id:1,
                productimage:products.product_1,
                productname:"T-Shirt with tape Details",
                price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                productname:"Skinny Fit Jeans",
                price:"$140"
              },
              {
                id:3,
                productimage:products.product_3,
                productname:"Checkered Shirt",
                price:"$180"
              },
              {
                id:4,
                productimage:products.product_4,
                productname:"Sleeve Stripped T-shirt",
                price:"$130"
              },
              {
                id:1,
                productimage:products.product_1,
                productname:"T-Shirt with tape Details",
                price:"$120"
              },
              {
                id:2,
                productimage:products.product_2,
                productname:"Skinny Fit Jeans",
                price:"$140"
              },
              
    ];
  return (
    <div className='md:px-10 md:py-10 px-4 py-2'>
        <div className='md:grid lg:grid-cols-[20%_80%] gap-10'>
            <div className='hidden px-2 lg:block'>
                <div className='border min-w-70'>
                <div className='px-4 py-4 flex justify-between border-b-2'>
                    <h1 className='text-xl  font-semibold'>Filters</h1>
                    <FilterIcon />
                </div>
                <div className='flex flex-col px-4 py-4 gap-y-2 mb-2 border-b-2 text-gray-500'>
                    <label><input type='checkbox' value={"Tshirt"}/> T-Shirt</label>
                    <label><input type='checkbox' value={"Shorts"}/> Shorts</label>
                    <label><input type='checkbox' value={"Shirts"}/> Shirts</label>
                    <label><input type='checkbox' value={"Hoodie"}/> Hoodie</label>
                    <label><input type='checkbox' value={"Jeans"}/> Jeans</label>
                </div>
                <div className='px-2 py-2 h-30 border-b-2'>
                    <h1 className='text-xl font-semibold'>price</h1>
                        <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-200 px-3 py-1 rounded text-sm">$0</span>
                        <input 
                        type="range"
                        min="0"
                        max="1000"
                        className="w-full accent-black"
                        />
                        <span className="bg-gray-200 px-3 py-1 rounded text-sm">$1000</span>
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                        price: $XXX&nbsp;-&nbsp;$YYY
                    </div>
                    </div>
                <div className='px-2 py-2 border-b-2'>
                    <h1 className='text-xl font-semibold'>Colors</h1>
                    <div className='grid grid-cols-5 grid-rows-2 h-22 gap-5 mt-2'>
                        <div className=''>
                            <div className='border bg-black rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-red-600 rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-yellow-300 rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-orange-400 rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-blue-400 rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-blue-700 rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-purple-600 rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-pink-400 rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-white rounded-4xl h-full'></div>
                        </div>
                        <div className=''>
                            <div className='border bg-black rounded-4xl h-full'></div>
                        </div>
                    </div>
                </div>

                <div className='px-2 py-2 border-b-2'>
                    <h1 className='text-xl font-semibold'>Size</h1>
                    <div className='flex gap-x-4 flex-wrap py-2 text-gray-500'>
                        <label><input type='checkbox' value={""}/>XX-Small</label>
                        <label><input type='checkbox' value={""}/>X-Small</label>
                        <label><input type='checkbox' value={""}/>Small</label>
                        <label><input type='checkbox' value={""}/>Medium</label>
                        <label><input type='checkbox' value={""}/>X-Large</label>
                        <label><input type='checkbox' value={""}/>XX-Large</label>
                        <label><input type='checkbox' value={""}/>3X-Large</label>
                        <label><input type='checkbox' value={""}/>4X-Large</label>
                    </div>
                </div>

                <div className='px-2 py-2'>
                    <h1 className='text-xl font-semibold'>Dress Style</h1>
                    <div className='flex flex-col gap-y-2 mt-2 text-gray-500'>
                        <label><input type='checkbox' value={""}/>Casual</label>
                        <label><input type='checkbox' value={""}/>Formal</label>
                        <label><input type='checkbox' value={""}/>Party</label>
                        <label><input type='checkbox' value={""}/>Gym</label>
                    </div>
                </div>

                <div className='px-2 py-2 '>
                    <button className='border w-full py-2 bg-black text-white rounded-3xl'>Apply Filter</button>
                </div>
                </div>
            </div>







            <div className=''>
            <div className=' px-2 flex justify-between'>
                <h1 className=' md:px-16 font-semibold text-2xl'>{CategoryType}</h1>
                <div className=' flex items-center gap-x-4 md:px-22'>
                    <p className='text-gray-500 '>Showing 1-10 of 50 Products</p>
                    <p className='hidden md:block'>Sort by:Most Popular</p>
                </div>
            </div> 
                <div className=' md:px-17 md:py-4 md:flex md:flex-wrap md:gap-5 flex flex-wrap gap-5 py-5'>
                    {dummy.map((product) => (
                    <div className="w-[160px] md:w-auto " key={product.id}>
                        <ProductCard 
                    id = {product.id}
                    productimage = {product.productimage}
                    productname = {product.productname}
                    price = {product.price}
                    />
                    </div>))}
                    
                </div>
                <div className=' border-gray-400'></div>
                <div className=' flex justify-between md:px-20 md:py-3 items-center flex-wrap mb-10'>
                    <div className='border px-2 py-2 md:px-10 md:py-3 rounded'>Previous</div>
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
                    <div className='border px-2 py-2 md:px-10 md:py-3 rounded'>Next</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryComponent

