import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Employees from '../pages/Employees';
import SalarySlips from '../pages/SalarySlips';
import Invoices from '../pages/Invoices';
import Payments from '../pages/Payments';

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/salary-slips" element={<SalarySlips />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
