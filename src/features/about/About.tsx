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
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              About
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
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
              I focus on turning ideas into practical, usable products. My
              learning path has been driven by building real applications rather
              than simply following tutorials.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              Through each project, I&apos;ve worked through challenges around
              application structure, data, authentication, reusable interfaces,
              and the decisions that make a product easier to understand and
              maintain.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              I enjoy understanding how things work beneath the surface, solving
              problems thoughtfully, and improving what I build through
              iteration. I&apos;m now looking to bring that hands-on mindset
              into a professional team and keep growing through real
              collaboration.
            </p>
          </div>

          {/* Bottom meta */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--line)] pt-5">
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
