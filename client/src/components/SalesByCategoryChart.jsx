import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesByCategoryChart = ({ products = [], orders = [] }) => {
  // Defensive check
  if (!Array.isArray(products) || !Array.isArray(orders) || products.length === 0 || orders.length === 0) {
    return <p className="text-center text-black">No sales data available yet.</p>;
  }

  // Step 1: Map product names to categories
  const productCategoryMap = {};
  products.forEach(product => {
    if (product?.name && product?.category) {
      productCategoryMap[product.name] = product.category;
    }
  });

  // Step 2: Aggregate sales by category
  const categorySales = {};
  orders.forEach(order => {
    if (Array.isArray(order?.items)) {
      order.items.forEach(item => {
        const category = productCategoryMap[item.name] || 'unknown';
        const quantity = parseInt(item.quantity?.['$numberInt'] || item.quantity || 1);
        categorySales[category] = (categorySales[category] || 0) + quantity;
      });
    }
  });

  // Step 3: Prepare chart data
  const labels = Object.keys(categorySales);
  const data = Object.values(categorySales);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Units Sold',
        data,
        backgroundColor: [
          '#1f2937', '#4b5563', '#9ca3af', '#d1d5db', '#f59e0b', '#10b981', '#3b82f6'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto h-80">
      <Pie data={chartData} />
    </div>
  );
};

export default SalesByCategoryChart;