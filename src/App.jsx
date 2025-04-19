import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
// etc.

function App() {
  localStorage.setItem("isAuthenticated", "true");
  localStorage.setItem("token", "dummy_token"); // or "admin_token"

  // ✅ Add this line
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {isLoggedIn && (
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            {/* other routes */}
          </Route>
        )}
      </Routes>
    </Router>
  );
}
