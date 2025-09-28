import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../assets/products/productimages'
import { FilterIcon } from 'lucide-react';
import {RangeSlider} from "react-range-slider-input"
import Filter from './Filter';
import axios from 'axios'

const CategoryComponent = ({CategoryType}) => {
    const [products,setproducts] = useState([]);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);
    const [filters, setFilters] = useState({
    category: [],
    size: [],
    colors: [],
    price: []
  })

    const fetchproducts = async() =>{
        try{
            const res = await axios.post('http://localhost:3000/Api/Product/filter',filters)
            setproducts(res.data.data)
        }
        catch(e){
            console.error('Error fetching filtered products:', err)
        }
    }
    useEffect(() => {
    fetchproducts(filters)
    }, [filters])

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
            <Filter setFilters={setFilters}/>
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
                    
                    {products.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {products.map((product) => (
                            <div className="w-[160px] md:w-auto" key={product._id}>
                                <ProductCard
                                id={product._id}
                                productimage={product.image}
                                productname={product.name}
                                price={product.price}
                                />
                            </div>
                            ))}
                        </div>
                        ) : (
                        <div className="mt-10 text-lg text-center text-gray-500">
                            No products found matching your filters.
                        </div>
                        )}

                    
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

