import { useState } from "react";
import type { Employee } from "../type";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

interface Props {
  data: Employee[];
}

type SortDirection = "asc" | "desc";

const EmployeeTable = ({ data }: Props) => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof Employee>("id");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filtered = data
    .filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const getDivisionBadge = (division: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold";
    const colors: Record<string, string> = {
      Digital: "bg-indigo-100 text-indigo-700",
      Creative: "bg-pink-100 text-pink-700",
      "Smart Devices": "bg-amber-100 text-amber-700",
      Web3: "bg-teal-100 text-teal-700",
    };
    return `${baseClasses} ${
      colors[division] || "bg-slate-100 text-slate-700"
    }`;
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          placeholder="Search employees..."
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {["id", "name", "email", "division", "role", "joinedAt"].map(
                (key) => {
                  const isActive = sortKey === key;
                  const handleSort = () => {
                    if (sortKey === key) {
                      setSortDirection((prev) =>
                        prev === "asc" ? "desc" : "asc"
                      );
                    } else {
                      setSortKey(key as keyof Employee);
                      setSortDirection("asc");
                    }
                  };

                  return (
                    <th
                      key={key}
                      onClick={handleSort}
                      className={`px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{key.replace(/([A-Z])/g, " $1").trim()}</span>
                        {isActive &&
                          (sortDirection === "asc" ? (
                            <ArrowUp size={14} className="text-indigo-600" />
                          ) : (
                            <ArrowDown size={14} className="text-indigo-600" />
                          ))}
                      </div>
                    </th>
                  );
                }
              )}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-slate-200">
            {paginated.map((employee) => (
              <tr
                key={employee.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-4 text-sm text-slate-600">
                  {employee.id}
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                  {employee.name}
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">
                  {employee.email}
                </td>
                <td className="px-4 py-4">
                  <span className={getDivisionBadge(employee.division)}>
                    {employee.division}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">
                  {employee.role}
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">
                  {employee.joinedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-4 justify-between items-center pt-2">
        <span className="text-sm text-slate-600 font-medium">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {paginated.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-900">
            {filtered.length}
          </span>{" "}
          employees
        </span>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all text-sm font-medium text-slate-700"
            onClick={() => setPage(page - 1)}
          >
            <ChevronLeft size={16} />
            Prev
          </button>

          <button
            disabled={page * rowsPerPage >= filtered.length}
            className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all text-sm font-medium text-slate-700"
            onClick={() => setPage(page + 1)}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
