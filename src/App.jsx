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
  <Route
    path="/*"
    element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
  >
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Route>
</Routes>
    </BrowserRouter>
  o)pp;
}

export default App;
