import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Email atau password salah");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-slate-50 to-teal-50">
      <div className="bg-white p-8 w-96 rounded-lg shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Sagara Technology
          </h1>
          <p className="text-sm text-gray-500">Software Developer Indonesia</p>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Plan, build, grow digital products
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Login</h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Masuk
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Continuously delivering impact
        </p>
      </div>
    </div>
  );
};

export default Login;
