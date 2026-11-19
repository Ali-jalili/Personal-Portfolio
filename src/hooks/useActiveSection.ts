/** @format */

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.32;
      const active = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .map((section) => ({ section, rect: section.getBoundingClientRect() }))
        .filter(({ rect }) => rect.top <= marker && rect.bottom > marker)
        .sort((a, b) => b.rect.top - a.rect.top)[0]?.section.id;

      // Hero and Contact are intentionally not in the navItems list, so the
      // indicator disappears while the user is in either boundary section.
      setActiveSection(active ?? null);
    };

    // Sections are lazy-loaded, so re-check when their elements appear.
    const mutationObserver = new MutationObserver(updateActiveSection);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      mutationObserver.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return [activeSection, setActiveSection] as const;
}
