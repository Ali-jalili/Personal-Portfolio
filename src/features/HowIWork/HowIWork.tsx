/** @format */

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the problem, the user, and what the product actually needs.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn the idea into a clear interface with structure that stays easy to work with.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Test, revisit decisions, and improve the result instead of stopping at the first working version.",
  },
];

function HowIWork() {
  return (
    <section id="how-i-work" className="section-tight relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              How I Work
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              05
            </span>
          </div>

          {/* Intro */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="text-heading text-[var(--ink)]">
              From idea to{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                better
              </span>{" "}
              product.
            </h2>

            <p className="max-w-xl text-[15px] leading-7 text-[var(--ink-muted)] lg:justify-self-end">
              I like to keep the process simple: understand the problem, build
              with intention, then keep improving what I&apos;ve made.
            </p>
          </div>

          {/* Process */}
          <div className="relative mt-16">
            {/* Desktop connecting line */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-4
                right-4
                top-4
                hidden
                h-px
                bg-[var(--line)]
                md:block
              "
            />

            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease,
                  }}
                  className="group relative min-w-0"
                >
                  {/* Step marker */}
                  <div className="relative z-10 flex items-center gap-3">
                    <span
                      className="
                        grid
                        h-8
                        w-8
                        shrink-0
                        place-items-center
                        rounded-full
                        border
                        border-[var(--line-strong)]
                        bg-[var(--surface)]
                        font-mono
                        text-[9px]
                        text-[var(--accent-strong)]
                        transition-all
                        duration-300
                        group-hover:border-[var(--accent)]
                        group-hover:text-[var(--accent)]
                      "
                    >
                      {step.number}
                    </span>

                    {/* Mobile connector */}
                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="
                          h-px
                          flex-1
                          bg-[var(--line)]
                          md:hidden
                        "
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-7 max-w-sm">
                    <h3
                      className="
                        font-display
                        text-[24px]
                        font-medium
                        tracking-[-0.04em]
                        text-[var(--ink)]
                        transition-colors
                        duration-300
                        group-hover:text-[var(--accent-strong)]
                      "
                    >
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[var(--ink-faint)]">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-14 border-t border-[var(--line)] pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              Learn → Build → Refine
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowIWork;
