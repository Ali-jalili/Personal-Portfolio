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
      "A developer workflow workspace for organizing API requests, collections, environments, and project context in one place.",
    features: [
      "Authentication and protected routes",
      "Workspace and collection management",
      "API request organization",
      "Environment management",
      "Workflow-focused dashboard",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
      "React Router",
    ],
    githubUrl: "https://github.com/Ali-jalili/DevDesk",
    liveUrl: "https://devdesk-omega.vercel.app/",
    image: devdeskImage,
    featured: true,
  },

  {
    id: "formflow",
    title: "FormFlow",
    description:
      "Full-stack form builder with drag-and-drop fields, live preview, and draft/publish workflow.",
    features: [
      "Drag-and-drop field reordering",
      "Live preview while editing",
      "Multiple field types",
      "Draft and publish workflow",
      "Public form submission",
      "Row Level Security",
    ],
    technologies: ["React", "React Query", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/Ali-jalili/FormFlow",
    liveUrl: "https://form-flow-fawn.vercel.app/",
    image: formflowImage,
    featured: true,
  },

  {
    id: "nexusos",
    title: "NexusOS",
    description:
      "Full-stack agency management platform with React and Supabase. Role-based dashboards for admins, clients, and developers, plus complete project lifecycle tracking.",
    features: [
      "Multi-role access (Admin, Client, Developer)",
      "Full project lifecycle from request to delivery",
      "Protected routes and role guards",
      "Supabase authentication and RLS policies",
      "React Query for server state and caching",
      "Responsive UI with interactive charts",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Supabase",
      "TanStack React Query",
      "CSS Modules",
      "Row Level Security",
    ],
    githubUrl: "https://github.com/Ali-jalili/NexusOS-Platform",
    liveUrl: "https://nexus-os-dashboard-seven.vercel.app/",
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
