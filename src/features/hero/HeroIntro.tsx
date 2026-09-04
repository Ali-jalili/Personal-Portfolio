/** @format */

import { motion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

function CharReveal({
  text,
  baseDelay = 0,
  italic = false,
}: {
  text: string;
  baseDelay?: number;
  italic?: boolean;
}) {
  return (
    <span className={italic ? "serif-italic" : undefined}>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="char"
          style={{
            animationDelay: `${baseDelay + 0.04 * index}s`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

function HeroIntro() {
  return (
    <div className="relative z-[1]">
      {/* Top information */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="flex flex-wrap items-center gap-x-4 gap-y-2"
      >
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--ink-faint)]">
          Frontend Developer · React & TypeScript
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
          <CharReveal text="Jalili" baseDelay={0.26} italic />

          <span
            className="char serif-italic text-[var(--accent-strong)]"
            style={{ animationDelay: "0.56s" }}
          >
            .
          </span>
        </span>
      </h1>

      {/* Description — same reveal-mask system */}
      <p className="reveal-mask mt-6 block max-w-[58ch] text-lede text-[var(--ink-muted)]">
        <span style={{ animationDelay: "0.5s" }}>
          I build modern web experiences with{" "}
          <span className="serif-italic text-[var(--ink)]">React</span> and{" "}
          <span className="serif-italic text-[var(--ink)]">TypeScript</span>,
          focusing on clean architecture, thoughtful UI, and products that feel
          good to use.
        </span>
      </p>
    </div>
  );
}

export default HeroIntro;
