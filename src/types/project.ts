/** @format */

export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured?: boolean;
};
