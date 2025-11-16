import ProjectTable from "../components/ProjectTable";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Projects</h1>
        <p className="text-gray-600">
          Manage and track all Sagara Technology projects
        </p>
      </div>
      <div className="bg-white p-5 rounded shadow">
        <ProjectTable data={projects} />
      </div>
    </div>
  );
};

export default Projects;
