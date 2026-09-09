/** @format */

import { Code2 } from "lucide-react";
import { useRevealOnView } from "../../hooks/useRevealOnView";

function CenterCore() {
  const revealRef = useRevealOnView();

  return (
    <div
      ref={revealRef}
      className="
        motion-reveal-core
        absolute
        left-1/2
        top-1/2
        z-10
        flex
        h-36
        w-36
        flex-col
        items-center
        justify-center
        rounded-full
        border
        border-[var(--line-strong)]
        bg-[var(--surface)]
        shadow-[0_25px_70px_rgba(20,24,40,0.08)]
        sm:h-40
        sm:w-40
      "
    >
      <div
        className="
        relative
        mb-3
        grid
        h-11
        w-11
        place-items-center
        rounded-xl
        bg-[var(--ink)]
        text-[var(--bg)]
      "
      >
        <Code2 size={21} strokeWidth={1.7} />

        <span
          className="
          absolute
          -right-1
          -top-1
          h-2
          w-2
          rounded-full
          bg-[var(--accent)]
        "
        />
      </div>

      <span
        className="
        font-display
        text-lg
        font-medium
        tracking-[-0.025em]
        text-[var(--ink)]
      "
      >
        Building
      </span>

      <span
        className="
        mt-1
        font-mono
        text-[8px]
        uppercase
        tracking-[0.16em]
        text-[var(--ink-faint)]
      "
      >
        Product Stack
      </span>
    </div>
  );
}

export default CenterCore;
