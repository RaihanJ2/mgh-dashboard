import EmployeeTable from "../components/EmployeeTable";
import { employees } from "../data/employees";

const Team = () => {
  const divisionCounts = employees.reduce((acc, emp) => {
    acc[emp.division] = (acc[emp.division] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-8">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Team
        </h1>
        <p className="text-slate-600 text-base">
          Sagara Technology team members across all divisions
        </p>
      </div>

      {/* Division Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(divisionCounts).map(([division, count]) => (
          <div
            key={division}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-sm font-medium text-slate-600 mb-2">
              {division}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {count}
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Team Members
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <EmployeeTable data={employees} />
      </div>
    </div>
  );
};

export default Team;
