/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../../types/project";

type ProjectDetailsProps = {
  project: Project | null;
  onClose: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // پورتال باعث می‌شود مودال مستقیماً به بادی منتقل شود و از تداخل CSS والدین نجات پیدا کند
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* لایه تاریک پشت مودال */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* بدنه اصلی مودال */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-[var(--line)] bg-[var(--surface)] px-6 py-5 md:px-8 md:py-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  Project Case Study
                </span>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-[var(--ink)] md:text-2xl">
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
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
                      className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm leading-6 text-[var(--ink-muted)]"
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
                      className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm leading-6 text-[var(--ink-muted)]"
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
                      className="rounded-lg border border-[var(--line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.05em] text-[var(--ink-faint)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Section>

              <div className="mt-8 flex flex-wrap gap-5 border-t border-[var(--line)] pt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--accent-strong)]"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
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
    <section className="mt-6 first:mt-0 md:mt-8">
      <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
        {title}
      </h3>
      <div className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
        {children}
      </div>
    </section>
  );
}

export default ProjectDetails;
