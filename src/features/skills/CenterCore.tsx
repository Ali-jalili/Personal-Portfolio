/** @format */

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

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

export default CenterCore;
