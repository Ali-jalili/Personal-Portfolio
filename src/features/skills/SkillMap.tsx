/** @format */

import SkillCard from "./SkillCard";
import CenterCore from "./CenterCore";
import SkillConnections from "./SkillConnections";
import { skills } from "./skills.data";

function SkillMap() {
  return (
    <>
      {/* Desktop Skill Map */}
      <div className="relative mx-auto mt-14 hidden h-[500px] max-w-[980px] md:block lg:h-[540px]">
        {/* Grid */}
        <div
          aria-hidden="true"
          className="
            grid-bg
            pointer-events-none
            absolute
            inset-x-[8%]
            inset-y-[4%]
            opacity-30
            [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_78%)]
          "
        />

        {/* Glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-64
            w-64
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            opacity-25
            blur-[90px]
          "
          style={{
            background:
              "radial-gradient(circle, var(--accent-glow), transparent 70%)",
          }}
        />

        <SkillConnections />

        <CenterCore />

        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      {/* Mobile Skill Map */}
      <div className="mt-12 md:hidden">
        <div className="relative mx-auto mb-10 h-40 w-full max-w-sm">
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-36
              w-36
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              opacity-25
              blur-[70px]
            "
            style={{
              background:
                "radial-gradient(circle, var(--accent-glow), transparent 70%)",
            }}
          />

          <CenterCore />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} mobile />
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillMap;
