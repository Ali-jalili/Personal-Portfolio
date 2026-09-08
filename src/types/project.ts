/** @format */

export type Project = {
  id: string;
  title: string;

  description: string;

  overview: string;
  problem: string;

  focus: string[];
  features: string[];

  technologies: string[];

  githubUrl?: string;
  liveUrl?: string;

  image?: string;
  featured?: boolean;
};
