import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Trim email input to avoid accidental spaces
    const trimmedEmail = email.trim();

    if (trimmedEmail === "admin@example.com") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="w-80 bg-white p-6 shadow-md rounded">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border"
          value={email} // Added controlled value
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border"
          value={password} // Added controlled value
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
