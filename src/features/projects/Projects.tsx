/** @format */

import { motion } from "framer-motion";

import { projects } from "../../data/projects";
import ProjectShowcase from "./ProjectShowcase";

const ease = [0.22, 1, 0.36, 1] as const;

function Projects() {
  return (
    <section id="projects" className="section-tight relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Selected Work
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              03
            </span>
          </div>

          <div className="mt-8 flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-heading text-[var(--ink)]">
                Things I&apos;ve{" "}
                <span className="serif-italic text-[var(--accent-strong)]">
                  built.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ink-faint)]">
                A selection of products, experiments, and real-world
                applications.
              </p>
            </div>

            <span className="hidden pb-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-faint)] sm:block">
              {projects.length} projects
            </span>
          </div>
        </motion.div>

        {/* Project Deck */}
        <div className="mt-12 md:mt-14">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
