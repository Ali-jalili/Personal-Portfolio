/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectGrid({ projects }: ProjectGridProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const start = page * projectsPerPage;

  const visibleProjects = projects.slice(start, start + projectsPerPage);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      const nextProjectsPerPage = window.innerWidth < 768 ? 2 : 3;

      setProjectsPerPage((current) => {
        if (current !== nextProjectsPerPage) {
          setPage(0);
        }

        return nextProjectsPerPage;
      });
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);

    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const goNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage((current) => current + 1);
    }
  };

  const goPrevious = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((current) => current - 1);
    }
  };

  return (
    <div className="mt-12 md:mt-14">
      {/* Projects */}
      <div className="relative pb-7">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            initial={{ opacity: 0, x: direction * 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -25 }}
            transition={{
              duration: 0.45,
              ease,
            }}
            className="
              grid
              grid-cols-1
              gap-8
              sm:grid-cols-2
              md:grid-cols-3
              md:gap-6
            "
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: index === 1 ? 45 : 25,
                }}
                animate={{
                  opacity: 1,
                  y: index === 1 ? 28 : 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {/* Navigation */}
      <div
        className="
    mt-1
    flex
    items-center
    justify-between
    border-t
    border-[var(--line)]
    pt-5
  "
      >
        {/* Page indicator */}
        <span
          className="
      font-mono
      text-[9px]
      uppercase
      tracking-[0.14em]
      text-[var(--ink-faint)]
    "
        >
          {String(page + 1).padStart(2, "0")} /{" "}
          {String(totalPages).padStart(2, "0")}
        </span>

        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={goPrevious}
            disabled={page === 0}
            aria-label="Previous projects"
            whileHover={page > 0 ? { x: -2 } : undefined}
            whileTap={page > 0 ? { scale: 0.92 } : undefined}
            className="
        group
        grid
        h-10
        w-10
        place-items-center
        rounded-full
        border
        border-[var(--line)]
        bg-[var(--surface)]
        text-[var(--ink-muted)]
        shadow-[0_4px_14px_rgba(20,24,40,0.05)]
        transition-all
        duration-300
        hover:border-[var(--accent-strong)]
        hover:bg-[var(--accent-soft)]
        hover:text-[var(--ink)]
        hover:shadow-[0_8px_22px_rgba(20,24,40,0.08)]
        disabled:cursor-not-allowed
        disabled:opacity-30
        disabled:hover:border-[var(--line)]
        disabled:hover:bg-[var(--surface)]
        disabled:hover:text-[var(--ink-muted)]
      "
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </motion.button>

          <motion.button
            type="button"
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next projects"
            whileHover={page < totalPages - 1 ? { x: 2 } : undefined}
            whileTap={page < totalPages - 1 ? { scale: 0.92 } : undefined}
            className="
        group
        grid
        h-10
        w-10
        place-items-center
        rounded-full
        border
        border-[var(--line)]
        bg-[var(--surface)]
        text-[var(--ink-muted)]
        shadow-[0_4px_14px_rgba(20,24,40,0.05)]
        transition-all
        duration-300
        hover:border-[var(--accent-strong)]
        hover:bg-[var(--accent-soft)]
        hover:text-[var(--ink)]
        hover:shadow-[0_8px_22px_rgba(20,24,40,0.08)]
        disabled:cursor-not-allowed
        disabled:opacity-30
        disabled:hover:border-[var(--line)]
        disabled:hover:bg-[var(--surface)]
        disabled:hover:text-[var(--ink-muted)]
      "
          >
            <ArrowRight
              size={17}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
