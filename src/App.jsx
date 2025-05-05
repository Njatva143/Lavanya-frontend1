import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const App = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
      >
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
