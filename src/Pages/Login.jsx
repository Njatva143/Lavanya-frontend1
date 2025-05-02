import React from 'react';
import { useNavigate } from
'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
const handleLogin = () => {
// Simulate login and set token in localStorage
localStorage.setItem("token",
"your_token_here");
navigate("/"); // Use navigate for redirection
};
  
return (
   <div className="flex items-center
justify-center h-screen bg-gray-100">
     <button onClick={handleLogin}
className="p-2 bg-blue-500 text-white
rounded"> 
       login
     </button> 
   </div>
   );
 };

export default Login;
