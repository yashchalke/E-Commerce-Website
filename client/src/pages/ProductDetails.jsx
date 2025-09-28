import React, { useEffect, useState } from 'react'

import ProductTabs from '../components/ProductTabs'
import TopSelling from '../components/TopSelling'
import NewArrivals from '../components/NewArrivals'
import { useParams } from 'react-router-dom'
import {products} from '../assets/products/productimages'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
  const {id} = useParams();
  const [product,setproduct] = useState(null);
  const [loading,setloading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null); //edited
  const [selectedSize, setSelectedSize] = useState(null); //edited
  const [quantity, setQuantity] = useState(1); // edited
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId'); 
  
  useEffect(()=>{
    window.scrollTo(0,0);
    const fetchProduct = async()=>{
      const token = localStorage.getItem('token');
      try{
        const response = await fetch(`http://localhost:3000/Api/Product/${id}`,{headers: {'Authorization': `Bearer ${token}`}});
        if(!response.ok){
          throw new Error("Products not found!!");
        }
        const data = await response.json();
        setproduct(data.Data || []);
      }
      catch(err){
        console.error(err);
      }
      finally{
        setloading(false);
      }
    }

    fetchProduct();
  },[id]);

  const syncCartWithBackend = async (updatedCart) => {

  console.log('Syncing cart for user:', userId); // ✅ Debug log

  try {
    const res = await fetch('http://localhost:3000/Api/Cart/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userId, items: updatedCart }),
    });

    const data = await res.json();
    console.log('Backend response:', data); // ✅ Debug log
  } catch (err) {
    console.error('Cart sync failed:', err);
  }
};


const handleAddToCart = () => {
  if (!token || !userId) {
    toast.info('Please login to add items to your cart.');
    navigate('/login');
    return;
  }
  
  if (!selectedColor || !selectedSize || quantity < 1) {
    toast.error('Please select color, size, and quantity');
    return;
  }

  const cartItem = {
    id: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
    color: selectedColor,
    size: selectedSize,
    quantity,
  };

  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  existingCart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(existingCart));

  // 🔄 Sync with backend
  syncCartWithBackend(existingCart);

  toast.success('Item added to cart successfully!');
};

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  
  return (
    <div className='md:px-10 md:py-10'>
      <div className='justify-between md:flex'>
        <div className=' md:min-w-[49%] md:h-fit grid grid-cols-[25%_65%] gap-3 px-3 py-3 '>
          <div className='grid grid-rows-3 gap-3'>
            <div className='overflow-hidden border rounded-2xl h-fit'>
              <img src={products.product_1} className=''/>
            </div>
            <div className='overflow-hidden border rounded-2xl h-fit'>
              <img src={products.product_1} className=''/>
            </div>
            <div className='overflow-hidden border rounded-2xl h-fit'>
              <img src={products.product_1} className=''/>
            </div>
            </div>
            <div className='col-span-2 col-start-2 row-span-3 row-start-1 overflow-hidden border rounded-2xl h-fit'>
              <img src={product.image} className='' />
            </div>
            
        </div>
        
      
        <div className='md:min-w-[49%] md:h-auto px-5 py-5'>
          <div className='flex flex-col gap-y-2'>
            <h1 className='text-4xl font-bold'>{product.name}</h1>
            <p className='text-2xl'>{product.price}</p>
            <p className='font-extralight'>{product.description}</p>
          </div>
          <div className='my-5 border border-gray-400'></div> {/*line*/}
          <div className=''> {/*colors*/}
            Select Colors
            <div className='grid grid-cols-[40px_40px_40px] h-10 gap-2 mt-2'>
              {['amber-500', 'violet-400', 'blue-300'].map((color)=>(
                <div 
                  key={color}
                  className={`border bg-${color} rounded-4xl cursor-pointer ${selectedColor === color ? 'ring-2 ring-black' : '' }`}
                  onClick={()=>{
                    setSelectedColor(color)
                  }}
                ></div>
              ))}
            </div>
            </div> 
          <div className='my-5 border border-gray-400'></div> {/*line*/}
          <div> {/*Choose size div*/}
            choose size
            <div className='md:h-10 m-2 md:grid md:grid-cols-[20%_20%_20%_20%] md:gap-5 gap-2 flex '>
                {['Small','Medium','Large','X-Large'].map((Size)=>(
                  <div
                  key={Size}
                  className={`flex items-center justify-center px-2 bg-gray-300 border rounded-3xl cursor-pointer ${selectedSize === Size ? 'ring-2 ring-black' : ''}`}
                  onClick={()=>{
                    setSelectedSize(Size)
                  }}
                  >{Size}</div>
                ))}
            </div>
            </div> 
          <div className='my-5 border border-gray-400'></div> {/*line*/}
          <div className='grid grid-cols-[20%_70%] gap-5 h-10'>
            <div className='flex items-center justify-between w-full px-2 border rounded-3xl'>
            <div className='cursor-pointer' onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</div>
              <div>{quantity}</div>
              <div className='cursor-pointer' onClick={() => setQuantity((q) => q + 1)}>+</div>
            </div>

            <div className='flex items-center justify-center text-white bg-black border cursor-pointer rounded-3xl'
            onClick={handleAddToCart}
            > Add to cart</div>
          </div>
        </div>
      </div>
      <ProductTabs />
      <NewArrivals /> {/*Photos are not visible on this page */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default ProductDetails