import React from 'react'
import { products } from '../assets/products/productimages'

const CartItemCard = ({ item, onQuantityChange }) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    } else {
      onQuantityChange(item.id, 0); // triggers removal
    }
  };

  const handleIncrease = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  return (
    <div className='w-full max-w-full'>
      <div className='grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-3 p-2'>
        {/* Image */}
        <div className='flex-shrink-0'>
          <div className='w-full overflow-hidden bg-gray-100 rounded-lg aspect-square'>
            <img
              className="object-cover w-full h-full"
              src={item.image}
              alt={item.name}
            />
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-col justify-between min-w-0'>
          <div className='space-y-2'>
            <h3 className='text-lg font-medium truncate md:text-xl'>{item.name}</h3>
            <div className='space-y-1 text-sm'>
              <p className='flex'>Size: <span className='ml-1 text-gray-500'>{item.size}</span></p>
              <p className='flex'>Color: <span className='ml-1 text-gray-500'>{item.color}</span></p>
            </div>
          </div>

          <div className='flex items-center justify-between mt-3'>
            <h2 className='text-xl font-bold md:text-2xl'>${item.price}</h2>
            <div className='flex items-center gap-3 px-3 py-1 bg-gray-100 rounded-full'>
              <button className='flex items-center justify-center w-6 h-6' onClick={handleDecrease}>-</button>
              <span className='min-w-[20px] text-center'>{item.quantity}</span>
              <button className='flex items-center justify-center w-6 h-6' onClick={handleIncrease}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard
