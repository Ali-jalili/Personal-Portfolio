/** @format */

import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";
import { useRevealOnView } from "../../hooks/useRevealOnView";

function Resume() {
  const revealRef = useRevealOnView(0.2);

  return (
    <section
      id="resume"
      className="section-tight relative overflow-hidden py-8 md:py-10"
    >
      <div className="container">
        <div ref={revealRef}>
          {/* Header */}
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-6">
            <span className="font-mono text-[15px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Resume
            </span>

            <span className="font-mono text-[15px] text-[var(--ink-faint)]">
              04
            </span>
          </div>

          {/* Resume Card */}
          <div className="relative mt-7 overflow-hidden border border-[var(--line)]">
            {/* Decoration */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-44
                w-44
                rounded-full
                border
                border-[var(--line)]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-7
                -top-7
                h-28
                w-28
                rounded-full
                border
                border-[var(--line)]
              "
            />

            <div
              className="
                relative
                grid
                gap-8
                p-6
                sm:p-8
                lg:grid-cols-[1fr_220px]
                md:items-center
                md:p-9
              "
            >
              {/* Copy */}
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[var(--line)]
                      bg-[var(--surface)]
                    "
                  >
                    <FileText
                      size={15}
                      strokeWidth={1.5}
                      className="text-[var(--accent-strong)]"
                    />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                    Curriculum Vitae
                  </span>
                </div>

                <h2 className="text-heading text-[var(--ink)]">
                  A detailed look at my{" "}
                  <span className="serif-italic text-[var(--accent-strong)]">
                    frontend journey.
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-[14px]
                    leading-7
                    text-[var(--ink-muted)]
                  "
                >
                  A summary of my projects, technical skills, and experience
                  building modern web applications.
                </p>
              </div>

              {/* Actions */}
              <div className="relative flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    flex
                    min-h-12
                    items-center
                    justify-between
                    overflow-hidden
                    border
                    border-[var(--ink)]
                    bg-[var(--ink)]
                    px-4
                    text-[var(--surface)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  <span className="relative z-10 font-mono text-[9px] font-medium uppercase tracking-[0.14em]">
                    View CV
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      border
                      border-white/20
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  >
                    <ArrowUpRight size={13} strokeWidth={1.7} />
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      translate-y-full
                      bg-[var(--accent-strong)]
                      transition-transform
                      duration-300
                      group-hover:translate-y-0
                    "
                  />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="
                    group
                    flex
                    min-h-10
                    items-center
                    justify-between
                    border
                    border-[var(--line)]
                    px-4
                    text-[var(--ink-muted)]
                    transition-all
                    duration-300
                    hover:border-[var(--line-strong)]
                    hover:text-[var(--ink)]
                  "
                >
                  <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em]">
                    Download PDF
                  </span>

                  <ArrowDownToLine
                    size={13}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-y-0.5
                    "
                  />
                </a>
              </div>
            </div>

            {/* Bottom Info */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-2
                border-t
                border-[var(--line)]
                px-6
                py-4
                sm:px-8
                md:px-9
              "
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                Real-world Projects
              </span>

              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
              />

              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                Product-focused Development
              </span>

              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
              />

              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
