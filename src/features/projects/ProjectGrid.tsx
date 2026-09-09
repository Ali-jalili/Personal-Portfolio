/** @format */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { projects } from "../../data/projects";

import ProjectCard from "./ProjectCard";

import ProjectModal from "./ProjectModal";

import type { Project } from "../../types/project";

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Mobile Showcase */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard
                project={activeProject}
                onOpenDetails={() => setSelectedProject(activeProject)}
              />
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              className="
                rounded-full
                border
                border-[var(--line)]
                px-4
                py-2
                font-mono
                text-xs
                uppercase
                tracking-[0.1em]
                text-[var(--ink-muted)]
                transition
                hover:border-[var(--accent)]
                hover:text-[var(--ink)]
              "
            >
              ← Previous
            </button>

            <span
              className="
                font-mono
                text-xs
                text-[var(--ink-faint)]
              "
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="
                rounded-full
                border
                border-[var(--line)]
                px-4
                py-2
                font-mono
                text-xs
                uppercase
                tracking-[0.1em]
                text-[var(--ink-muted)]
                transition
                hover:border-[var(--accent)]
                hover:text-[var(--ink)]
              "
            >
              Next →
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div
          className="
            hidden
            md:grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
