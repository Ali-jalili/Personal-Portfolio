/** @format */

const journeyItems = [
  {
    title: "Frontend Development Journey",
    description:
      "Started building modern web applications and improving problem-solving through real projects.",
  },
  {
    title: "NexusOS",
    description:
      "Built an agency management platform and learned about authentication, databases, and full product workflows.",
  },
  {
    title: "FormFlow",
    description:
      "Built a dynamic form builder while improving architecture, state management, and data flow decisions.",
  },
  {
    title: "DevDesk",
    description:
      "Created a developer workflow workspace focused on practical tooling and product experience.",
  },
];

function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-indigo-400">Journey</p>

          <h2 className="mt-2 text-4xl font-bold">My development path</h2>
        </div>

        <div className="mt-12 space-y-6">
          {journeyItems.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex gap-4">
                <span className="text-indigo-400">0{index + 1}</span>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
