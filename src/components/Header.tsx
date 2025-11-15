import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") || "User";

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-lg font-semibold">Welcome, {user}</h1>
      <button
        className="bg-red-500 px-4 py-2 text-white rounded hover:bg-red-600"
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
