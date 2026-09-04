/** @format */

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import HeroIntro from "./HeroIntro";
import HeroActions from "./HeroActions";
import HeroProof from "./HeroProof";
import HeroVisual from "./HeroVisual";

const ease = [0.23, 1, 0.32, 1] as const;

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative isolate overflow-hidden"
      style={{
        paddingTop: "clamp(5.5rem, 8vw, 7rem)",
        paddingBottom: "clamp(5rem, 9vw, 8rem)",
      }}
    >
      {/* Hero ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="
            absolute
            left-[45%]
            top-[8%]
            h-[620px]
            w-[620px]
            -translate-x-1/2
            rounded-full
            opacity-50
            blur-[110px]
          "
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow), transparent 68%)",
          }}
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]
          "
        >
          <div className="grid-bg absolute inset-0" />
        </div>
      </div>

      <div className="container">
        {/* Main hero grid */}
        <div
          className="
            relative
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-16
          "
        >
          {/* Left content */}
          <div className="relative z-10 max-w-3xl">
            <HeroIntro />
            <HeroActions />
            <HeroProof />
          </div>

          {/* Right visual */}
          <HeroVisual />
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 1,
            ease,
          }}
          className="
            group
            mt-14
            inline-flex
            items-center
            gap-2
            font-mono
            text-xs
            uppercase
            tracking-[0.18em]
            text-[var(--ink-faint)]
          "
        >
          <span>Scroll</span>

          <span
            aria-hidden="true"
            className="
              grid
              h-7
              w-7
              place-items-center
              rounded-full
              border
              border-[var(--line-strong)]
              transition-all
              duration-200
              group-hover:-translate-y-0.5
              group-hover:border-[var(--accent)]
              group-hover:text-[var(--accent-strong)]
            "
          >
            <ArrowDown size={12} strokeWidth={1.5} />
          </span>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
