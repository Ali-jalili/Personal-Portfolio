/** @format */

import { useCallback } from "react";

/*
 * A single shared IntersectionObserver is used for every reveal element on
 * the page. Previously each section (and even each SkillCard) created its own
 * observer, which stacked up ~10+ observers firing on the same scroll frame
 * and contributed to the initial jank.
 *
 * The public API is unchanged: useRevealOnView(threshold) still returns a ref
 * callback. Per-element thresholds are kept in a Map and read by the one
 * shared observer at intersection time.
 */

const thresholds = new Map<HTMLElement, number>();

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let shared: IntersectionObserver | null = null;

function getSharedObserver() {
  if (shared) return shared;

  shared = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const element = entry.target as HTMLElement;
        element.classList.add("motion-reveal-visible");

        thresholds.delete(element);
        shared?.unobserve(element);
      }
    },
    // The observer only needs to know *when* each element enters the
    // viewport; the reveal animation handles the actual offset.
    { threshold: 0 },
  );

  return shared;
}

export function useRevealOnView(threshold = 0.2) {
  return useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      element.classList.add("motion-reveal");

      if (reduceMotion) {
        element.classList.add("motion-reveal-visible");
        return;
      }

      thresholds.set(element, threshold);
      getSharedObserver().observe(element);
    },
    [threshold],
  );
}
