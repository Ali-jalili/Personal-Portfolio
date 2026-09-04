/** @format */

import type { Project } from "../../types/project";

type ProjectRowProps = {
  project: Project;
  index: number;
};

function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <tr className="group border-b border-white/5 transition hover:bg-white/[0.04]">
      {/* Number */}
      <td className="px-6 py-6 text-sm font-mono text-gray-500">0{index}</td>

      {/* Project */}
      <td className="px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-20 overflow-hidden rounded-lg border border-white/10 bg-black">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            )}
          </div>

          <div>
            <h3 className="font-semibold text-white transition group-hover:text-indigo-400">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">{project.description}</p>
          </div>
        </div>
      </td>

      {/* Stack */}
      <td className="hidden px-6 py-6 md:table-cell">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </td>

      {/* Links */}
      <td className="px-6 py-6">
        <div className="flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Demo
            </a>
          )}
        </div>
      </td>
    </tr>
  );
}

export default ProjectRow;
