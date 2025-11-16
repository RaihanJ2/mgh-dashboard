import EmployeeTable from "../components/EmployeeTable";
import { employees } from "../data/employees";

const Team = () => {
  const divisionCounts = employees.reduce((acc, emp) => {
    acc[emp.division] = (acc[emp.division] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Team</h1>
        <p className="text-gray-600">
          Sagara Technology team members across all divisions
        </p>
      </div>

      {/* Division Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(divisionCounts).map(([division, count]) => (
          <div key={division} className="bg-white p-4 rounded shadow">
            <p className="text-gray-600 text-sm">{division}</p>
            <h2 className="text-2xl font-bold text-gray-800">{count}</h2>
            <p className="text-xs text-gray-500 mt-1">Team Members</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-5 rounded shadow">
        <EmployeeTable data={employees} />
      </div>
    </div>
  );
};

export default Team;
