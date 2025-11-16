import { useState } from "react";
import type { Project } from "../type";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  data: Project[];
}

const ProjectTable = ({ data }: Props) => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof Project>("id");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filtered = data
    .filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.client.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));

  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold";
    if (status === "Active") {
      return `${baseClasses} bg-emerald-100 text-emerald-700`;
    } else if (status === "Completed") {
      return `${baseClasses} bg-indigo-100 text-indigo-700`;
    }
    return `${baseClasses} bg-slate-100 text-slate-700`;
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return "bg-emerald-500";
    if (progress >= 50) return "bg-indigo-500";
    if (progress >= 25) return "bg-amber-500";
    return "bg-rose-500";
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          placeholder="Search projects or clients..."
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {[
                "id",
                "name",
                "client",
                "division",
                "status",
                "progress",
                "createdAt",
              ].map((key) => (
                <th
                  key={key}
                  onClick={() => setSortKey(key as keyof Project)}
                  className="px-4 py-3.5 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-slate-200">
            {paginated.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-4 text-sm text-slate-600">
                  {project.id}
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                  {project.name}
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">
                  {project.client}
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">
                  {project.division}
                </td>
                <td className="px-4 py-4">
                  <span className={getStatusBadge(project.status)}>
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-200 rounded-full h-2.5 min-w-[100px]">
                      <div
                        className={`h-2.5 rounded-full transition-all ${getProgressColor(
                          project.progress
                        )}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-700 min-w-[40px]">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">
                  {project.createdAt}
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
          projects
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

export default ProjectTable;
