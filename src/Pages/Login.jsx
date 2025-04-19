import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // After successful login
    navigate('/');  // This will redirect to dashboard with sidebar
  };

  // ... rest of your login component
};
