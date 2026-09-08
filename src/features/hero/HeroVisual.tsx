/** @format */

import { motion, useReducedMotion } from "framer-motion";

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="
        relative
        hidden
        h-[430px]
        items-center
        justify-center
        lg:flex
      "
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          h-[360px]
          w-[360px]
          rounded-full
          opacity-30
          blur-[100px]
        "
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow), transparent 68%)",
        }}
      />

      {/* Main card */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -6, 0],
                rotate: [0, 0.3, 0],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="
          relative
          h-[410px]
          w-full
          max-w-[400px]
          overflow-hidden
          rounded-[2rem]
          border
          border-[var(--line)]
          bg-[var(--surface)]
          p-7
          shadow-[0_30px_80px_rgba(20,24,40,0.09)]
        "
      >
        {/* Background */}
        <div
          aria-hidden="true"
          className="
            grid-bg
            pointer-events-none
            absolute
            inset-0
            opacity-40
          "
        />

        {/* Decorative ring */}
        <div
          aria-hidden="true"
          className="
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            border
            border-[var(--accent)]/10
          "
        />

        {/* Header */}
        <div className="relative flex items-center justify-between">
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-[var(--ink-faint)]
            "
          >
            Ali Jalili
          </span>

          <span
            className="
              font-mono
              text-[10px]
              text-[var(--ink-faint)]
            "
          >
            2026
          </span>
        </div>

        {/* Main message */}
        <div className="relative mt-8">
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--accent-strong)]
            "
          >
            Personal Note
          </span>

          <h2 className="mt-5 tracking-[-0.055em]">
            <span
              className="
                block
                text-5xl
                font-semibold
                text-[var(--ink)]
              "
            >
              Build
            </span>

            <span
              className="
                serif-italic
                block
                text-5xl
                text-[var(--ink)]
              "
            >
              with curiosity.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[260px]
              text-sm
              leading-6
              text-[var(--ink-muted)]
            "
          >
            I learn by building real products, questioning decisions, and
            improving every iteration.
          </p>
        </div>

        {/* Bottom mindset */}
        <div className="absolute bottom-7 left-7 right-7">
          <div className="h-px bg-[var(--line)]" />

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-[var(--ink-faint)]
              "
            >
              Problem solving
            </span>

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-[var(--accent-strong)]
              "
            >
              Product thinking
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroVisual;
