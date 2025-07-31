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
        const token = localStorage.getItem('token');
        try{
        const response = await fetch('http://localhost:3000/Api/Product/topselling', {headers: {'Authorization': `Bearer ${token}`}});
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
    <div className='flex flex-col px-6 py-4 gap-y-5'>
        <div className='py-2 text-3xl font-bold text-center'>TOP SELLING</div>
        <div className='flex flex-row overflow-x-auto lg:flex lg:gap-x-8 lg:px-30 gap-x-4 scroll-smooth'>
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
        <button className='px-12 py-1 transition duration-200 border rounded-3xl hover:cursor-pointer hover:bg-black hover:text-white'>view all</button>
        </div>
    </div>
  )
}

export default TopSelling