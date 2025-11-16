import { Link, useLocation } from "react-router-dom";
import { BarChart3, Rocket, Users } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-slate-900 text-white h-screen p-6 flex flex-col border-r border-slate-800">
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-1.5 text-white tracking-tight">
          Navigation
        </h2>
        <p className="text-xs text-slate-400 font-medium">
          Plan, build, grow digital products
        </p>
      </div>

      <ul className="space-y-1.5 flex-1">
        <li>
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              location.pathname === "/dashboard"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <BarChart3 size={20} />
            <span className="font-medium">Analytics</span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              location.pathname === "/projects"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <Rocket size={20} />
            <span className="font-medium">Projects</span>
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              location.pathname === "/team"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <Users size={20} />
            <span className="font-medium">Team</span>
          </Link>
        </li>
      </ul>

      <div className="mt-auto pt-6 border-t border-slate-800">
        <p className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">
          Divisions
        </p>
        <ul className="space-y-2">
          <li className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer px-2 py-1.5 rounded-lg hover:bg-slate-800/50">
            Digital Projects
          </li>
          <li className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer px-2 py-1.5 rounded-lg hover:bg-slate-800/50">
            Creative Projects
          </li>
          <li className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer px-2 py-1.5 rounded-lg hover:bg-slate-800/50">
            Web3
          </li>
          <li className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer px-2 py-1.5 rounded-lg hover:bg-slate-800/50">
            Smart Devices
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
