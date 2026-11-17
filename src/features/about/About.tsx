/** @format */

import { useRevealOnView } from "../../hooks/useRevealOnView";

function About() {
  const revealRef = useRevealOnView(0.3);

  return (
    <section id="about" className="section-tight relative overflow-hidden">
      <div className="container">
        <div
          ref={revealRef}
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
              I build thoughtful interfaces for{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                better digital experiences.
              </span>
            </h2>
          </div>

          {/* Story */}
          <div className="mt-8 max-w-3xl">
            <p className="text-lede text-[var(--ink-muted)]">
              I&apos;m a frontend developer interested in turning ideas and
              complex workflows into clear, intuitive, and responsive user
              experiences.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              I care about more than how an interface looks. I focus on writing
              structured, maintainable code, building reusable components, and
              making thoughtful decisions about state, accessibility, and
              interaction.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              I&apos;m continuously improving my skills through hands-on
              development and exploring better ways to solve problems. I&apos;m
              looking for an opportunity to contribute to a team, learn from
              experienced developers, and build products that make a meaningful
              difference.
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
              Focused on frontend development
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-strong)]">
              Open to frontend opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
