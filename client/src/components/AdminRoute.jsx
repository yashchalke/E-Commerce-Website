import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || role !== 'admin') {
    return <div className="mt-10 text-center text-red-500">Access Denied: Admins Only</div>;

  }

  return children;
};

export default AdminRoute;
