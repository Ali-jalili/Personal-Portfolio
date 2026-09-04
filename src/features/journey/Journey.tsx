/** @format */

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const journeySteps = [
  {
    number: "01",
    label: "START",
    title: "Learn the fundamentals",
    description:
      "Started by building a strong foundation in frontend development and understanding how the web works beneath the interface.",
  },
  {
    number: "02",
    label: "BUILD",
    title: "Turn concepts into products",
    description:
      "Moved from isolated exercises to complete applications where different concepts had to work together as one system.",
  },
  {
    number: "03",
    label: "REFINE",
    title: "Learn through real problems",
    description:
      "Each project introduced new challenges around architecture, data flow, authentication, and maintainable code.",
  },
  {
    number: "04",
    label: "NEXT",
    title: "Build better, not just more",
    description:
      "The goal is no longer just learning new tools. It is becoming a developer who can make thoughtful technical decisions and build better products.",
  },
];

function Journey() {
  return (
    <section id="journey" className="section-tight relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease }}
          className="border-t border-[var(--line)] pt-7"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Journey
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              04
            </span>
          </div>

          {/* Intro */}
          <div className="mt-10 max-w-3xl">
            <h2 className="text-heading text-[var(--ink)]">
              From learning to{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                building.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--ink-faint)]">
              My development path has been shaped by building, breaking, and
              improving real applications. Each step has changed the way I think
              about frontend development.
            </p>
          </div>

          {/* Journey timeline */}
          <div className="relative mt-14">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-[5px]
                top-0
                w-px
                bg-[var(--line)]
                sm:left-[7px]
              "
            />

            <div className="space-y-10 sm:space-y-12">
              {journeySteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="relative pl-8 sm:pl-12"
                >
                  {/* Timeline point */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-1
                      grid
                      h-[11px]
                      w-[11px]
                      place-items-center
                      rounded-full
                      border
                      border-[var(--accent)]
                      bg-[var(--surface)]
                    "
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  </span>

                  {/* Step meta */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[var(--accent-strong)]">
                      {step.number}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                      {step.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-3 max-w-2xl">
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-[var(--ink)]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-[14px] leading-7 text-[var(--ink-faint)]">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-14 border-t border-[var(--line)] pt-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              Learn → Build → Refine → Repeat
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;
