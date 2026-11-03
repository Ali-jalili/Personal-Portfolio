/** @format */

import { motion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

function CharReveal({
  text,
  italic = false,
}: {
  text: string;
  italic?: boolean;
}) {
  return (
    <span className={`char-reveal ${italic ? "serif-italic" : ""}`}>
      {text}
    </span>
  );
}

function HeroIntro() {
  return (
    <div className="relative z-[1]">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className="flex flex-wrap items-center gap-x-4 gap-y-2"
      >
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--ink-faint)]">
          Frontend Developer
        </span>

        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--ink-faint)]">
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
        </span>
      </motion.div>

      {/* Name */}
      <h1
        aria-label="Ali Jalili — Frontend Developer"
        className="hero-name mt-4 text-mega text-[var(--ink)]"
      >
        <span aria-hidden="true" className="block">
          <CharReveal text="Ali" />
        </span>

        <span aria-hidden="true" className="block">
          <CharReveal text="Jalili" italic />

          <span className="serif-italic text-[var(--accent-strong)]">.</span>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 block max-w-[58ch] text-lede text-[var(--ink-muted)]">
        I build modern web applications by turning ideas into real products,
        learning through hands-on projects, problem solving, and continuous
        improvement.
      </p>
    </div>
  );
}

export default HeroIntro;
