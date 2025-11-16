import { logout } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") || "User";

  return (
    <div className="flex flex-row px-4 justify-between items-center bg-white border-b border-slate-200">
      <Link to="/dashboard">
        <img
          src="/public/main_logo/logo_B.png"
          className="w-60 h-auto"
          alt="Sagara Tech Logo"
        />
      </Link>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
            <User size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-900">{user}</span>
          </div>
          <button
            className="flex items-center gap-2 bg-rose-600 px-4 py-2 text-white rounded-lg hover:bg-rose-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm"
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
    </div>
  );
};

export default Header;
