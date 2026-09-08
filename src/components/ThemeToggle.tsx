/** @format */

import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        grid
        h-9
        w-9
        place-items-center
        rounded-full
        border
        border-[var(--line)]
        bg-[var(--surface)]
        text-[var(--ink-muted)]
        transition-all
        duration-300
        hover:border-[var(--line-strong)]
        hover:text-[var(--ink)]
      "
    >
      {theme === "dark" ? (
        <Sun size={16} strokeWidth={1.6} />
      ) : (
        <Moon size={16} strokeWidth={1.6} />
      )}
    </button>
  );
}

export default ThemeToggle;
