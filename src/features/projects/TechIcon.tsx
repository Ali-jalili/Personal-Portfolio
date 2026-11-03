/** @format */

import { Braces, Database, Layers, Layout, Server, Zap } from "lucide-react";

export default function TechIcon({ name }: { name: string }) {
  const iconProps = { size: 12, className: "text-[var(--ink-faint)]" };

  if (name.includes("React") || name.includes("Next"))
    return <Layers {...iconProps} />;
  if (name.includes("TypeScript")) return <Braces {...iconProps} />;
  if (
    name.includes("Supabase") ||
    name.includes("PostgreSQL") ||
    name.includes("MySQL")
  )
    return <Database {...iconProps} />;
  if (name.includes("Query")) return <Zap {...iconProps} />;
  if (name.includes("Node") || name.includes("Server"))
    return <Server {...iconProps} />;

  return <Layout {...iconProps} />;
}
