/** @format */

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-indigo-400">Selected Work</p>

          <h2 className="mt-2 text-4xl font-bold">Projects</h2>

          <p className="mt-4 text-gray-400">
            A selection of applications I have built using modern frontend
            technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
