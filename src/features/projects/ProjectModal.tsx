/** @format */
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  X,
  CheckCircle2,
  Sparkles,
  GitBranch,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import type { Project } from "../../types/project";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <>
      {/* 
        ۱. z-[9999] باعث می‌شود ۱۰۰٪ بالای نوبار بیفتد.
        ۲. overflow-hidden روی ظرف بیرونی مانع از اسکرول خوردن لایه‌ی تاریک می‌شود.
        ۳. flex items-center justify-center مودال را دقیقا وسط صفحه نگه می‌دارد.
      */}
      <div
        onClick={onClose}
        style={{ transform: "translateZ(0)" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-md overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          style={{ willChange: "opacity, transform" }}
          /* 
            max-h-[85vh] و overflow-y-auto اسکرول را فقط به داخلِ باکسِ مودال محدود می‌کند.
          */
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-6 md:p-8 shadow-2xl"
        >
          {/* Close Button - کاملا شناور روی محتوای داخلی مودال */}
          <button
            onClick={onClose}
            className="sticky top-0 float-right z-30 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] p-2 text-[var(--ink-muted)] hover:text-[var(--ink)] shadow-md transition"
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pr-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              // Case Study & Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--ink)] mt-1">
              {project.title}
            </h2>
            <p className="text-sm text-[var(--ink-muted)] mt-2 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Grid Information */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-1">
                  // Core Challenge
                </span>
                <p className="text-xs leading-6 text-[var(--ink-muted)]">
                  {project.problem}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-2">
                // Engineering Focus
              </span>
              <div className="grid gap-2">
                {project.focus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[var(--ink-muted)]"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-[var(--ok)] shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-2">
                // Key Features
              </span>
              <div className="grid gap-2">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[var(--ink-muted)]"
                  >
                    <Sparkles
                      size={13}
                      className="text-[var(--accent-strong)] shrink-0 mt-0.5"
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-2">
              // Technologies Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 font-mono text-xs text-[var(--ink-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-6 border-t border-[var(--line)]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                <GitBranch size={14} /> Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <Globe size={14} /> Live Workspace <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>,
    document.body,
  );
}
