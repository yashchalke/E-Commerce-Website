import React, { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:3000/Api/Payment/orders/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      } finally {
        setLoading(false);
      }
    };

    if (userId && token) fetchOrders();
  }, [userId, token]);

  if (loading) return <div className='p-10 text-center'>Loading your orders...</div>;

  return (
    <div className='px-6 py-10 md:px-20'>
      <h1 className='mb-6 text-3xl font-bold'>🧾 My Orders</h1>

      {orders.length === 0 ? (
        <p className='text-gray-600'>You haven't placed any orders yet.</p>
      ) : (
        <div className='space-y-6'>
          {orders.map((order, index) => (
            <div key={index} className='p-6 border shadow-sm rounded-xl bg-gray-50'>
              <div className='mb-2'>
                <p><strong>Transaction ID:</strong> {order.transactionId}</p>
                <p><strong>Email:</strong> {order.customerEmail}</p>
                <p><strong>Delivery:</strong> {order.estimatedDelivery}</p>
                <p><strong>Placed On:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <div className='mt-4'>
                <h3 className='font-semibold'>Items:</h3>
                <ul className='pl-5 list-disc'>
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.name} × {item.quantity} — ₹{item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex justify-between mt-4 text-lg font-bold'>
                <span>Total Paid:</span>
                <span>₹{order.totalAmount}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;