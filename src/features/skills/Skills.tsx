/** @format */

import { useRevealOnView } from "../../hooks/useRevealOnView";
import SkillMap from "./SkillMap";

function Skills() {
  const revealRef = useRevealOnView(0.2);

  return (
    <section id="skills" className="section-tight relative overflow-hidden">
      <div className="container">
        <div ref={revealRef}>
          {/* Header */}
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-7">
            <span className="font-mono text-[15px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Skills
            </span>

            <span className="font-mono text-[15px] text-[var(--ink-faint)]">
              02
            </span>
          </div>

          {/* Intro */}
          <div className="mt-10 max-w-2xl">
            <h2 className="text-heading text-[var(--ink)]">
              The tools I{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                build with.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--ink-muted)]">
              The stack I use to turn ideas into working products.
            </p>
          </div>

          {/* Skill Map */}
          <SkillMap />

          {/* Bottom Meta */}
          <div className="mt-8 flex items-center justify-between border-t border-[var(--line)] pt-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              Frontend · Data · Tools
            </span>

            <span className="hidden font-mono text-[11px] text-[var(--ink-faint)] sm:block">
              08 technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
