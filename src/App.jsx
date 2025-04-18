import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '.src/Pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
