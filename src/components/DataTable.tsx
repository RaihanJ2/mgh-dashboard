import { useState } from "react";
import type { User } from "../type";

interface Props {
  data: User[];
}

const DataTable = ({ data }: Props) => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof User>("id");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filtered = data
    .filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));

  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div>
      <input
        placeholder="Search name..."
        className="p-2 border rounded mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            {["id", "name", "email", "role", "createdAt"].map((key) => (
              <th
                key={key}
                onClick={() => setSortKey(key as keyof User)}
                className="border p-2 cursor-pointer hover:bg-gray-200"
              >
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginated.map((u) => (
            <tr key={u.id}>
              <td className="border p-2">{u.id}</td>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.role}</td>
              <td className="border p-2">{u.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex gap-2 mt-3">
        <button
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <button
          disabled={page * rowsPerPage >= filtered.length}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
