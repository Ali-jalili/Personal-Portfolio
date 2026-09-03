/** @format */

function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="mb-4 text-sm text-indigo-400">Frontend Developer</p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Building modern web applications with React and TypeScript
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          I build scalable and user-focused web applications using modern
          frontend technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-indigo-500 px-6 py-3 font-medium transition hover:bg-indigo-400"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
