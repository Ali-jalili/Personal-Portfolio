/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Terminal,
  Globe,
  GitBranch,
  CheckCircle2,
  Code2,
  Image as ImageIcon,
  ChevronDown,
  Layers,
  Sparkles,
} from "lucide-react";
import { projects } from "../../data/projects";

export default function ProjectsWorkspace() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [viewMode, setViewMode] = useState<"code" | "preview">("code");
  const [showDeepDive, setShowDeepDive] = useState(false);

  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  const handleProjectChange = (id: string) => {
    setActiveId(id);
    setShowDeepDive(false);
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">
            // System Architecture & Work
          </span>
          <h2 className="text-heading mt-2 text-[var(--ink)]">
            Featured Workspaces
          </h2>
        </div>

        {/* IDE / Workspace Container */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-xl overflow-hidden">
          {/* Top Bar (Traffic lights & Project Tabs) */}
          <div className="border-b border-[var(--line)] bg-[var(--surface-soft)]">
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>

              {/* Project Switcher Tabs */}
              <div className="flex flex-wrap gap-1.5">
                {projects.map((project) => {
                  const isActive = project.id === activeId;
                  return (
                    <button
                      key={project.id}
                      onClick={() => handleProjectChange(project.id)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs transition rounded-lg border ${
                        isActive
                          ? "border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] shadow-sm"
                          : "border-transparent text-[var(--ink-muted)] hover:bg-[var(--surface)]/50 hover:text-[var(--ink)]"
                      }`}
                    >
                      <Terminal
                        size={13}
                        className={
                          isActive
                            ? "text-[var(--accent-strong)]"
                            : "text-[var(--ink-faint)]"
                        }
                      />
                      <span>{project.title.toLowerCase()}.config.ts</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub-Header: Switch between Code View and Visual Preview */}
            <div className="flex items-center justify-between border-t border-[var(--line)] bg-[var(--surface)] px-6 py-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--ink-muted)]">
                <span className="text-[var(--accent-strong)]">workspace/</span>
                <span className="text-[var(--ink)]">
                  {activeProject.title.toLowerCase()}
                </span>
              </div>

              {/* Code vs Preview Toggle Buttons */}
              <div className="flex items-center rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] p-0.5">
                <button
                  onClick={() => setViewMode("code")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-mono text-xs transition ${
                    viewMode === "code"
                      ? "bg-[var(--surface)] text-[var(--ink)] shadow-sm border border-[var(--line)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <Code2 size={13} />
                  <span>Config</span>
                </button>

                <button
                  onClick={() => setViewMode("preview")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 font-mono text-xs transition ${
                    viewMode === "preview"
                      ? "bg-[var(--surface)] text-[var(--ink)] shadow-sm border border-[var(--line)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <ImageIcon size={13} />
                  <span>UI Preview</span>
                </button>
              </div>
            </div>
          </div>

          {/* Workspace Body Area */}
          <div className="min-h-[420px] p-6 md:p-8 relative bg-[var(--surface)]">
            <AnimatePresence mode="wait">
              {viewMode === "code" ? (
                /* --- CODE / CONFIG VIEW --- */
                <motion.div
                  key={`${activeProject.id}-code`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
                        {activeProject.title}
                      </h3>
                      <span className="rounded-md border border-[var(--line)] bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[10px] uppercase text-[var(--accent-strong)]">
                        Production Ready
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] max-w-3xl">
                      {activeProject.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-2">
                        // Stack Requirements
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-[var(--line)] bg-[var(--surface-soft)] px-2.5 py-1 font-mono text-[10px] text-[var(--ink-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deep Dive Expandable Toggle Button */}
                    <div className="mt-6 pt-4 border-t border-[var(--line)]">
                      <button
                        onClick={() => setShowDeepDive(!showDeepDive)}
                        className="flex items-center gap-2 font-mono text-xs text-[var(--accent-strong)] hover:underline focus:outline-none"
                      >
                        <Layers size={14} />
                        <span>
                          {showDeepDive
                            ? "// Hide Architecture & Features"
                            : "// View Architecture, Problem & Features"}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            showDeepDive ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Expandable Deep Dive Section */}
                      <AnimatePresence>
                        {showDeepDive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 grid md:grid-cols-3 gap-4 pt-2">
                              {/* Problem Solved */}
                              <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 flex flex-col justify-between">
                                <div>
                                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-1">
                                    // Core Challenge
                                  </span>
                                  <p className="text-xs leading-6 text-[var(--ink-muted)]">
                                    {activeProject.problem}
                                  </p>
                                </div>
                              </div>

                              {/* Architecture Focus Points */}
                              <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-2">
                                  // Architecture Focus
                                </span>
                                <div className="grid gap-1.5">
                                  {activeProject.focus
                                    .slice(0, 3)
                                    .map((item, idx) => (
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

                              {/* Key Features (Added here) */}
                              <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4">
                                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-faint)] block mb-2">
                                  // Key Features
                                </span>
                                <div className="grid gap-1.5">
                                  {activeProject.features
                                    .slice(0, 3)
                                    .map((feat, idx) => (
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-8 flex items-center gap-4 pt-6 border-t border-[var(--line)]">
                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs"
                      >
                        <GitBranch size={14} /> Source Code
                      </a>
                    )}
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs"
                      >
                        <Globe size={14} /> Live Workspace{" "}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
                /* --- VISUAL PREVIEW VIEW --- */
                <motion.div
                  key={`${activeProject.id}-preview`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <div className="w-full max-w-4xl relative rounded-xl overflow-hidden border border-[var(--line)] shadow-2xl bg-[var(--surface)]">
                    {/* Fake Browser Top Bar */}
                    <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2.5">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
                      </div>
                      <span className="font-mono text-xs text-[var(--ink-muted)]">
                        {activeProject.liveUrl}
                      </span>
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono text-[var(--accent-strong)] hover:underline"
                        >
                          <span>Visit</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>

                    {/* Full Size Image Container */}
                    <div className="w-full overflow-hidden bg-[var(--surface)] flex items-center justify-center p-2">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-auto max-h-[60vh] object-contain rounded-md"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
