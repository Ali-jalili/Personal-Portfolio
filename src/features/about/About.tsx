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
          {/* Section label */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              About
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              01
            </span>
          </div>

          {/* Main content */}
          <div className="mt-14 max-w-5xl">
            <h2 className="text-heading text-[var(--ink)]">
              I care about building things that are{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                simple, useful,
              </span>{" "}
              and well made.
            </h2>

            <div className="mt-8 max-w-3xl">
              <p className="text-lede text-[var(--ink-muted)]">
                I&apos;m a Junior Frontend Developer focused on building modern
                web applications with React and TypeScript. I enjoy turning
                ideas into clean interfaces while keeping the underlying
                architecture understandable and maintainable.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
                Most of my learning comes through building real projects. Along
                the way, I&apos;ve worked with authentication, APIs, data
                management, reusable components, and frontend architecture.
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--line)] pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              Based in Iran
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              Learning by building
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent-strong)]">
              Open to opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
