import React, { useEffect, useState } from 'react';
import SummaryCards from '../components/SummaryCards';
import AddProductForm from '../components/AddProductForm';
import {jwtDecode} from 'jwt-decode';
import SalesByCategoryChart from '../components/SalesByCategoryChart';


const AdminPanel = () => {
  const [username,setusername] = useState('');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);


  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      try{
        const decoded = jwtDecode(token);
        setusername(decoded.username);
      }
      catch(err){
        console.error('Invalid token: ',err);
          }
    }
  
      fetch('http://localhost:3000/Api/Product/all-products', {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data?.Data)) {
      setProducts(data.Data); // ✅ Use the nested Data array
    } else {
      console.error('Products response is not an array:', data);
    }
  })
  .catch(err => console.error('Error fetching products:', err));

    // Fetch orders
  fetch('http://localhost:3000/Api/Admin/orders', {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data?.Data)) {
      setOrders(data.Data); // ✅ Use the nested Data array
    } else {
      console.error('Orders response is not an array:', data);
    }
  })
  .catch(err => console.error('Error fetching orders:', err));
},[]);
  
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black">
      <div className='text-white md:hidden poppins-bold'>
        <h1 className='text-center'>Admin Panel Not Accessible on Mobile Phones.</h1>
      </div>
      <div className="md:flex flex-col w-full h-[calc(100vh-2rem)] bg-gray-200 text-white p-4 rounded-lg shadow-lg overflow-auto hidden">
        <div className='flex justify-between'>
          <div>
        <h1 className="text-xl font-bold text-black ">Admin Dashboard</h1>
        <h1 className="mt-3 text-2xl text-black">
          Welcome, <span className="font-semibold text-black">{username}</span>!
        </h1>
        <p className="text-gray-500">
          This is what happenning in your store this month
        </p>
        </div>
        <div className='p-4'>
        <h1 className='text-4xl font-black text-black'>Shop</h1>
        </div>
        </div>
        {/* <SummaryCards />
        <AddProductForm /> */}
        
          <SummaryCards />
          {/* <div className="flex-1 h-full bg-black border rounded-2xl"></div>
          <div className="flex-1 h-full bg-black border rounded-2xl"></div>
          <div className="flex-1 h-full bg-black border rounded-2xl"></div>
          <div className="flex-1 h-full bg-black border rounded-2xl"></div> */}
        
        <div className='flex flex-row mt-4 gap-x-4'>
        <div className='flex flex-col flex-1 h-90 gap-y-3'>
          <div className='flex-1 h-full bg-black rounded-2xl'>
            <h1 className='pt-4 pl-4 text-xl font-semibold'>Total Customers</h1>
            <h1 className='pl-4 text-4xl font-semibold'> 00 </h1>
          </div>
          <div className='flex-1 h-full bg-black rounded-2xl'>
            <h1 className='pt-4 pl-4 text-xl font-semibold'>Active Coupons</h1>
            <h1 className='pl-4 text-4xl font-semibold'> 00 </h1>
          </div>
        </div>
        <div className='flex-1 h-full p-4 border border-black rounded-2xl'>
          <h1 className='text-black'>Orders</h1>
        </div>
        <div className='flex-1 h-full p-4 border border-black rounded-2xl'>
          <h1 className='text-black'>Sales By Category</h1>
          
          <SalesByCategoryChart products={products} orders={orders}/>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;