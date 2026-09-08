/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";

import type { Project } from "../../types/project";

type ProjectDetailsProps = {
  project: Project | null;
  onClose: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-end
            justify-center
            bg-black/40
            px-3
            pt-24
            pb-3
            md:items-center
            md:p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            transition={{
              duration: 0.35,
              ease,
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
            className="
              flex
              w-full
              max-h-[calc(100dvh-7rem)]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-[var(--line)]
              bg-[var(--surface)]
              shadow-[0_30px_80px_rgba(0,0,0,0.18)]
              md:max-w-4xl
              md:max-h-[90vh]
            "
          >
            {/* Header */}
            <header
              className="
                sticky
                top-0
                z-10
                flex
                shrink-0
                items-start
                justify-between
                border-b
                border-[var(--line)]
                bg-[var(--surface)]
                px-5
                py-5
                md:px-10
                md:py-7
              "
            >
              <div className="pr-8">
                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[var(--accent-strong)]
                  "
                >
                  Project Case Study
                </span>

                <h2
                  id="project-details-title"
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    tracking-[-0.05em]
                    text-[var(--ink)]
                    md:text-4xl
                  "
                >
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project details"
                className="
                  absolute
                  right-4
                  top-4
                  grid
                  h-9
                  w-9
                  place-items-center
                  rounded-full
                  border
                  border-[var(--line)]
                  bg-[var(--surface)]
                  text-[var(--ink-muted)]
                  transition
                  hover:text-[var(--ink)]
                  md:right-6
                  md:top-6
                "
              >
                <X size={16} />
              </button>
            </header>

            {/* Scroll Content */}
            <div
              className="
                overflow-y-auto
                px-5
                pb-6
                md:px-10
                md:pb-10
              "
            >
              <Section title="Overview">
                <p>{project.overview}</p>
              </Section>

              <Section title="Problem">
                <p>{project.problem}</p>
              </Section>

              <Section title="Engineering Focus">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.focus.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-xl
                        border
                        border-[var(--line)]
                        p-4
                        text-sm
                        leading-6
                        text-[var(--ink-muted)]
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Key Features">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        rounded-xl
                        border
                        border-[var(--line)]
                        p-4
                        text-sm
                        leading-6
                        text-[var(--ink-muted)]
                      "
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Technology Stack">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
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
                      {tech}
                    </span>
                  ))}
                </div>
              </Section>

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-5
                  border-t
                  border-[var(--line)]
                  pt-6
                "
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-mono
                      text-xs
                      uppercase
                      text-[var(--ink-muted)]
                      hover:text-[var(--ink)]
                    "
                  >
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-mono
                      text-xs
                      uppercase
                      text-[var(--accent-strong)]
                    "
                  >
                    Live Demo
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 md:mt-10">
      <h3
        className="
          font-mono
          text-[10px]
          uppercase
          tracking-[0.16em]
          text-[var(--ink-faint)]
        "
      >
        {title}
      </h3>

      <div
        className="
          mt-4
          text-sm
          leading-7
          text-[var(--ink-muted)]
        "
      >
        {children}
      </div>
    </section>
  );
}

export default ProjectDetails;
