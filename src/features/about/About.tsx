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
              I&apos;m a frontend developer who{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                learns by building.
              </span>
            </h2>
          </div>

          {/* Story */}
          <div className="mt-8 max-w-3xl">
            <p className="text-lede text-[var(--ink-muted)]">
              I started learning frontend development through tutorials and
              documentation, but made the most progress when I began building
              projects without step-by-step instructions.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              Building projects like DevDesk and FormFlow taught me more than
              writing components. I had to make decisions about architecture,
              state management, and how each part should work for the user.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              I am still growing, but I now think beyond making a screen look
              right. I care about clear structure, practical decisions, and
              understanding the problems behind the code I write.
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
        </div>
      </div>
    </section>
  );
}

export default About;
