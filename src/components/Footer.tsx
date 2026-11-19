/** @format */

import { ArrowUp } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] py-6">
      <div
        className="
          container
          flex
          flex-col
          items-center
          justify-between
          gap-3
          px-1
          sm:flex-row
          sm:gap-6
        "
      >
        {/* ink-muted (not ink-faint) keeps 11px text above the 4.5:1
            WCAG contrast minimum on both light and dark surfaces. */}
        <p
          className="
            font-mono
            text-[11px]
            text-center
            uppercase
            tracking-[0.14em]
            text-[var(--ink-muted)]
          "
        >
          © {year} Ali Jalili
        </p>

        {/* Back to top — the page is long, this gives a quick way up. */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="
            group
            inline-flex
            items-center
            gap-1.5
            font-mono
            text-[11px]
            uppercase
            tracking-[0.14em]
            text-[var(--ink-muted)]
            transition-colors
            duration-200
            hover:text-[var(--accent-strong)]
          "
        >
          Back to top
          <ArrowUp
            size={13}
            strokeWidth={1.6}
            aria-hidden="true"
            className="
              transition-transform
              duration-200
              group-hover:-translate-y-0.5
            "
          />
        </a>

        <p
          className="
            font-mono
            text-[11px]
            text-center
            uppercase
            tracking-[0.14em]
            text-[var(--ink-muted)]
          "
        >
          Built with React · TypeScript
        </p>
      </div>
    </footer>
  );
}

export default Footer;
