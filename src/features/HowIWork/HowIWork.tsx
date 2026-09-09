/** @format */

import { type CSSProperties } from "react";
import { useRevealOnView } from "../../hooks/useRevealOnView";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Understand the requirements, think through the user flow, and identify the data and technical needs before writing code.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Build with reusable components, clear responsibilities, and a maintainable structure that is easy to change.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Review technical decisions, reduce unnecessary complexity, and improve both the user experience and code quality.",
  },
];

function HowIWork() {
  const revealRef = useRevealOnView(0.25);
  const stepRevealRef = useRevealOnView(0.35);

  return (
    <section id="how-i-work" className="section-tight relative overflow-hidden">
      <div className="container">
        <div ref={revealRef}>
          {/* Header */}
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-7">
            <span
              className="
                font-mono
                text-[15px]
                uppercase
                tracking-[0.18em]
                text-[var(--ink-faint)]
              "
            >
              Engineering Process
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

          {/* Intro */}
          <div
            className="
              mt-12
              grid
              gap-8
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-end
            "
          >
            <h2
              className="
                text-heading
                text-[var(--ink)]
              "
            >
              Building through{" "}
              <span
                className="
                  serif-italic
                  text-[var(--accent-strong)]
                "
              >
                problem solving.
              </span>
            </h2>

            <p
              className="
                max-w-xl
                text-[15px]
                leading-7
                text-[var(--ink-muted)]
                lg:justify-self-end
              "
            >
              I focus on understanding the problem first, building with
              intention, and improving the result through continuous iteration.
            </p>
          </div>

          {/* Process */}
          <div className="relative mt-16">
            {/* Desktop Line */}
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
                lg:block
              "
            />

            <div
              className="
                grid
                gap-10
                md:grid-cols-2
                lg:grid-cols-3
                md:gap-8
              "
            >
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  ref={stepRevealRef}
                  style={
                    { "--reveal-delay": `${index * 0.12}s` } as CSSProperties
                  }
                  className="group relative min-w-0"
                >
                  {/* Marker */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-3
                    "
                  >
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

                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="
                          h-px
                          flex-1
                          bg-[var(--line)]
                          lg:hidden
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

                    <p
                      className="
                        mt-3
                        text-[14px]
                        leading-7
                        text-[var(--ink-faint)]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 border-t border-[var(--line)] pt-5">
            <p
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.14em]
                text-[var(--ink-faint)]
              "
            >
              Explore → Build → Improve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
