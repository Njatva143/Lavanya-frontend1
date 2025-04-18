// src/Pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Lavanaya Security Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold">Total Employees</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">150</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold">Active Invoices</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">₹2.5L</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold">Payments Processed</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">₹1.8L</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
