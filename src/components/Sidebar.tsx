import { Link, useLocation } from "react-router-dom";
import { BarChart3, Rocket, Users } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-60 bg-slate-900 text-white h-screen p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Navigation</h2>
        <p className="text-xs text-slate-400">
          Plan, build, grow digital products
        </p>
      </div>

      <ul className="space-y-2 flex-1">
        <li
          className={`p-2 rounded cursor-pointer ${
            location.pathname === "/dashboard"
              ? "bg-indigo-600 text-white"
              : "hover:bg-slate-800"
          }`}
        >
          <Link to="/dashboard" className="flex items-center gap-2">
            <BarChart3 size={18} />
            Analytics
          </Link>
        </li>
        <li
          className={`p-2 rounded cursor-pointer ${
            location.pathname === "/projects"
              ? "bg-indigo-600 text-white"
              : "hover:bg-slate-800"
          }`}
        >
          <Link to="/projects" className="flex items-center gap-2">
            <Rocket size={18} />
            Projects
          </Link>
        </li>
        <li
          className={`p-2 rounded cursor-pointer ${
            location.pathname === "/team"
              ? "bg-indigo-600 text-white"
              : "hover:bg-slate-800"
          }`}
        >
          <Link to="/team" className="flex items-center gap-2">
            <Users size={18} />
            Team
          </Link>
        </li>
      </ul>

      <div className="mt-6 pt-6 border-t border-slate-700">
        <p className="text-xs text-slate-400 mb-2">Divisions</p>
        <ul className="space-y-1">
          <li className="text-sm text-slate-300 hover:text-white">
            Digital Projects
          </li>
          <li className="text-sm text-slate-300 hover:text-white">
            Creative Projects
          </li>
          <li className="text-sm text-slate-300 hover:text-white">Web3</li>
          <li className="text-sm text-slate-300 hover:text-white">
            Smart Devices
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
