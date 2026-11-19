/** @format */

import { useRevealOnView } from "../../hooks/useRevealOnView";

function Currently() {
  const revealRef = useRevealOnView(0.3);

  return (
    <section id="currently" className="section-tight relative">
      <div className="container">
        <div ref={revealRef} className="border-t border-[var(--line)] pt-7">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span
              className="
                font-mono
                text-[15px]
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
                text-[15px]
                text-[var(--ink-faint)]
              "
            >
              05
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
              Exploring the{" "}
              <span
                className="
                  serif-italic
                  text-[var(--accent-strong)]
                "
              >
                next challenges.
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
              I&apos;m developing my skills in modern frontend development,
              exploring application architecture, and taking on more complex
              engineering challenges.
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
                    text-[11px]
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

              {/* Exploring */}
              <div>
                <span
                  className="
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                    text-[var(--ink-faint)]
                  "
                >
                  Exploring
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--ink)]
                  "
                >
                  Application Architecture
                </p>
              </div>

              {/* Goal */}
              <div>
                <span
                  className="
                    font-mono
                    text-[11px]
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
        </div>
      </div>
    </section>
  );
}

export default Currently;
