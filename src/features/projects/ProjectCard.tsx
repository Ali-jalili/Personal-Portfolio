/** @format */

import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[var(--line)]
        bg-[var(--surface-soft)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--line-strong)]
      "
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-[var(--surface)]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              Project Preview
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-lg
                border
                border-[var(--line)]
                px-3
                py-1
                font-mono
                text-[9px]
                uppercase
                tracking-[0.05em]
                text-[var(--ink-faint)]
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-5 border-t border-[var(--line)] pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
        group/link
        relative
        inline-flex
        items-center
        gap-1.5
        font-mono
        text-[11px]
        font-medium
        uppercase
        tracking-[0.1em]
        text-[var(--ink-muted)]
        transition-colors
        duration-300
        hover:text-[var(--ink)]
      "
            >
              <span>GitHub</span>

              <span
                className="
          inline-block
          transition-transform
          duration-300
          group-hover/link:translate-x-0.5
          group-hover/link:-translate-y-0.5
        "
              >
                ↗
              </span>

              <span
                className="
          absolute
          -bottom-1
          left-0
          h-px
          w-0
          bg-[var(--ink)]
          transition-all
          duration-300
          group-hover/link:w-full
        "
              />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
        group/link
        relative
        inline-flex
        items-center
        gap-1.5
        font-mono
        text-[11px]
        font-medium
        uppercase
        tracking-[0.1em]
        text-[var(--accent-strong)]
        transition-colors
        duration-300
        hover:text-[var(--accent)]
      "
            >
              <span>Live Demo</span>

              <span
                className="
          inline-block
          transition-transform
          duration-300
          group-hover/link:translate-x-0.5
          group-hover/link:-translate-y-0.5
        "
              >
                ↗
              </span>

              <span
                className="
          absolute
          -bottom-1
          left-0
          h-px
          w-0
          bg-[var(--accent-strong)]
          transition-all
          duration-300
          group-hover/link:w-full
        "
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
