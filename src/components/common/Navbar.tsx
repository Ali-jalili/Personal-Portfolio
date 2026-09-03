/** @format */

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          Ali Jalili
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <a
          href="#contact"
          className="rounded-xl bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
