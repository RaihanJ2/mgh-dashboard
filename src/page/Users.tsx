import DataTable from "../components/DataTable";
import { users } from "../data/user";

const Users = () => {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">User Table</h2>
      <DataTable data={users} />
    </div>
  );
};

export default Users;
