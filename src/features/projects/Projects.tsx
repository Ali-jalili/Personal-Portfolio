/** @format */

import { projects } from "../../data/projects";
import ProjectShowcase from "./ProjectShowcase";

function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-indigo-400">Selected Work</p>

          <h2 className="mt-3 text-5xl font-bold text-white">Projects</h2>

          <p className="mt-5 text-lg text-gray-400">
            A collection of real-world applications I built using modern
            frontend technologies.
          </p>
        </div>

        <div className="mt-20 space-y-32">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
