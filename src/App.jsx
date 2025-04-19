import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';

function App() {
  const isLoggedIn = localStorage.getItem('token'); // Adjust as per your auth logic

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
