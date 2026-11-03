/** @format */

import type { PointerEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Project } from "../../types/project";
import {
  DetailsButton,
  ProductionBadge,
  ScreenshotFrame,
  TechPills,
} from "./ProjectShowcaseParts";
import { MAIN_SHADOW, SHOT_AR, titleFont } from "./projectShowcaseStyles";

const ease = [0.22, 1, 0.36, 1] as const;
const CARD_W = 72;
const BACK_AR = 1.62;
const PERSPECTIVE = "81cqw";
const PERSPECTIVE_ORIGIN = "28.5% calc(50% + 49.3cqw)";
const TILT = { x: -1, y: -6.7, z: 2.7 } as const;

const STACK = [
  { left: 41.0, width: 41.0, top: 40.5, rotateY: -7 },
  { left: 59.9, width: 32.5, top: 42.5, rotateY: -7.5 },
  { left: 72.8, width: 25.0, top: 43.5, rotateY: -8 },
] as const;

const BACK_SHADOW =
  "0 14px 28px rgba(16,24,40,0.11), 0 3px 9px rgba(16,24,40,0.05), 0 2px 5px rgba(16,24,40,0.06)";

interface LayeredProjectStageProps {
  active: Project;
  projects: Project[];
  reduced: boolean | null;
  onSelect: (id: string) => void;
  onOpen: (project: Project) => void;
}

export default function LayeredProjectStage({
  active,
  projects,
  reduced,
  onSelect,
  onOpen,
}: LayeredProjectStageProps) {
  const activeIndex = projects.findIndex((project) => project.id === active.id);
  const stack = Array.from(
    { length: Math.min(STACK.length, projects.length - 1) },
    (_, offset) => projects[(activeIndex + offset + 1) % projects.length],
  );

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 20 });
  const rotateX = useTransform(smoothY, (v) => TILT.x + v * -0.6);
  const rotateY = useTransform(smoothX, (v) => TILT.y + v * 0.6);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="[container-type:inline-size]">
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        className="relative py-[3.5cqw]"
        style={{
          perspective: PERSPECTIVE,
          perspectiveOrigin: PERSPECTIVE_ORIGIN,
        }}
      >
        {stack.map((project, i) => {
          const s = STACK[i];
          const pos = {
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.width}%`,
          };

          return (
            <motion.button
              key={project.id}
              type="button"
              aria-label={`Show ${project.title}`}
              onClick={() => onSelect(project.id)}
              initial={{ ...pos, opacity: 0, x: reduced ? 0 : 28 }}
              animate={{ ...pos, opacity: 1, x: 0 }}
              whileHover={reduced ? undefined : { x: 6 }}
              transition={{
                duration: reduced ? 0 : 0.55,
                ease,
                delay: reduced ? 0 : i * 0.04,
              }}
              style={{
                position: "absolute",
                zIndex: 4 - i,
                aspectRatio: BACK_AR,
                y: "-50%",
                rotateX: TILT.x,
                rotateY: s.rotateY,
                rotateZ: TILT.z,
              }}
              className="block cursor-pointer rounded-[24px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span
                className="block h-full overflow-hidden rounded-[24px] border border-[var(--line-strong)] bg-[var(--surface)] p-[6px]"
                style={{ boxShadow: BACK_SHADOW }}
              >
                <span
                  className="block overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--surface)]"
                  style={{ aspectRatio: SHOT_AR }}
                >
                  <img
                    src={project.image ?? ""}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </span>
              </span>
            </motion.button>
          );
        })}

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={active.id}
            initial={
              reduced ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.97 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduced ? 0 : 0.45, ease }}
            style={{
              position: "relative",
              zIndex: 10,
              width: `${CARD_W}%`,
              rotateX,
              rotateY,
              rotateZ: TILT.z,
              transformOrigin: "center center",
            }}
          >
            <div
              className="overflow-hidden rounded-[28px] border border-[var(--line-strong)] bg-[var(--surface)]"
              style={{ boxShadow: MAIN_SHADOW }}
            >
              <div className="px-3.5 pb-2.5 pt-3.5">
                <ScreenshotFrame
                  src={active.image ?? ""}
                  alt={`${active.title} interface`}
                  className="w-full"
                />
              </div>

              <div className="px-[18px] pb-5 pt-0.5">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <div className="flex items-center gap-2">
                    <h3
                      style={titleFont}
                      className="text-[26px] leading-none text-[var(--ink)]"
                    >
                      {active.title}
                    </h3>
                    <ProductionBadge />
                  </div>

                  <DetailsButton compact onClick={() => onOpen(active)} />
                </div>

                <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-[var(--ink-muted)]">
                  {active.description}
                </p>

                <div className="mt-2.5">
                  <TechPills technologies={active.technologies} limit={3} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
