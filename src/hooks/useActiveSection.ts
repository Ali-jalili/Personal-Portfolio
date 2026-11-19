/** @format */

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: "-28% 0px -62%",
        threshold: [0, 0.15, 0.5],
      },
    );

    const observeSections = () => {
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .forEach((section) => intersectionObserver.observe(section));
    };

    // Sections are lazy-loaded, so watch the DOM until their elements exist.
    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    observeSections();

    return () => {
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [sectionIds]);

  return [activeSection, setActiveSection] as const;
}
