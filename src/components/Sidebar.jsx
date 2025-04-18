// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="w-64 bg-gray-800 text-white h-screen p-4">
    <ul>
      <li>
        <NavLink to="/dashboard" className="block py-2 px-4 hover:bg-gray-700" activeClassName="bg-gray-700">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/employees" className="block py-2 px-4 hover:bg-gray-700" activeClassName="bg-gray-700">
          Employees
        </NavLink>
      </li>
      <li>
        <NavLink to="/salary-slips" className="block py-2 px-4 hover:bg-gray-700" activeClassName="bg-gray-700">
          Salary Slips
        </NavLink>
      </li>
      <li>
        <NavLink to="/invoices" className="block py-2 px-4 hover:bg-gray-700" activeClassName="bg-gray-700">
          Invoices
        </NavLink>
      </li>
      <li>
        <NavLink to="/payments" className="block py-2 px-4 hover:bg-gray-700" activeClassName="bg-gray-700">
          Payments
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
