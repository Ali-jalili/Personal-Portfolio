/** @format */

import {
  Code2,
  Database,
  GitBranch,
  Layers3,
  Palette,
  Server,
  Terminal,
  Workflow,
  Boxes,
} from "lucide-react";

export const skills = [
  {
    name: "React",
    category: "Core",
    icon: Code2,
    position: "left-[2%] top-[11%]",
  },
  {
    name: "Next.js",
    category: "Core",
    icon: Boxes,
    position: "left-[54%] top-[4%]",
  },
  {
    name: "TypeScript",
    category: "Core",
    icon: Terminal,
    position: "left-[27%] top-[2%]",
  },
  {
    name: "JavaScript",
    category: "Core",
    icon: Layers3,
    position: "right-[-1%] top-[43%]",
  },
  {
    name: "Tailwind CSS",
    category: "UI & Styling",
    icon: Palette,
    position: "right-[5%] top-[11%]",
  },
  {
    name: "Supabase",
    category: "Data & Backend",
    icon: Server,
    position: "right-[8%] bottom-[10%]",
  },
  {
    name: "PostgreSQL",
    category: "Data & Backend",
    icon: Database,
    position: "left-[27%] bottom-[2%]",
  },
  {
    name: "Git / GitHub",
    category: "Development",
    icon: GitBranch,
    position: "left-[1%] bottom-[11%]",
  },
  {
    name: "Vite",
    category: "Development",
    icon: Workflow,
    position: "left-[-1%] top-[43%]",
  },
];
