/** @format */

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
        <p
          className="
            font-mono
            text-[11px]
            text-center
            uppercase
            tracking-[0.14em]
            text-[var(--ink-faint)]
          "
        >
          © {year} Ali Jalili
        </p>

        <p
          className="
            font-mono
            text-[11px]
            text-center
            uppercase
            tracking-[0.14em]
            text-[var(--ink-faint)]
          "
        >
          Designed & built with React · Next.js · TypeScript
        </p>
      </div>
    </footer>
  );
}

export default Footer;
