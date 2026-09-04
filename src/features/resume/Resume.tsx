/** @format */

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function Resume() {
  return (
    <section id="resume" className="section-tight relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Section Label */}
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Resume
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              04
            </span>
          </div>

          {/* Content */}
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-heading text-[var(--ink)]">
                A closer look at{" "}
                <span className="serif-italic text-[var(--accent-strong)]">
                  my journey.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-[15px] leading-7 text-[var(--ink-faint)]">
                My experience, skills, and background in one document.
              </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-3">
              {/* View CV */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--line-strong)]
                  bg-[var(--surface)]
                  px-5
                  py-3
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.12em]
                  text-[var(--ink)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[var(--accent-strong)]
                  hover:shadow-[0_8px_24px_rgba(20,24,40,0.08)]
                "
              >
                View CV
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* Download CV */}
              <a
                href="/resume.pdf"
                download
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--ink)]
                  bg-[var(--ink)]
                  px-5
                  py-3
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.12em]
                  text-[var(--surface)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_8px_24px_rgba(20,24,40,0.12)]
                "
              >
                Download CV
                <ArrowDownToLine
                  size={13}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
