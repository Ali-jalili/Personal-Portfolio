/** @format */

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease,
      }}
      className="mt-9 flex flex-wrap items-center gap-3"
    >
      {/* Primary */}
      <a
        href="#projects"
        aria-label="View selected projects"
        className="
    btn-primary
    group
    inline-flex
    items-center
    gap-2
    transition-all
    duration-300
    hover:-translate-y-0.5
  "
      >
        <span>View Projects</span>

        <ArrowUpRight
          size={17}
          strokeWidth={1.6}
          aria-hidden="true"
          className="
      transition-transform
      duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
        />
      </a>

      <a
        href="#contact"
        aria-label="Get in touch"
        className="
    btn-ghost
    group
    inline-flex
    items-center
    gap-2
    transition-all
    duration-300
    hover:-translate-y-0.5
  "
      >
        <span>Get in Touch</span>

        <ArrowRight
          size={15}
          strokeWidth={1.5}
          aria-hidden="true"
          className="
      opacity-0
      -translate-x-1
      transition-all
      duration-300
      group-hover:translate-x-0
      group-hover:opacity-100
    "
        />
      </a>

      {/* Secondary */}
      <a
        href="#contact"
        aria-label="Get in touch"
        className="
          btn-ghost
          group
          inline-flex
          items-center
          gap-2
          transition-all
          duration-300
          hover:-translate-y-0.5
        "
      >
        <span>Let's talk</span>

        <ArrowRight
          size={15}
          strokeWidth={1.5}
          aria-hidden="true"
          className="
            opacity-0
            -translate-x-1
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        />
      </a>
    </motion.div>
  );
}

export default HeroActions;
