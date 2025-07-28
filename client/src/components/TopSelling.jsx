import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';
import { products } from '../assets/products/productimages';


const TopSelling = () => {
    const [products,setproducts] = useState([]);
    const [loading,setloading] = useState(true);
    const [error,seterror] = useState(null);

    useEffect(()=>{
      const fetchproducts = async () =>{
        try{
        const response = await fetch('http://localhost:3000/Api/Product/all-products');
        if(!response.ok){
          throw new Error('Network error');
        }
        else{
          const data = await response.json();
          setproducts(data.Data || []);
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
      return (<p>Loading....</p>)
    }

    if(error){
      return (<p>Failed to fetch products..</p>)
    }
  return (
    <div className='flex flex-col gap-y-5 px-6 py-4'>
        <div className='text-center py-2 text-3xl font-bold'>TOP SELLING</div>
        <div className='lg:flex lg:gap-x-8 lg:px-30 flex flex-row overflow-x-auto gap-x-4 scroll-smooth'>
            {products.map((product)=>(
              <ProductCard 
              key={product._id}
              id={product._id}
              productimage={product.productimg.main}
              productname={product.productname}
              price={product.price}
              />
            ))}
        </div>
        <div className='flex justify-center'>
        <button className='border px-12 py-1 rounded-3xl hover:cursor-pointer hover:bg-black hover:text-white transition duration-200'>view all</button>
        </div>
    </div>
  )
}

export default TopSelling