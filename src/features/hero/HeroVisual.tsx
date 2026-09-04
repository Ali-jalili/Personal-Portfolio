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
        h-[400px]
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
        {/* Grid */}
        <div
          aria-hidden="true"
          className="
            grid-bg
            pointer-events-none
            absolute
            inset-0
            opacity-50
          "
        />

        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="
            absolute
            right-[-90px]
            top-[-90px]
            h-[260px]
            w-[260px]
            rounded-full
            border
            border-[var(--accent)]/10
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            right-[-55px]
            top-[-55px]
            h-[190px]
            w-[190px]
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
            Personal Portfolio
          </span>

          <span className="font-mono text-[10px] text-[var(--ink-faint)]">
            01 / 01
          </span>
        </div>

        {/* Identity */}
        <div className="relative mt-16">
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--accent-strong)]
            "
          >
            A.J
          </span>

          <h2 className="mt-5 tracking-[-0.055em]">
            <span className="block text-5xl font-semibold text-[var(--ink)]">
              Frontend
            </span>

            <span className="serif-italic mt-1 block text-5xl text-[var(--ink)]">
              Engineering
            </span>
          </h2>
        </div>

        {/* Center visual */}
        <div className="absolute left-1/2 top-[57%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            className="
              relative
              h-24
              w-24
              rounded-full
              border
              border-[var(--line-strong)]
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[var(--accent)]
                shadow-[0_0_24px_var(--accent-glow)]
              "
            />

            <span
              className="
                absolute
                inset-3
                rounded-full
                border
                border-dashed
                border-[var(--line)]
              "
            />
          </motion.div>
        </div>

        {/* Bottom information */}
        <div className="absolute bottom-7 left-7 right-7">
          <div className="flex items-end justify-between">
            <div>
              <span
                className="
                  block
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[var(--ink-faint)]
                "
              >
                Focus
              </span>

              <span className="mt-2 block text-sm font-medium text-[var(--ink)]">
                Interfaces & Product Experience
              </span>
            </div>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              2026
            </span>
          </div>

          <div className="mt-5 h-px bg-[var(--line)]" />

          <div className="mt-3 flex items-center justify-between">
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-[var(--ink-faint)]
              "
            >
              Practical web applications
            </span>

            <span
              className="
                font-mono
                text-[9px]
                text-[var(--accent-strong)]
              "
            >
              ● ACTIVE
            </span>
          </div>
        </div>
      </motion.div>

      {/* Current work */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
        }}
        className="
          absolute
          -bottom-1
          -left-1
          rounded-xl
          border
          border-[var(--line)]
          bg-[var(--surface)]
          px-4
          py-3
          shadow-[0_12px_30px_rgba(20,24,40,0.07)]
        "
      >
        <span
          className="
            block
            font-mono
            text-[9px]
            uppercase
            tracking-[0.14em]
            text-[var(--ink-faint)]
          "
        >
          Currently building
        </span>

        <span className="mt-1 block text-sm font-medium text-[var(--ink)]">
          DevDesk
        </span>
      </motion.div>
    </motion.div>
  );
}

export default HeroVisual;
