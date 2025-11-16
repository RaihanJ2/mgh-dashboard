import { useState } from "react";
import type { Employee } from "../type";

interface Props {
  data: Employee[];
}

const EmployeeTable = ({ data }: Props) => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof Employee>("id");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filtered = data
    .filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));

  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const getDivisionBadge = (division: string) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-semibold";
    const colors: Record<string, string> = {
      Digital: "bg-indigo-100 text-indigo-800",
      Creative: "bg-pink-100 text-pink-800",
      "Smart Devices": "bg-amber-100 text-amber-800",
      Web3: "bg-teal-100 text-teal-800",
    };
    return `${baseClasses} ${
      colors[division] || "bg-slate-100 text-slate-800"
    }`;
  };

  return (
    <div>
      <input
        placeholder="Search employees..."
        className="p-2 border rounded mb-3 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-slate-100">
              {["id", "name", "email", "division", "role", "joinedAt"].map(
                (key) => (
                  <th
                    key={key}
                    onClick={() => setSortKey(key as keyof Employee)}
                    className="border p-2 cursor-pointer hover:bg-slate-200 text-left"
                  >
                    {key.toUpperCase()}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {paginated.map((employee) => (
              <tr key={employee.id} className="hover:bg-slate-50">
                <td className="border p-2">{employee.id}</td>
                <td className="border p-2 font-medium">{employee.name}</td>
                <td className="border p-2">{employee.email}</td>
                <td className="border p-2">
                  <span className={getDivisionBadge(employee.division)}>
                    {employee.division}
                  </span>
                </td>
                <td className="border p-2">{employee.role}</td>
                <td className="border p-2">{employee.joinedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-3 justify-between items-center">
        <span className="text-sm text-gray-600">
          Showing {paginated.length} of {filtered.length} employees
        </span>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            className="px-3 py-1 bg-slate-200 rounded disabled:opacity-50 hover:bg-slate-300 transition-colors"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <button
            disabled={page * rowsPerPage >= filtered.length}
            className="px-3 py-1 bg-slate-200 rounded disabled:opacity-50 hover:bg-slate-300 transition-colors"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
