import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") || "User";

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-linear-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-xl">S</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 tracking-tight">
            Sagara Technology
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Software Developer Indonesia
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg">
          <User size={16} className="text-slate-600" />
          <span className="text-sm font-medium text-slate-700">{user}</span>
        </div>
        <button
          className="flex items-center gap-2 bg-indigo-600 px-4 py-2 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
