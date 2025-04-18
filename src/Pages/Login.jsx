import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </div>
    </div>
  );
};

export default Login;