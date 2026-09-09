/** @format */

import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpenDetails,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 md:p-6 shadow-lg transition-all duration-300 hover:border-[var(--accent-strong)] hover:shadow-2xl">
      <div>
        {/* Project Thumbnail - Fixed image sizing and containment */}
        <div
          onClick={() => onOpenDetails(project)}
          className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] aspect-[16/10] mb-5 cursor-pointer flex items-center justify-center p-2"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain object-center rounded-md transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="btn-primary text-xs shadow-lg py-1.5 px-3">
              View Architecture
            </span>
          </div>
        </div>

        {/* Title & Badge */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
            {project.title}
          </h3>
          <span className="rounded-md border border-[var(--line)] bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[10px] uppercase text-[var(--accent-strong)]">
            Production
          </span>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-[var(--ink-muted)] line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-0.5 font-mono text-[10px] text-[var(--ink-muted)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-0.5 font-mono text-[10px] text-[var(--ink-faint)]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer single clean action button */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--line)]">
        <button
          onClick={() => onOpenDetails(project)}
          className="btn-ghost text-xs w-full justify-between"
        >
          <span className="font-mono text-[var(--accent-strong)]">
            // Architecture & Details
          </span>
          <ArrowUpRight size={14} className="text-[var(--accent-strong)]" />
        </button>
      </div>
    </div>
  );
}
