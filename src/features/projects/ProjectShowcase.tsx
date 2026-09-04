/** @format */

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "../../types/project";

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.16,
        margin: "0px 0px -8% 0px",
      }}
      whileHover={{
        y: -3,
        transition: {
          duration: 0.45,
          ease,
        },
      }}
      style={{
        zIndex: index,
      }}
      className="
        group
        relative
        mb-6
        overflow-hidden
        rounded-[28px]
        border
        border-[var(--line)]
        bg-[var(--surface)]
        shadow-[0_20px_60px_rgba(20,24,40,0.06)]
        will-change-transform

        md:sticky
        md:top-24
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-[1.35fr_0.65fr]
        "
      >
        {/* ───────────── Preview ───────────── */}
        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden
            bg-[var(--surface-soft)]

            md:aspect-auto
            md:min-h-[390px]
          "
        >
          {project.image ? (
            <motion.img
              src={project.image}
              alt={`${project.title} screenshot`}
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                ease,
              }}
              whileHover={{
                scale: 1.025,
                transition: {
                  duration: 0.7,
                  ease,
                },
              }}
              className="
                h-full
                w-full
                object-contain
                p-4
                sm:p-5
                will-change-transform
              "
            />
          ) : (
            <div className="grid h-full min-h-[220px] place-items-center md:min-h-[390px]">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                Preview
              </span>
            </div>
          )}

          {/* Project Number */}
          <div className="absolute left-5 top-5">
            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              {String(index).padStart(2, "0")}
            </span>
          </div>

          {/* Primary Technology */}
          {project.technologies[0] && (
            <div className="absolute bottom-5 left-5">
              <span
                className="
                  rounded-full
                  border
                  border-[var(--line)]
                  bg-[var(--surface)]/80
                  px-3
                  py-1.5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.12em]
                  text-[var(--ink-muted)]
                  backdrop-blur-md
                "
              >
                {project.technologies[0]}
              </span>
            </div>
          )}
        </div>

        {/* ───────────── Content ───────────── */}
        <div
          className="
            flex
            flex-col
            justify-between
            p-6

            sm:p-8

            md:p-9
            lg:p-10
          "
        >
          <div>
            {/* Label */}
            <div className="flex items-center justify-between gap-4">
              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--accent-strong)]
                "
              >
                Featured Project
              </span>

              <motion.span
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                transition={{
                  duration: 0.25,
                  ease,
                }}
                className="text-[var(--ink-faint)] transition-colors duration-300 group-hover:text-[var(--accent-strong)]"
              >
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </motion.span>
            </div>

            {/* Title */}
            <h3
              className="
                mt-7
                font-display
                text-[30px]
                font-medium
                tracking-[-0.045em]
                text-[var(--ink)]

                sm:text-[36px]
              "
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-md
                text-[14px]
                leading-7
                text-[var(--ink-faint)]
              "
            >
              {project.description}
            </p>
          </div>

          <div className="mt-9">
            {/* Technologies */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.07em]
                    text-[var(--ink-muted)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--ink)]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Links */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-5
                border-t
                border-[var(--line)]
                pt-5
              "
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.1em]
                    text-[var(--ink-muted)]
                    transition-colors
                    duration-200
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
                    inline-flex
                    items-center
                    gap-1
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.1em]
                    text-[var(--accent-strong)]
                    transition-colors
                    duration-200
                    hover:text-[var(--accent)]
                  "
                >
                  Live Demo
                  <ArrowUpRight size={11} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectShowcase;
