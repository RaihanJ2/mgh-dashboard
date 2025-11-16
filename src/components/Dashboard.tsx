import SummaryCard from "./SummaryCard";
import { projects } from "../data/projects";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Calculate summary statistics
  const activeProjects = projects.filter((p) => p.status === "Active").length;
  const completedProjects = projects.filter(
    (p) => p.status === "Completed"
  ).length;
  const avgProgress =
    Math.round(
      projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
    ) || 0;

  // Projects by Division (Bar Chart)
  const divisionCounts = projects.reduce((acc, project) => {
    acc[project.division] = (acc[project.division] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const barChartData = Object.entries(divisionCounts).map(
    ([division, count]) => ({
      division,
      count,
    })
  );

  // Project Growth Over Time (Line Chart)
  const monthlyData = projects.reduce((acc, project) => {
    const month = new Date(project.createdAt).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const lineChartData = Object.entries(monthlyData)
    .map(([month, projects]) => ({ month, projects }))
    .sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime());

  // Project Status Distribution (Pie Chart)
  const statusCounts = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieChartData = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value,
  }));

  // Sagara Brand Colors: Black, Red, Grey variations
  const COLORS = ["#0f172a", "#e11d48", "#64748b", "#94a3b8", "#cbd5e1"];

  return (
    <div className="space-y-8">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Analytics Dashboard
        </h1>
        <p className="text-slate-600 text-base">
          Plan, build, grow digital products. Continuously delivering impact.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="Total Projects" value={projects.length} />
        <SummaryCard title="Active Projects" value={activeProjects} />
        <SummaryCard title="Completed Projects" value={completedProjects} />
        <SummaryCard title="Average Progress" value={`${avgProgress}%`} />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Projects by Division */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold mb-6 text-slate-900">
            Projects by Division
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="division" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#e11d48" name="Number of Projects" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Project Status Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold mb-6 text-slate-900">
            Project Status Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${((percent || 0) * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart - Project Growth Over Time */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-6 text-slate-900">
            Project Growth Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#e11d48"
                strokeWidth={2}
                name="New Projects"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
