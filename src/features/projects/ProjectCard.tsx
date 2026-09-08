/** @format */

import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

function ProjectCard({ project, onOpen }: ProjectCardProps) {
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
      {/* Preview */}
      <div
        className="
          aspect-video
          overflow-hidden
          bg-[var(--surface)]
        "
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
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
          <div
            className="
              flex
              h-full
              items-center
              justify-center
            "
          >
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-[var(--ink-faint)]
              "
            >
              Project Preview
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className="
            font-display
            text-2xl
            font-semibold
            tracking-[-0.04em]
            text-[var(--ink)]
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            line-clamp-2
            text-sm
            leading-6
            text-[var(--ink-muted)]
          "
        >
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-6">
          <span
            className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.14em]
              text-[var(--ink-faint)]
            "
          >
            Stack
          </span>

          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-2
            "
          >
            {project.technologies.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="
                    rounded-lg
                    border
                    border-[var(--line)]
                    px-3
                    py-1
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.05em]
                    text-[var(--ink-faint)]
                  "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-4
            border-t
            border-[var(--line)]
            pt-5
          "
        >
          <button
            type="button"
            onClick={onOpen}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[var(--line)]
              px-4
              py-2
              font-mono
              text-[11px]
              font-medium
              uppercase
              tracking-[0.1em]
              text-[var(--ink)]
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent-strong)]
            "
          >
            View Case Study
            <span>↗</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.1em]
                text-[var(--ink-muted)]
                transition-colors
                hover:text-[var(--ink)]
              "
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.1em]
                text-[var(--accent-strong)]
                transition-colors
                hover:text-[var(--accent)]
              "
            >
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
