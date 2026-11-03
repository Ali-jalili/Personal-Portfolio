/** @format */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "../../data/projects";
import type { Project } from "../../types/project";
import ProjectModal from "./ProjectModal";
import LayeredProjectStage from "./LayeredProjectStage";
import {
  DetailsButton,
  ProductionBadge,
  ScreenshotFrame,
  TechPills,
} from "./ProjectShowcaseParts";
import { MAIN_SHADOW, titleFont } from "./projectShowcaseStyles";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectShowcase() {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id ?? "");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduced = useReducedMotion();

  if (projects.length === 0) return null;

  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === activeId),
  );
  const active = projects[activeIndex];

  return (
    <div>
      <div className="hidden lg:block">
        <div className="mt-8 grid grid-cols-[minmax(205px,250px)_minmax(0,1fr)] items-center gap-6 xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-7">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-[6px] top-3 w-px bg-[var(--line-strong)]"
            />

            <ul className="flex flex-col gap-1">
              {projects.map((project, index) => {
                const isActive = project.id === active.id;

                return (
                  <li key={project.id}>
                    <button
                      type="button"
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setActiveId(project.id)}
                      className={`group relative flex w-full items-start gap-2.5 rounded-2xl py-2.5 pl-4 pr-2 text-left transition-colors duration-300 ${
                        isActive
                          ? "bg-[var(--accent-soft)]"
                          : "hover:bg-[var(--surface-soft)]/60"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? "border-[var(--accent)] bg-[var(--accent)]"
                            : "border-[var(--line-strong)] bg-[var(--surface)]"
                        }`}
                      />

                      <span
                        className={`pt-0.5 font-mono text-[12px] tracking-tight ${
                          isActive
                            ? "text-[var(--accent-strong)]"
                            : "text-[var(--ink-faint)]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1 text-left">
                        <span
                          className={`block text-[16px] font-medium tracking-[-0.015em] transition-colors duration-300 ${
                            isActive
                              ? "text-[var(--accent-strong)]"
                              : "text-[var(--ink)]"
                          }`}
                        >
                          {project.title}
                        </span>

                        <span className="mt-1 line-clamp-3 block text-[12px] leading-[1.45] text-[var(--ink-muted)]">
                          {project.description}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <LayeredProjectStage
            active={active}
            projects={projects}
            reduced={reduced}
            onSelect={setActiveId}
            onOpen={setSelectedProject}
          />
        </div>
      </div>

      <div className="mt-6 hidden md:block lg:hidden">
        <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project, index) => {
            const isActive = project.id === active.id;

            return (
              <button
                key={project.id}
                type="button"
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveId(project.id)}
                className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[12px] transition-colors ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                    : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink-muted)]"
                }`}
              >
                {String(index + 1).padStart(2, "0")} {project.title}
              </button>
            );
          })}
        </div>

        <LayeredProjectStage
          active={active}
          projects={projects}
          reduced={reduced}
          onSelect={setActiveId}
          onOpen={setSelectedProject}
        />
      </div>

      <div className="mt-6 md:hidden">
        <div className="grid grid-cols-2 gap-2 pb-4">
          {projects.map((project, index) => {
            const isActive = project.id === active.id;

            return (
              <button
                key={project.id}
                type="button"
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveId(project.id)}
                className={`w-full rounded-full border px-3 py-2 text-left font-mono text-[11px] transition-colors ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                    : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink-muted)]"
                }`}
              >
                {String(index + 1).padStart(2, "0")} {project.title}
              </button>
            );
          })}
        </div>

        <div className="mx-auto max-w-md">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduced ? 0 : 0.35, ease }}
              className="overflow-hidden rounded-3xl border border-[var(--line-strong)] bg-[var(--surface)]"
              style={{ boxShadow: MAIN_SHADOW }}
            >
              <div className="p-3">
                <ScreenshotFrame
                  src={active.image ?? ""}
                  alt={`${active.title} interface`}
                  className="w-full"
                />
              </div>

              <div className="px-4 pb-4 pt-1">
                <div className="flex items-center gap-2.5">
                  <h3
                    style={titleFont}
                    className="text-[24px] leading-none text-[var(--ink)]"
                  >
                    {active.title}
                  </h3>

                  <ProductionBadge />
                </div>

                <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-[var(--ink-muted)]">
                  {active.description}
                </p>

                <div className="mt-3">
                  <TechPills technologies={active.technologies} limit={4} />
                </div>

                <div className="mt-4 border-t border-[var(--line)] pt-3.5">
                  <DetailsButton onClick={() => setSelectedProject(active)} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
