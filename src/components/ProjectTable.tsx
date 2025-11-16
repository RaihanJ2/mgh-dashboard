import { useState } from "react";
import type { Project } from "../type";

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
    const baseClasses = "px-2 py-1 rounded text-xs font-semibold";
    if (status === "Active") {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else if (status === "Completed") {
      return `${baseClasses} bg-blue-100 text-blue-800`;
    }
    return `${baseClasses} bg-gray-100 text-gray-800`;
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div>
      <input
        placeholder="Search projects or clients..."
        className="p-2 border rounded mb-3 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
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
                  className="border p-2 cursor-pointer hover:bg-gray-200 text-left"
                >
                  {key.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginated.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="border p-2">{project.id}</td>
                <td className="border p-2 font-medium">{project.name}</td>
                <td className="border p-2">{project.client}</td>
                <td className="border p-2">{project.division}</td>
                <td className="border p-2">
                  <span className={getStatusBadge(project.status)}>
                    {project.status}
                  </span>
                </td>
                <td className="border p-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(
                          project.progress
                        )}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="border p-2">{project.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-3 justify-between items-center">
        <span className="text-sm text-gray-600">
          Showing {paginated.length} of {filtered.length} projects
        </span>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <button
            disabled={page * rowsPerPage >= filtered.length}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
