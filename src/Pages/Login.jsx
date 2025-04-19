import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // After successful login
    navigate("/");
  };

  // Rest of your login component code
};
