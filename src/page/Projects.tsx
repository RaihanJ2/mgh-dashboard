import ProjectTable from "../components/ProjectTable";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="space-y-8">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Projects
        </h1>
        <p className="text-slate-600 text-base">
          Manage and track all Sagara Technology projects
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <ProjectTable data={projects} />
      </div>
    </div>
  );
};

export default Projects;
