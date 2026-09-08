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
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
          className="
            fixed
            inset-0
            z-50
            flex
            items-end
            justify-center
            bg-black/40
            px-3
            pb-[max(0.75rem,env(safe-area-inset-bottom))]
            pt-[max(0.75rem,env(safe-area-inset-top))]
            backdrop-blur-none
            md:items-center
            md:p-4
            md:backdrop-blur-sm
            project-modal-backdrop
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
              duration: 0.45,
              ease,
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
            className="
              relative
              w-full
              border
              border-[var(--line)]
              bg-[var(--surface)]
              text-left
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              md:max-w-4xl
              project-modal
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute
                right-3
                top-3
                grid
                h-9
                w-9
                place-items-center
                rounded-full
                border
                border-[var(--line)]
                text-[var(--ink-muted)]
                transition
                hover:text-[var(--ink)]
                sm:right-4
                sm:top-4
                md:right-5
                md:top-5
              "
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="pr-10">
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
                  mt-4
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

            {/* Overview */}
            <Section title="Overview">
              <p>{project.overview}</p>
            </Section>

            {/* Problem */}
            <Section title="Problem">
              <p>{project.problem}</p>
            </Section>

            {/* Engineering Focus */}
            <Section title="Engineering Focus">
              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
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
                      transition
                      hover:border-[var(--line-strong)]
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            {/* Features */}
            <Section title="Key Features">
              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
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

            {/* Technologies */}
            <Section title="Technology Stack">
              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
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

            {/* Links */}
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
    <section className="mt-10">
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
