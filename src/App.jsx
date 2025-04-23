import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SidebarLayout from './components/SidebarLayout';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import SalarySlips from './pages/SalarySlips';
import Invoices from './pages/Invoices';
import Payments from './pages/Payments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="salary-slips" element={<SalarySlips />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="payments" element={<Payments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
