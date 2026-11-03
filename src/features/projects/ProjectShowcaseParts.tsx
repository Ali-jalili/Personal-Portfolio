/** @format */

import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import { SHOT_AR } from "./projectShowcaseStyles";
import TechIcon from "./TechIcon";

export function TechPills({
  technologies,
  limit,
}: {
  technologies: Project["technologies"];
  limit: number;
}) {
  const extra = technologies.length - limit;

  return (
    <div className="flex flex-wrap gap-1.5">
      {technologies.slice(0, limit).map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-[11px] font-medium text-[var(--ink-muted)] shadow-sm"
        >
          <TechIcon name={tech} />
          {tech}
        </span>
      ))}

      {extra > 0 && (
        <span className="inline-flex items-center rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-1 text-[11px] font-medium text-[var(--ink-faint)]">
          +{extra}
        </span>
      )}
    </div>
  );
}

export function DetailsButton({
  onClick,
  compact = false,
}: {
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--accent)] bg-[var(--surface)] font-medium text-[var(--accent-strong)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-white ${
        compact ? "px-3 py-1 text-[11px]" : "px-3.5 py-1.5 text-[12px]"
      }`}
    >
      <span>Architecture &amp; Details</span>
      <ArrowUpRight size={compact ? 12 : 13} />
    </button>
  );
}

export function ProductionBadge() {
  return (
    <span className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--accent-strong)]">
      Production
    </span>
  );
}

export function ScreenshotFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] ${className}`}
      style={{ aspectRatio: SHOT_AR }}
    >
      <img
        src={src}
        alt={alt}
        decoding="async"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
