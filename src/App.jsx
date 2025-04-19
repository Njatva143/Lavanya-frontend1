import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import SalarySlips from './pages/SalarySlips';
import Invoices from './pages/Invoices';
import Payments from './pages/Payments';
import Layout from './components/Layout';

function App() {
  const isLoggedIn = localStorage.getItem('token'); // ya jo login ka token use kar rahe ho

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <Layout />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
