/** @format */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease,
      }}
      className="mt-9 flex flex-wrap items-center gap-3"
    >
      <a href="#projects" className="btn-primary group">
        View my work
        <ArrowRight
          size={18}
          strokeWidth={1.5}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>

      <a href="#contact" className="btn-ghost">
        Let's talk
      </a>
    </motion.div>
  );
}

export default HeroActions;
