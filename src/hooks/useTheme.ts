/** @format */

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("theme") as Theme | null;

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "light";
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
