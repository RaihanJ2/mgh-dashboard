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
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="bg-white p-10 w-full max-w-md rounded-2xl shadow-xl border border-slate-200">
        <div className="flex flex-col items-center mb-8">
          <img src="/public/main_logo/logo_B.png" alt="" />
          <p className="text-sm text-center text-slate-600 font-medium">
            Plan, build, grow digital products. Continuously delivering impact.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Email (admin@example.com)
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-all text-slate-900 placeholder:text-slate-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Password (admin123)
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition-all text-slate-900 placeholder:text-slate-400"
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
            className="w-full bg-rose-600 text-white py-3.5 rounded-xl hover:bg-rose-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
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
