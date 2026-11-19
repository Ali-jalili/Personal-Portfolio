/** @format */

import { Suspense, lazy, type ReactNode } from "react";

/*
 * Below-the-fold sections are code-split into their own chunks so the
 * initial bundle stays small (hero + navbar + shared framer-motion).
 * React starts fetching each chunk as soon as its Suspense boundary
 * mounts, which happens in parallel with the hero animation — the
 * chunks are small enough (2–28KB) that this never causes jank.
 */

const About = lazy(() => import("../features/about/About"));
const Skills = lazy(() => import("../features/skills/Skills"));
const Projects = lazy(() => import("../features/projects/Projects"));
const HowIWork = lazy(() => import("../features/HowIWork/HowIWork"));
const Currently = lazy(() => import("../features/currently/Currently"));
const Resume = lazy(() => import("../features/resume/Resume"));
const Contact = lazy(() => import("../features/contact/Contact"));

function Section({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export const LazyAbout = () => (
  <Section>
    <About />
  </Section>
);

export const LazySkills = () => (
  <Section>
    <Skills />
  </Section>
);

export const LazyProjects = () => (
  <Section>
    <Projects />
  </Section>
);

export const LazyHowIWork = () => (
  <Section>
    <HowIWork />
  </Section>
);

export const LazyCurrently = () => (
  <Section>
    <Currently />
  </Section>
);

export const LazyResume = () => (
  <Section>
    <Resume />
  </Section>
);

export const LazyContact = () => (
  <Section>
    <Contact />
  </Section>
);
