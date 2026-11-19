/** @format */

import devdeskImage from "../assets/projects/devdesk1.webp";
import formflowImage from "../assets/projects/form1.webp";
import nexusosImage from "../assets/projects/nexus.webp";
import failstackImage from "../assets/projects/failstackImage.webp";

import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "failstack",

    title: "FailStack",

    description:
      "An incident postmortem platform for documenting failures, analyzing root causes, and publishing engineering lessons.",

    overview:
      "FailStack is an incident postmortem platform that helps engineers document software failures through structured reports, investigate root causes, track architecture changes, and publish reviewed engineering lessons. Ownership and reviewer access are enforced at the database layer with Supabase row-level security, while draft saves and submissions persist through atomic Postgres operations.",

    problem:
      "Incident reports can lack a consistent structure for documenting timelines, understanding root causes, and preserving lessons learned. FailStack provides a structured workflow for authoring, reviewing, and publishing incident postmortems, with role-scoped access so authors and reviewers only act on what they're permitted to.",

    focus: [
      "Feature-based Next.js application architecture",
      "Multi-step form design and schema validation",
      "Structured incident data modeling with TypeScript",
      "Client-side and server-side validation",
      "Draft, review, and publication workflow design",
      "Idempotent handling of incident submissions",
      "Row Level Security for report ownership and reviewer access",
      "Atomic draft and submission persistence with PostgreSQL RPCs",
    ],

    features: [
      "Six-step incident report authoring",
      "Structured incident timelines and root-cause trees",
      "Architecture change documentation and prevention action tracking",
      "Draft saving and report resubmission",
      "Reviewer feedback and publication workflow",
      "Public incident archive with search and filters",
      "Database-level data isolation using Row Level Security",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase (Auth, RLS, PostgreSQL)",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Vitest",
    ],

    githubUrl: "https://github.com/Ali-jalili/FailStack",

    liveUrl: "https://failstack.vercel.app/",

    image: failstackImage,

    featured: true,
  },

  {
    id: "devdesk",
    title: "DevDesk",

    description:
      "A browser-based API workspace for organizing endpoint documentation, managing environment-aware requests, and inspecting live responses.",

    overview:
      "DevDesk organizes API work into workspaces, collections, and documented requests. Atlas surfaces endpoint activity and documentation gaps, while the request runner resolves active environment variables, validates HTTP(S) URLs, executes requests, and displays response details.",

    problem:
      "API definitions, environment configuration, and endpoint notes can drift across tools and files. DevDesk keeps request configuration, examples, and documentation together in the collection that owns each endpoint, so developers can reuse project context and execute requests from the browser.",

    focus: [
      "Feature-oriented React architecture with lazy-loaded routes and domain-specific modules",
      "Type-safe request workflows with shared create/edit forms and schema validation",
      "Environment-aware request preparation, URL validation, and cURL import",
      "Supabase Auth, relational PostgreSQL modeling, owner-scoped RLS, and cascading relationships",
      "TanStack Query server-state synchronization and workspace-scoped cache lifecycle",
      "Automated unit and component testing with Vitest and Testing Library, integrated into CI",
    ],

    features: [
      "Protected authentication flows and user-owned workspaces",
      "Workspace → collection → request organization, with descriptions, examples, and notes",
      "HTTP request authoring for GET, HEAD, POST, PUT, PATCH, and DELETE",
      "Active environments with {{variable}} interpolation across request fields",
      "Atlas endpoint map with recent activity, documentation coverage, and setup gaps",
      "Common cURL import into prefilled request forms",
      "Browser-based response inspection for status, headers, body, duration, and size",
    ],

    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "TanStack Query",
      "Supabase Auth",
      "PostgreSQL",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Vite",
      "Vitest",
      "Testing Library",
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
      "A full-stack form platform for building, publishing, and managing forms—with a drag-and-drop editor, live preview, secure submissions, and a searchable response inbox.",

    overview:
      "FormFlow is a full-stack web application for creating and publishing forms without writing custom form code. It combines a visual builder, recoverable drafts, validated public submissions, and a searchable, paginated response dashboard. Form saves and submissions use PostgreSQL RPCs, with Row Level Security protecting account and form data.",

    problem:
      "Creating and maintaining forms often means building custom interfaces and validation from scratch. FormFlow provides a visual workflow for form creators while enforcing data ownership, submission rules, and persistence at the database layer.",

    focus: [
      "Feature-based React architecture and reusable components",
      "Drag-and-drop form editing with React Hook Form",
      "Live preview and recoverable client-side drafts",
      "Server-state synchronization and cache management with TanStack Query",
      "Atomic form persistence and server-side validation with PostgreSQL RPCs",
      "Row Level Security and scoped public access",
      "Server-side response search, pagination, and safe CSV export",
      "Automated testing and CI workflows",
    ],

    features: [
      "Authenticated workspaces for managing forms",
      "Visual builder for short-text, long-text, and multiple-choice fields",
      "Reorderable fields, required-field settings, and live preview",
      "Draft and publish workflow with stable public links",
      "Public submissions with server-side validation",
      "Database-level data isolation using Row Level Security",
      "Searchable, paginated response inbox",
      "CSV export with spreadsheet formula-injection protection",
    ],

    technologies: [
      "React 19",
      "JavaScript",
      "Supabase Auth",
      "PostgreSQL",
      "TanStack Query",
      "React Hook Form",
      "Tailwind CSS",
      "dnd-kit",
      "Vite",
      "Vitest",
      "GitHub Actions",
    ],

    githubUrl: "https://github.com/Ali-jalili/FormFlow",

    liveUrl: "https://form-flow-fawn.vercel.app/",

    image: formflowImage,

    featured: true,
  },

  {
    id: "nexusos",

    title: "NexusOS",

    description:
      "A multi-role agency-management SaaS where admins, clients, and developers collaborate on one dashboard — secured at the database layer with row-level security.",

    overview:
      "NexusOS is a SaaS platform for running an end-to-end agency operation: clients submit and manage project requests, admins approve, assign, and track them, and developers get a read-only view of their own work. Each role lives in its own portal, and access is enforced not just in the UI but in the database via Supabase row-level security, a server-injected custom JWT claim, and atomic Postgres functions — so the authorization model can't be bypassed from the client.",

    problem:
      "Agencies juggle many moving parts — client intake, approvals, resource allocation, progress tracking, and hiring — usually across disconnected tools. NexusOS unifies them into a single system of record, with role-scoped access so every person only sees and can act on what they're allowed to.",

    focus: [
      "Role-based architecture: three guarded portals (Admin / Client / Developer)",
      "Database-level authorization: 16 row-level-security policies driven by a server-injected custom JWT claim",
      "Atomic multi-table operations: request approval runs as a single Postgres RPC transaction",
      "Full request lifecycle: pending → approved / rejected, with client edit-and-resubmit",
      "Server-state management with TanStack Query (caching + cache invalidation)",
      "Production hardening: unit tests, a CI pipeline, a global error boundary, and bundle code-splitting",
    ],

    features: [
      "Dedicated dashboards for Admin, Client, and Developer roles",
      "Request lifecycle with approval, rejection reasons, and resubmission",
      "Project assignment, progress tracking, and visual analytics (Recharts)",
      "Supabase Auth with role-based access and row-level security",
      "A read-only developer portal that keeps the admin the single source of truth",
      "A developer-candidate recruitment pipeline",
    ],

    technologies: [
      "React 19",
      "Vite",
      "Supabase (Postgres, Auth, RLS, RPC)",
      "TanStack React Query",
      "React Router",
      "Recharts + Framer Motion",
      "CSS Modules",
      "Vitest + GitHub Actions CI",
    ],

    githubUrl: "https://github.com/Ali-jalili/NexusOS-Platform",

    liveUrl: "https://nexus-os-dashboard-seven.vercel.app/",

    image: nexusosImage,

    featured: false,
  },
];
