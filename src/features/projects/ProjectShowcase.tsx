/** @format */

import type { Project } from "../../types/project";

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  return (
    <article className="group">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Image */}

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-[420px] w-full object-contain transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center text-gray-500">
              Preview
            </div>
          )}
        </div>

        {/* Content */}

        <div>
          <p className="font-mono text-sm text-indigo-400">
            0{index} — Project
          </p>

          <h3 className="mt-4 text-4xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            {project.description}
          </p>

          {/* Tech */}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}

          <div className="mt-8 flex gap-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white transition hover:text-indigo-400"
              >
                GitHub →
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-400 transition hover:text-indigo-300"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectShowcase;
