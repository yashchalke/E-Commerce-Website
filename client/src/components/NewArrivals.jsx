import { useEffect, useState } from 'react';
import ProductCard        from './ProductCard';

/* UI section that shows the newest products */
function NewArrivals() {
  const [products,setproducts] = useState([]);
  const [loading,setloading] = useState(true);
  const [error,seterror] = useState(null);

  useEffect(()=>{
    const fetchproducts = async ()=>{
      try{
      const response = await fetch('http://localhost:3000/Api/Product/all-products');
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
    <div className="flex flex-col gap-y-5 px-6 py-4">
      <h2 className="text-center py-2 text-3xl font-bold">NEW ARRIVALS</h2>

      <div className="lg:flex lg:gap-x-8 flex flex-row overflow-x-auto gap-x-4 scroll-smooth">
        {products.map(p => (
          <ProductCard
            key={p._id}                 // REQUIRED so React can diff the list
            id={p._id}
            productname={p.productname}
            productimage={p.productimg.main}
            price={p.price}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="border px-12 py-1 rounded-3xl hover:bg-black hover:text-white transition duration-200">
          view all
        </button>
      </div>
    </div>
  );
}

export default NewArrivals;
