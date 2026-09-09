/** @format */

import { type CSSProperties } from "react";
import { useRevealOnView } from "../../hooks/useRevealOnView";
import { skills } from "./skills.data";

type Skill = (typeof skills)[number];

type SkillCardProps = {
  skill: Skill;
  index: number;
  mobile?: boolean;
};

function SkillCard({ skill, index, mobile = false }: SkillCardProps) {
  const Icon = skill.icon;
  const revealRef = useRevealOnView(0.15);

  return (
    <div
      ref={revealRef}
      style={{ "--reveal-delay": `${0.1 + index * 0.05}s` } as CSSProperties}
      className={mobile ? "relative" : `absolute z-20 ${skill.position}`}
    >
      <div
        className="
          skill-card-hover
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-[var(--line)]
          bg-[var(--surface)]/90
          px-3.5
          py-3
          shadow-[0_12px_35px_rgba(20,24,40,0.06)]
          backdrop-blur-none
          md:backdrop-blur-md
          sm:px-4
        "
      >
        <div
          className="
            grid
            h-9
            w-9
            shrink-0
            place-items-center
            rounded-xl
            border
            border-[var(--line)]
            bg-[var(--surface-soft)]
            text-[var(--ink-muted)]
            transition-all
            duration-300
            group-hover:border-[var(--accent)]
            group-hover:bg-[var(--accent-soft)]
            group-hover:text-[var(--accent-strong)]
          "
        >
          <Icon size={16} strokeWidth={1.6} />
        </div>

        <div className="min-w-0">
          <span className="block break-words font-display text-[14px] font-medium tracking-[-0.02em] text-[var(--ink)] sm:text-[15px] font-mono">
            {skill.name}
          </span>

          <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
            {skill.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
