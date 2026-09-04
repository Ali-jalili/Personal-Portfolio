/** @format */

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const proof = [
  {
    value: "03",
    label: "Projects shipped",
  },
  {
    value: "01",
    label: "Developer workspace",
  },
  {
    value: "∞",
    label: "Still building",
  },
];

const socials = [
  {
    href: "https://github.com/Ali-jalili",
    label: "GitHub",
    icon: "GH",
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: "in",
  },
  {
    href: "mailto:your@email.com",
    label: "Email",
    icon: <ArrowUpRight size={15} strokeWidth={1.5} />,
  },
];

function HeroProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.7,
        ease,
      }}
      className="
        mt-9
        border-t
        border-[var(--line)]
        pt-5
      "
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Proof */}
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {proof.map((item) => (
            <div key={item.label} className="flex items-baseline gap-2">
              <span className="data text-data-lg text-[var(--accent-strong)]">
                {item.value}
              </span>

              <span className="text-small text-[var(--ink-faint)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Social links */}
        <ul className="flex items-center gap-2">
          {socials.map((social) => {
            const isExternal = !social.href.startsWith("mailto:");

            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center
                    rounded-[var(--r-sm)]
                    border
                    border-[var(--line)]
                    text-[var(--ink-muted)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent-strong)]
                  "
                >
                  {typeof social.icon === "string" ? (
                    <span className="font-mono text-xs font-medium">
                      {social.icon}
                    </span>
                  ) : (
                    social.icon
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default HeroProof;
