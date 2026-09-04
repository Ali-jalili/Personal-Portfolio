/** @format */

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Ali-jalili",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali--jalili",
  },
];

function Contact() {
  return (
    <section id="contact" className="section-tight relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden border-t border-[var(--line)] pt-7"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Contact
            </span>

            <span className="font-mono text-[10px] text-[var(--ink-faint)]">
              06
            </span>
          </div>

          {/* Content */}
          <div className="mt-14 max-w-4xl">
            <h2 className="text-heading text-[var(--ink)]">
              Let&apos;s build something{" "}
              <span className="serif-italic text-[var(--accent-strong)]">
                meaningful.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lede text-[var(--ink-muted)]">
              I&apos;m currently open to junior frontend opportunities and
              meaningful collaborations. If you&apos;re building something
              interesting, I&apos;d be happy to connect.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:your-email@example.com"
              className="btn-primary group inline-flex items-center gap-2"
            >
              <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
              Get in touch
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {social.label}
                <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Bottom info */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--line)] pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              Based in Iran
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              Open to opportunities
            </span>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[var(--line-strong)] sm:block"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent-strong)]">
              Available for collaboration
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
