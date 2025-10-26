import React, { useEffect, useState } from 'react';

const SummaryCards = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/Api/Admin/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setStats(data);
        } else {
          console.error('Failed to fetch stats:', data.message);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 mt-4 mb-4 md:grid-cols-4 h-50">
      <div className="p-4 bg-black shadow rounded-xl">
        <h2 className="text-lg font-semibold">Total Revenue</h2>
        <p className="text-3xl font-bold">₹{stats.totalSales}</p>
      </div>
      <div className="p-4 bg-black shadow rounded-xl">
        <h2 className="text-lg font-semibold">Net Profit</h2>
        <p className="text-3xl font-bold">₹{stats.totalSales}</p>
      </div>
      <div className="p-4 bg-black shadow rounded-xl">
        <h2 className="text-lg font-semibold">Lifetime Orders</h2>
        <p className="text-3xl font-bold">{stats.totalOrders}</p>
      </div>
      <div className="p-4 bg-black shadow rounded-xl">
        <h2 className="text-lg font-semibold">Products</h2>
        <p className="text-3xl font-bold">{stats.totalProducts}</p>
      </div>
       
    </div>
  );
};

export default SummaryCards;