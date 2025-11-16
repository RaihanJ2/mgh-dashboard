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
      <div className="bg-white p-10 w-full max-w-md rounded-2xl shadow-xl border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-3xl">S</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1.5 tracking-tight">
            Sagara Technology
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            Software Developer Indonesia
          </p>
          <p className="text-xs text-slate-400 mt-2.5 text-center font-medium">
            Plan, build, grow digital products
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3.5 rounded-xl hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
          >
            Masuk
          </button>
        </form>

        <p className="text-xs text-slate-400 mt-6 text-center font-medium">
          Continuously delivering impact
        </p>
      </div>
    </div>
  );
};

export default Login;
