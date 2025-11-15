import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import DataTable from "../components/DataTable";
import { users } from "../data/user";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard title="Total Users" value={users.length} />
            <SummaryCard
              title="Admins"
              value={users.filter((u) => u.role === "Admin").length}
            />
            <SummaryCard
              title="Regular Users"
              value={users.filter((u) => u.role === "User").length}
            />
            <SummaryCard title="Active Sessions" value="12" />
          </div>

          {/* Data Table */}
          <div className="bg-white p-5 rounded shadow">
            <h2 className="text-lg font-semibold mb-3">User Table</h2>
            <DataTable data={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
