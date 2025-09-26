import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../assets/products/productimages'
import { FilterIcon } from 'lucide-react';
import {RangeSlider} from "react-range-slider-input"

const CategoryComponent = ({CategoryType}) => {
    const [products,setproducts] = useState([]);
    const [loading,setloading] = useState(true);
    const [error,seterror] = useState(null);

    useEffect(()=>{
      const fetchproducts = async ()=>{
        const token = localStorage.getItem('token');
        try{
        const response = await fetch('http://localhost:3000/Api/Product/all-products' , {headers: {'Authorization': `Bearer ${token}`}});
        if(!response.ok){
          throw new Error('Network Error');
        }
        const data = await response.json();
        if(data.Success){
          setproducts(data.Data || []);
        }
        else{
          throw new Error(data.message || "Failed to Fetch");
        }
    }
    catch(err){
      console.log(err);
      seterror(err.message);
    }
    finally{
      setloading(false);
    }
  }
  fetchproducts();
    },[]);

    if(loading){
      return (<p>Loading.....</p>)
    }
    if(error){
      return (<p>Failed to Fetch: {error}</p>)
    }

    
  return (
    <div className='px-4 py-2 md:px-10 md:py-10'>
        <div className='md:grid lg:grid-cols-[20%_80%] gap-10'>
            <div className='hidden px-2 lg:block'>
                <div className='border min-w-70'>
                <div className='flex justify-between px-4 py-4 border-b-2'>
                    <h1 className='text-xl font-semibold'>Filters</h1>
                    <FilterIcon />
                </div>
                <div className='flex flex-col px-4 py-4 mb-2 text-gray-500 border-b-2 gap-y-2'>
                    <label><input type='checkbox' value={"Tshirt"}/> T-Shirt</label>
                    <label><input type='checkbox' value={"Shorts"}/> Shorts</label>
                    <label><input type='checkbox' value={"Shirts"}/> Shirts</label>
                    <label><input type='checkbox' value={"Hoodie"}/> Hoodie</label>
                    <label><input type='checkbox' value={"Jeans"}/> Jeans</label>
                </div>
                <div className='px-2 py-2 border-b-2 h-30'>
                    <h1 className='text-xl font-semibold'>price</h1>
                        <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-sm bg-gray-200 rounded">$0</span>
                        <input 
                        type="range"
                        min="0"
                        max="1000"
                        className="w-full accent-black"
                        />
                        <span className="px-3 py-1 text-sm bg-gray-200 rounded">$1000</span>
                    </div>
                    <div className="text-sm text-center text-gray-600">
                        price: $XXX&nbsp;-&nbsp;$YYY
                    </div>
                    </div>
                <div className='px-2 py-2 border-b-2'>
                    <h1 className='text-xl font-semibold'>Colors</h1>
                    <div className='grid grid-cols-5 grid-rows-2 gap-5 mt-2 h-22'>
                        <div className=''>
                            <div className='h-full bg-black border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-red-600 border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-yellow-300 border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-orange-400 border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-blue-400 border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-blue-700 border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-purple-600 border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-pink-400 border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-white border rounded-4xl'></div>
                        </div>
                        <div className=''>
                            <div className='h-full bg-black border rounded-4xl'></div>
                        </div>
                    </div>
                </div>

                <div className='px-2 py-2 border-b-2'>
                    <h1 className='text-xl font-semibold'>Size</h1>
                    <div className='flex flex-wrap py-2 text-gray-500 gap-x-4'>
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
                    <div className='flex flex-col mt-2 text-gray-500 gap-y-2'>
                        <label><input type='checkbox' value={""}/>Casual</label>
                        <label><input type='checkbox' value={""}/>Formal</label>
                        <label><input type='checkbox' value={""}/>Party</label>
                        <label><input type='checkbox' value={""}/>Gym</label>
                    </div>
                </div>

                <div className='px-2 py-2 '>
                    <button className='w-full py-2 text-white bg-black border rounded-3xl'>Apply Filter</button>
                </div>
                </div>
            </div>







            <div className=''>
            <div className='flex justify-between px-2 '>
                <h1 className='text-2xl font-semibold md:px-16'>{CategoryType}</h1>
                <div className='flex items-center gap-x-4 md:px-22'>
                    <p className='text-gray-500 '>Showing 1-10 of 50 Products</p>
                    <p className='hidden md:block'>Sort by:Most Popular</p>
                </div>
            </div> 
                <div className='flex flex-wrap justify-center gap-2 py-2 md:justify-start md:px-17 md:py-4 md:flex md:flex-wrap md:gap-10'>
                    {products.map((product) => (
                    <div className="w-[160px] md:w-auto " key={product._id}>
                        <ProductCard 
                    id = {product._id}
                    productimage = {product.productimg.main}
                    productname = {product.productname}
                    price = {product.price}
                    />
                    </div>))}
                    
                </div>
                <div className='border-gray-400 '></div>
                <div className='flex flex-wrap items-center justify-between mb-10 md:px-20 md:py-3'>
                    <div className='px-2 py-2 border rounded md:px-10 md:py-3'>Previous</div>
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
                    <div className='px-2 py-2 border rounded md:px-10 md:py-3'>Next</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryComponent

