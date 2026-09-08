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
          gap-2
          sm:flex-row
        "
      >
        <p
          className="
            font-mono
            text-[11px]
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
            uppercase
            tracking-[0.14em]
            text-[var(--ink-faint)]
          "
        >
          Designed & built with React · TypeScript
        </p>
      </div>
    </footer>
  );
}

export default Footer;
