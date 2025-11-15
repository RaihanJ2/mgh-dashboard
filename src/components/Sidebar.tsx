const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <ul className="space-y-3">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Dashboard
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Users</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Reports
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
