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
    features: [],
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
    features: [],
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
    features: [],
    technologies: ["React", "JavaScript", "Supabase"],
    githubUrl: "",
    liveUrl: "",
    image: nexusosImage,
    featured: false,
  },

  {
    id: "test-dashboard",
    title: "Test Dashboard",
    description:
      "Temporary project data for testing the second page of the project navigation.",
    features: [],
    technologies: ["React", "TypeScript"],
    githubUrl: "",
    liveUrl: "",
    image: devdeskImage,
    featured: false,
  },

  {
    id: "test-studio",
    title: "Test Studio",
    description:
      "Temporary project data for checking animated transitions between project pages.",
    features: [],
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
    image: formflowImage,
    featured: false,
  },

  {
    id: "test-portal",
    title: "Test Portal",
    description:
      "Temporary project data for verifying that each navigation step shows three projects.",
    features: [],
    technologies: ["React", "Supabase"],
    githubUrl: "",
    liveUrl: "",
    image: nexusosImage,
    featured: false,
  },
];
