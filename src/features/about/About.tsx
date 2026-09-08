/** @format */

import { motion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

function About() {
  return (
    <section id="about" className="section-tight relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="relative border-t border-[var(--line)] pt-8"
        >
          {/* Section header */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[15px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              About
            </span>

            <span className="font-mono text-[15px] text-[var(--ink-faint)]">
              01
            </span>
          </div>

          {/* Main statement */}
          <div className="mt-12 max-w-5xl">
            <h2 className="text-heading text-[var(--ink)]">
              I&apos;m a frontend developer who{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                learns by building.
              </span>
            </h2>
          </div>

          {/* Story */}
          <div className="mt-8 max-w-3xl">
            <p className="text-lede text-[var(--ink-muted)]">
              My journey into frontend development has been shaped by building
              real projects, solving problems, and learning from every challenge
              along the way.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              I started by learning through tutorials, but gradually realized
              that real growth comes from creating things myself, making
              decisions, and understanding why things work.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              Today, I focus on building practical products, improving my
              engineering mindset, and becoming a better developer through
              continuous iteration and collaboration.
            </p>
          </div>

          {/* Bottom meta */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--line)] pt-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              Based in Iran
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              Learning through projects
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-strong)]">
              Open to frontend roles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
