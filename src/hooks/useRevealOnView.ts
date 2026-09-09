/** @format */

import { useCallback } from "react";

export function useRevealOnView(threshold = 0.2) {
  return useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      element.classList.add("motion-reveal");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        element.classList.add("motion-reveal-visible");
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          element.classList.add("motion-reveal-visible");
          observer.unobserve(element);
          observer.disconnect();
        },
        { threshold },
      );

      observer.observe(element);
    },
    [threshold],
  );
}
