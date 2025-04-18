// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="w-64 bg-gray-800 text-white h-screen p-4">
    <ul>
      <li><NavLink to="/dashboard" activeClassName="font-bold">Dashboard</NavLink></li>
      <li><NavLink to="/employees" activeClassName="font-bold">Employees</NavLink></li>
      <li><NavLink to="/salary-slips" activeClassName="font-bold">Salary Slips</NavLink></li>
      <li><NavLink to="/invoices" activeClassName="font-bold">Invoices</NavLink></li>
      <li><NavLink to="/payments" activeClassName="font-bold">Payments</NavLink></li>
    </ul>
  </nav>
);

export default Sidebar;
