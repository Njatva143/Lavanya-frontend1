function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Lavanya Security Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 border rounded-md"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
