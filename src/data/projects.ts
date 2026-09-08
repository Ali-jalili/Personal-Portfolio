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
      "A developer workflow workspace for organizing API context, collections, and environments.",

    overview:
      "DevDesk is a developer workspace designed to keep API development information organized in one place, helping developers manage requests, collections, environments, and project context.",

    problem:
      "During development, API information can become scattered across different tools, files, and notes. DevDesk focuses on creating a more structured workflow for managing that context.",

    focus: [
      "Workspace-based application architecture",
      "Type-safe data flow with TypeScript",
      "Server state management with TanStack Query",
      "Authentication and protected resources",
      "Reusable React component architecture",
      "Supabase database modeling and security",
    ],

    features: [
      "Authentication and protected workspaces",
      "API collections and request organization",
      "Environment management",
      "Project context management",
      "User-specific workspace data",
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
      "A dynamic form builder with drag-and-drop editing, live preview, and publishing workflow.",

    overview:
      "FormFlow is a full-stack form builder that allows users to create custom forms using reusable fields, preview changes instantly, and publish forms for public responses.",

    problem:
      "Creating and modifying forms often requires writing custom code. FormFlow explores a flexible way to build and manage forms through an interactive interface.",

    focus: [
      "Dynamic component architecture",
      "Complex client-side state management",
      "Reusable form field system design",
      "Real-time preview workflow",
      "Server state synchronization",
      "Data validation and publishing flow",
    ],

    features: [
      "Drag-and-drop field management",
      "Reusable form field components",
      "Live preview while editing",
      "Draft and publish workflow",
      "Public form submission",
      "Database-backed form storage",
    ],

    technologies: ["React", "Supabase", "TanStack Query", "Tailwind CSS"],

    githubUrl: "https://github.com/Ali-jalili/FormFlow",

    liveUrl: "https://form-flow-fawn.vercel.app/",

    image: formflowImage,

    featured: true,
  },

  {
    id: "nexusos",

    title: "NexusOS",

    description:
      "An agency management platform with role-based dashboards and project lifecycle management.",

    overview:
      "NexusOS is a multi-role platform designed for managing agency workflows, connecting admins, clients, and developers through a centralized system.",

    problem:
      "Agency workflows often require managing different users, projects, and communication flows. NexusOS explores how these processes can be organized inside one application.",

    focus: [
      "Role-based application architecture",
      "Authentication and authorization flows",
      "Protected routes and access control",
      "Dashboard-driven user experiences",
      "Relational data modeling with Supabase",
      "Server state and data synchronization",
    ],

    features: [
      "Multiple user roles",
      "Project lifecycle tracking",
      "Protected routes and role guards",
      "Supabase authentication and RLS",
      "Developer and client dashboards",
      "Interactive project analytics",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Supabase",
      "TanStack Query",
      "CSS Modules",
    ],

    githubUrl: "https://github.com/Ali-jalili/NexusOS-Platform",

    liveUrl: "https://nexus-os-dashboard-seven.vercel.app/",

    image: nexusosImage,

    featured: false,
  },
];
