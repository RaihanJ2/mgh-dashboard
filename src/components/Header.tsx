import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") || "User";

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800">Sagara Technology</h1>
          <p className="text-xs text-gray-500">Software Developer Indonesia</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, {user}</span>
        <button
          className="bg-red-500 px-4 py-2 text-white rounded hover:bg-red-600 transition-colors"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
