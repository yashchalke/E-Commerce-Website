import React from 'react';
import SummaryCards from '../components/SummaryCards';
import AddProductForm from '../components/AddProductForm';

const AdminPanel = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold">Admin Dashboard</h1>
      <SummaryCards />
      <AddProductForm />
    </div>
  );
};

export default AdminPanel;