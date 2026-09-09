/** @format */

import { motion } from "framer-motion";

import { skills } from "./skills.data";

const ease = [0.23, 1, 0.32, 1] as const;

type Skill = (typeof skills)[number];

type SkillCardProps = {
  skill: Skill;
  index: number;
  mobile?: boolean;
};

function SkillCard({ skill, index, mobile = false }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: 0.1 + index * 0.05,
        ease,
      }}
      className={mobile ? "relative" : `absolute z-20 ${skill.position}`}
    >
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.025,
        }}
        transition={{
          duration: 0.25,
          ease,
        }}
        className="
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
      </motion.div>
    </motion.div>
  );
}

export default SkillCard;
