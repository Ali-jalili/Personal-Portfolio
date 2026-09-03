/** @format */

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "TanStack React Query",
    ],
  },
  {
    title: "Backend & Data",
    skills: ["Supabase", "PostgreSQL", "Authentication", "Database Design"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-indigo-400">Skills</p>

          <h2 className="mt-2 text-4xl font-bold">Technologies I work with</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
