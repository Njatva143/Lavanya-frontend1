// src/components/SidebarLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const isLoggedIn = localStorage.getItem("token");

if (!isLoggedIn) {
  return <Navigate to="/login" />;
}

return (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
);

export default SidebarLayout;
