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
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[var(--ink-faint)]
              "
            >
              Currently
            </span>

            <span
              className="
                font-mono
                text-[10px]
                text-[var(--ink-faint)]
              "
            >
              06
            </span>
          </div>

          {/* Content */}
          <div className="mt-10 max-w-3xl">
            <h2
              className="
                text-heading
                text-[var(--ink)]
              "
            >
              Focused on becoming a{" "}
              <span
                className="
                  serif-italic
                  text-[var(--accent-strong)]
                "
              >
                better engineer.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-[15px]
                leading-7
                text-[var(--ink-muted)]
              "
            >
              I&apos;m focused on building real products, improving my frontend
              architecture skills, and learning through practical engineering
              problems and continuous iteration.
            </p>
          </div>

          {/* Current Focus */}
          <div
            className="
              mt-10
              border-t
              border-[var(--line)]
              pt-5
            "
          >
            <div
              className="
                grid
                gap-5
                sm:grid-cols-3
                sm:gap-8
              "
            >
              {/* Building */}
              <div>
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-[var(--ink-faint)]
                  "
                >
                  Building
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--ink)]
                  "
                >
                  Real-world Applications
                </p>
              </div>

              {/* Improving */}
              <div>
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-[var(--ink-faint)]
                  "
                >
                  Improving
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--ink)]
                  "
                >
                  React & TypeScript Workflow
                </p>
              </div>

              {/* Goal */}
              <div>
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-[var(--ink-faint)]
                  "
                >
                  Goal
                </span>

                <p
                  className="
                    mt-2
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-[var(--accent-strong)]
                  "
                >
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
