/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

import type { Project } from "../../types/project";

import ProjectCard from "./ProjectCard";

const ProjectDetails = lazy(() => import("./ProjectDetails"));

type ProjectGridProps = {
  projects: Project[];
};

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectGrid({ projects }: ProjectGridProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const start = page * projectsPerPage;

  const visibleProjects = projects.slice(start, start + projectsPerPage);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      const nextProjectsPerPage =
        window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 3;

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
    <>
      <div className="mt-12 md:mt-14">
        {/* Projects */}
        <div className="relative pb-3">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              initial={{
                opacity: 0,
                x: direction * 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction * -25,
              }}
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
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease,
                  }}
                >
                  <ProjectCard
                    project={project}
                    onOpen={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span
            className="
              order-2
              min-w-12
              text-center
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

          <motion.button
            type="button"
            onClick={goPrevious}
            disabled={page === 0}
            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-[var(--line)]
              bg-[var(--surface)]
              text-[var(--ink-muted)]
              transition-all
              disabled:opacity-30
            "
          >
            <ArrowLeft size={17} />
          </motion.button>

          <motion.button
            type="button"
            onClick={goNext}
            disabled={page === totalPages - 1}
            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-[var(--line)]
              bg-[var(--surface)]
              text-[var(--ink-muted)]
              transition-all
              disabled:opacity-30
            "
          >
            <ArrowRight size={17} />
          </motion.button>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </>
  );
}

export default ProjectGrid;
