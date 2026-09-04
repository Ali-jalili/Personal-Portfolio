/** @format */

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function Currently() {
  return (
    <section id="currently" className="section-tight relative">
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
              06
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

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--ink-muted)]">
              I&apos;m currently focused on strengthening my frontend
              engineering skills through real-world projects, improving how I
              think about architecture and product decisions, and preparing to
              contribute to a professional development team.
            </p>
          </div>

          {/* Current focus */}
          <div className="mt-10 border-t border-[var(--line)] pt-5">
            <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                  Focus
                </span>

                <p className="mt-2 text-sm text-[var(--ink)]">
                  Frontend Engineering
                </p>
              </div>

              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                  Learning
                </span>

                <p className="mt-2 text-sm text-[var(--ink)]">
                  Architecture &amp; Product Thinking
                </p>
              </div>

              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                  Direction
                </span>

                <p className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent-strong)]">
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
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Currently;
