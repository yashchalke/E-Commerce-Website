import React, { useEffect, useState } from 'react';
import CartItemCard from '../components/CartItemCard';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const deliveryFee = 15;
  const discount = 0;

  // Load cart items and calculate subtotal
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    calculateSubtotal(storedCart);
  }, []);

  // Recalculate subtotal
  const calculateSubtotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems
      .map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
      .filter(item => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  return (
    <div className='px-5 py-5 md:px-12 md:py-5'>
      <h1 className='mb-5 text-2xl font-extrabold md:text-4xl'>YOUR CART</h1>

      <div className='md:grid md:grid-cols-[60%_39%] gap-4'>
        {/* Cart Items Section */}
        <div className='p-2 mt-5 overflow-hidden border border-gray-300 rounded-xl md:mt-0'>
          {cartItems.length === 0 ? (
            <p className='py-5 text-center'>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className='w-full border-b-2 border-gray-300'>
                <CartItemCard item={item} onQuantityChange={handleQuantityChange} />
              </div>
            ))
          )}
        </div>

        {/* Order Summary Section */}
        <div className='mt-5 md:mt-0'>
          <div className='p-4 border border-gray-300 rounded-xl'>
            <h2 className='mb-4 text-lg font-semibold'>Order Summary</h2>

            <div className='space-y-3'>
              {/* Price Breakdown */}
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='font-light'>Subtotal</span>
                  <span className='font-semibold'>${subtotal.toFixed(2)}</span>
                </div>

                <div className='flex justify-between'>
                  <span className='font-light'>Discount</span>
                  <span className='font-semibold text-red-500'>-${discount.toFixed(2)}</span>
                </div>

                <div className='flex justify-between'>
                  <span className='font-light'>Delivery Fee</span>
                  <span className='font-semibold'>${deliveryFee.toFixed(2)}</span>
                </div>
              </div>

              <hr className='border-gray-300' />

              <div className='flex justify-between text-lg'>
                <span className='font-semibold'>Total</span>
                <span className='font-bold'>
                  ${(subtotal - discount + deliveryFee).toFixed(2)}
                </span>
              </div>

              {/* Coupon Section */}
              <div className='grid grid-cols-[1fr_auto] gap-3 mt-4'>
                <input
                  className='w-full px-3 py-2 text-sm bg-gray-100 rounded-full'
                  placeholder='Apply Coupon'
                  type="text"
                />
                <button className='px-4 py-2 text-sm font-medium text-white transition-colors bg-black rounded-full hover:bg-gray-800'>
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className='w-full py-3 mt-4 text-sm font-medium text-white transition-colors bg-black rounded-full hover:bg-gray-800'>
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;