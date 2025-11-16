import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-60 bg-gray-800 text-white h-screen p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Navigation</h2>
        <p className="text-xs text-gray-400">
          Plan, build, grow digital products
        </p>
      </div>

      <ul className="space-y-2 flex-1">
        <li
          className={`p-2 rounded cursor-pointer ${
            location.pathname === "/dashboard"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-700"
          }`}
        >
          <Link to="/dashboard" className="block">
            📊 Analytics
          </Link>
        </li>
        <li
          className={`p-2 rounded cursor-pointer ${
            location.pathname === "/projects"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-700"
          }`}
        >
          <Link to="/projects" className="block">
            🚀 Projects
          </Link>
        </li>
        <li
          className={`p-2 rounded cursor-pointer ${
            location.pathname === "/team"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-700"
          }`}
        >
          <Link to="/team" className="block">
            👥 Team
          </Link>
        </li>
      </ul>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-xs text-gray-400 mb-2">Divisions</p>
        <ul className="space-y-1">
          <li className="text-sm text-gray-300 hover:text-white">
            Digital Projects
          </li>
          <li className="text-sm text-gray-300 hover:text-white">
            Creative Projects
          </li>
          <li className="text-sm text-gray-300 hover:text-white">Web3</li>
          <li className="text-sm text-gray-300 hover:text-white">
            Smart Devices
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
