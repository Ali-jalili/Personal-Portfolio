/** @format */
import devdeskImage from "../assets/projects/devdesk1.png";
import formflowImage from "../assets/projects/form1.png";
import nexusosImage from "../assets/projects/nexus.png";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "devdesk",
    title: "DevDesk",
    description:
      "A developer workflow workspace for managing API requests, collections, and environments.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
    image: devdeskImage,
    featured: true,
  },

  {
    id: "formflow",
    title: "FormFlow",
    description:
      "A dynamic form builder application with authentication, CRUD operations, and database integration.",
    technologies: ["React", "TypeScript", "React Query", "Supabase"],
    githubUrl: "",
    liveUrl: "",
    image: formflowImage,
    featured: true,
  },

  {
    id: "nexusos",
    title: "NexusOS",
    description:
      "An agency management platform for handling business workflows and data management.",
    technologies: ["React", "JavaScript", "Supabase"],
    githubUrl: "",
    liveUrl: "",
    image: nexusosImage,
    featured: false,
  },
];
