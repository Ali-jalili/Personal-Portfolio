/** @format */

import { motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
];

const ease = [0.23, 1, 0.32, 1] as const;

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.1,
        ease,
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-5 sm:px-6"
    >
      <div className="container">
        <nav
          className="
            flex items-center justify-between
            rounded-full
            border border-[var(--line)]
            bg-[color:var(--surface)]/75
            px-5 py-3
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            backdrop-blur-xl
          "
        >
          {/* Brand */}
          <a
            href="#hero"
            className="
              font-sans
              text-[15px]
              font-semibold
              tracking-[-0.02em]
              text-[var(--ink)]
              transition-colors duration-300
              hover:text-[var(--accent)]
            "
          >
            Ali Jalili
            <span className="text-[var(--accent)]">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  font-sans
                  text-[14px]
                  font-medium
                  tracking-[-0.01em]
                  text-[var(--ink-muted)]
                  transition-colors duration-300
                  hover:text-[var(--ink)]
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="
              font-sans
              rounded-full
              border border-[var(--line-strong)]
              bg-[var(--surface-soft)]
              px-4 py-2
              text-[14px]
              font-medium
              text-[var(--ink)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[var(--accent)]
              hover:bg-[var(--accent-soft)]
              hover:text-[var(--accent-strong)]
            "
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
