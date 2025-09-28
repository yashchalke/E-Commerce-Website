import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

/* UI section that shows the newest products */
function NewArrivals() {
  const [products,setproducts] = useState([]);
  const [loading,setloading] = useState(true);
  const [error,seterror] = useState(null);

  useEffect(()=>{
    const fetchproducts = async ()=>{
      const token = localStorage.getItem('token');
      try{
      const response = await fetch('http://localhost:3000/Api/Product/newarrivals' , {headers: {'Authorization': `Bearer ${token}`}});
      if(!response.ok){
        throw new Error('Network error');
      }
      const data = await response.json();
      if(data.Success){
        setproducts(data.Data || []);
      }
      else {
            throw new Error(data.message || 'Failed to fetch products');
            }
      }
      catch(err){
        console.log(err);
        seterror(err.message);
      }
      finally{
        setloading(false);
      }
    };

    fetchproducts();
  },[]);

  if (loading) {
  return <p>Loading....</p>;
  }
if (error) {
  return <p>Failed to Fetch Products: {error}</p>;
  }

  return (
    <div className="flex flex-col px-6 py-4 gap-y-5">
      <h2 className="py-2 text-3xl font-bold text-center">NEW ARRIVALS</h2>

      <div className="flex flex-row overflow-x-auto lg:flex lg:gap-x-8 gap-x-4 scroll-smooth lg:px-30">
        {products.map(p => (
          <ProductCard
            key={p._id}                 
            id={p._id}
            productname={p.name}
            productimage={p.image}
            price={p.price}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-12 py-1 transition duration-200 border rounded-3xl hover:bg-black hover:text-white">
          view all
        </button>
      </div>
    </div>
  );
}

export default NewArrivals;
