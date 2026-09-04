/** @format */

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Layers3,
  Palette,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const skills = [
  {
    name: "React",
    category: "Core",
    icon: Code2,
    position: "left-[2%] top-[11%]",
  },
  {
    name: "TypeScript",
    category: "Core",
    icon: Terminal,
    position: "left-[27%] top-[2%]",
  },
  {
    name: "JavaScript",
    category: "Core",
    icon: Layers3,
    position: "right-[-1%] top-[43%]",
  },
  {
    name: "Tailwind CSS",
    category: "UI & Styling",
    icon: Palette,
    position: "right-[5%] top-[11%]",
  },
  {
    name: "Supabase",
    category: "Data & Backend",
    icon: Server,
    position: "right-[8%] bottom-[10%]",
  },
  {
    name: "PostgreSQL",
    category: "Data & Backend",
    icon: Database,
    position: "left-[27%] bottom-[2%]",
  },
  {
    name: "Git / GitHub",
    category: "Development",
    icon: GitBranch,
    position: "left-[1%] bottom-[11%]",
  },
  {
    name: "Vite",
    category: "Development",
    icon: Workflow,
    position: "left-[-1%] top-[43%]",
  },
];

function SkillCard({
  skill,
  index,
  mobile = false,
}: {
  skill: (typeof skills)[number];
  index: number;
  mobile?: boolean;
}) {
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
          backdrop-blur-md
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
          <span className="block whitespace-nowrap font-display text-[14px] font-medium tracking-[-0.02em] text-[var(--ink)] sm:text-[15px]">
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

function CenterCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
      className="
        absolute
        left-1/2
        top-1/2
        z-10
        flex
        h-36
        w-36
        -translate-x-1/2
        -translate-y-1/2
        flex-col
        items-center
        justify-center
        rounded-full
        border
        border-[var(--line-strong)]
        bg-[var(--surface)]
        shadow-[0_25px_70px_rgba(20,24,40,0.08)]
        sm:h-40
        sm:w-40
      "
    >
      <div className="relative mb-3 grid h-11 w-11 place-items-center rounded-xl bg-[var(--ink)] text-[var(--bg)]">
        <Code2 size={21} strokeWidth={1.7} />

        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
      </div>

      <span className="font-display text-lg font-medium tracking-[-0.025em] text-[var(--ink)]">
        Frontend
      </span>

      <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
        Core Stack
      </span>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="section-tight relative overflow-hidden pt-6 pb-24 sm:pt-8"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Skills
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              02
            </span>
          </div>

          {/* Intro */}
          <div className="mt-10 max-w-2xl">
            <h2 className="text-heading text-[var(--ink)]">
              The tools behind the{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                work.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--ink-muted)]">
              A focused stack for building modern interfaces, working with
              structured data, and shipping reliable web applications.
            </p>
          </div>

          {/* Desktop Skill Map */}
          <div className="relative mx-auto mt-14 hidden h-[560px] max-w-[980px] md:block lg:h-[600px]">
            {/* Grid */}
            <div
              aria-hidden="true"
              className="
                grid-bg
                pointer-events-none
                absolute
                inset-x-[8%]
                inset-y-[4%]
                opacity-30
                [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_78%)]
              "
            />

            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-64
                w-64
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                opacity-25
                blur-[90px]
              "
              style={{
                background:
                  "radial-gradient(circle, var(--accent-glow), transparent 70%)",
              }}
            />

            {/* Connecting Lines */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
            >
              <line
                x1="500"
                y1="300"
                x2="110"
                y2="100"
                stroke="var(--line-strong)"
              />
              <line
                x1="500"
                y1="300"
                x2="350"
                y2="55"
                stroke="var(--line-strong)"
              />
              <line
                x1="500"
                y1="300"
                x2="890"
                y2="100"
                stroke="var(--line-strong)"
              />
              <line
                x1="500"
                y1="300"
                x2="950"
                y2="275"
                stroke="var(--line-strong)"
              />
              <line
                x1="500"
                y1="300"
                x2="830"
                y2="520"
                stroke="var(--line-strong)"
              />
              <line
                x1="500"
                y1="300"
                x2="350"
                y2="555"
                stroke="var(--line-strong)"
              />
              <line
                x1="500"
                y1="300"
                x2="105"
                y2="515"
                stroke="var(--line-strong)"
              />
              <line
                x1="500"
                y1="300"
                x2="70"
                y2="280"
                stroke="var(--line-strong)"
              />
            </svg>

            <CenterCore />

            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Mobile Skill Map */}
          <div className="mt-12 md:hidden">
            <div className="relative mx-auto mb-10 h-40 w-full max-w-sm">
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-36
                  w-36
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  opacity-25
                  blur-[70px]
                "
                style={{
                  background:
                    "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                }}
              />

              <CenterCore />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  mobile
                />
              ))}
            </div>
          </div>

          {/* Bottom Meta */}
          <div className="mt-8 flex items-center justify-between border-t border-[var(--line)] pt-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
              Core · Data · UI · Development
            </span>

            <span className="hidden font-mono text-[9px] text-[var(--ink-faint)] sm:block">
              08 technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
