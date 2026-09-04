/** @format */

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function Currently() {
  return (
    <section id="currently" className="section-tight relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="border-t border-[var(--line)] pt-7"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Currently
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              05
            </span>
          </div>

          {/* Content */}
          <div className="mt-10 max-w-3xl">
            <h2 className="text-heading text-[var(--ink)]">
              Building toward the{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                next step.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--ink-faint)]">
              I&apos;m currently strengthening my frontend fundamentals,
              building real-world applications, and looking for an opportunity
              to grow within a professional development team.
            </p>
          </div>

          {/* Status */}
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[var(--line)] pt-5">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              <span
                aria-hidden="true"
                className="
                  relative
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--ok)]
                  before:absolute
                  before:inset-0
                  before:animate-pulse-ring
                  before:rounded-full
                  before:bg-[var(--ok)]
                "
              />
              Open to opportunities
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              Learning
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              Building
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent-strong)]">
              Growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Currently;
