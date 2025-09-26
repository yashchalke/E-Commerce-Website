import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/Api/Payment/session/${sessionId}`);
        const data = await res.json();
        setOrderDetails(data);
        localStorage.removeItem('cart'); // ✅ Clear cart after payment
      } catch (err) {
        console.error('Failed to fetch order details:', err);
      }
    };

    if (sessionId) fetchOrderDetails();
  }, [sessionId]);

  if (!orderDetails) return <div className='p-10 text-center'>Loading your receipt...</div>;

  const { transactionId, items, totalAmount, estimatedDelivery, customerEmail } = orderDetails;

  return (
    <div className='px-6 py-10 md:px-20'>
      <h1 className='mb-6 text-3xl font-bold text-green-600'>🎉 Order Confirmed!</h1>

      <div className='p-6 border shadow-md rounded-xl bg-gray-50'>
        <h2 className='mb-4 text-xl font-semibold'>Receipt</h2>

        <p><strong>Transaction ID:</strong> {transactionId}</p>
        <p><strong>Email:</strong> {customerEmail}</p>
        <p><strong>Estimated Delivery:</strong> {estimatedDelivery}</p>

        <div className='mt-4'>
          <h3 className='font-semibold'>Items:</h3>
          <ul className='pl-5 list-disc'>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} × {item.quantity} — ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex justify-between mt-4 text-lg font-bold'>
          <span>Total Paid:</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      <button
        className='px-6 py-3 mt-8 text-white bg-black rounded-full hover:bg-gray-800'
        onClick={() => navigate('/')}
      >
        🛍️ Back to Store
      </button>
    </div>
  );
};

export default SuccessPage