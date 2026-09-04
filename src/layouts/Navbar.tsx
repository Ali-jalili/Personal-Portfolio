/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#journey" },
];

const ease = [0.23, 1, 0.32, 1] as const;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease,
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
    >
      <div className="container">
        <nav
          className="
            relative
            flex items-center justify-between
            rounded-full
            border border-[var(--line)]
            bg-[color:var(--surface)]/80
            px-5 py-3
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            backdrop-blur-xl
          "
        >
          {/* Brand */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="
              font-sans
              text-[16px]
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="
              hidden
              rounded-full
              border border-[var(--line-strong)]
              bg-[var(--surface-soft)]
              px-4 py-2
              font-sans
              text-[14px]
              font-medium
              text-[var(--ink)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[var(--accent)]
              hover:bg-[var(--accent-soft)]
              hover:text-[var(--accent-strong)]
              md:inline-flex
            "
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              grid
              h-9 w-9
              place-items-center
              rounded-full
              border border-[var(--line)]
              text-[var(--ink-muted)]
              transition-all duration-200
              hover:border-[var(--line-strong)]
              hover:text-[var(--ink)]
              md:hidden
            "
          >
            {isOpen ? (
              <X size={17} strokeWidth={1.5} />
            ) : (
              <Menu size={17} strokeWidth={1.5} />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25, ease }}
                className="
                  absolute
                  left-0
                  right-0
                  top-[calc(100%+8px)]
                  rounded-2xl
                  border border-[var(--line)]
                  bg-[color:var(--surface)]/95
                  p-3
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  backdrop-blur-xl
                  md:hidden
                "
              >
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        rounded-xl
                        px-4 py-3
                        font-sans
                        text-sm
                        font-medium
                        text-[var(--ink-muted)]
                        transition-colors
                        hover:bg-[var(--surface-soft)]
                        hover:text-[var(--ink)]
                      "
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="my-2 h-px bg-[var(--line)]" />

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="
                      rounded-xl
                      bg-[var(--accent-soft)]
                      px-4 py-3
                      font-sans
                      text-sm
                      font-medium
                      text-[var(--accent-strong)]
                      transition-colors
                      hover:bg-[var(--accent)]
                      hover:text-white
                    "
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
