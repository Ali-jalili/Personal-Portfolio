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
              I think beyond{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                the code.
              </span>
            </h2>
          </div>

          {/* Story */}
          <div className="mt-8 max-w-3xl">
            <p className="text-lede text-[var(--ink-muted)]">
              I&apos;m a frontend developer who enjoys understanding how
              products work, why certain decisions are made, and how different
              parts come together to solve a problem.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              To me, building software goes beyond turning designs into working
              interfaces. It means understanding the purpose behind each
              feature, considering how it should behave, and making technical
              decisions that keep the product reliable and maintainable.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              I&apos;m curious about the reasoning behind things, not just how
              to implement them. I enjoy exploring different approaches,
              understanding their trade-offs, and finding ways to make the
              solutions I build better.
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
