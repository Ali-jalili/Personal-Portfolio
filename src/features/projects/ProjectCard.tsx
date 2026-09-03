/** @format */

import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-indigo-500/50">
      {/* Project Image */}
      <div className="aspect-video bg-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            Project Preview
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className="mt-3 text-gray-400">{project.description}</p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 px-3 py-1 text-sm text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white transition hover:text-indigo-400"
            >
              GitHub →
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
