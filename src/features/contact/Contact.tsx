/** @format */

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-medium text-indigo-400">Contact</p>

          <h2 className="mt-3 text-4xl font-bold">Let's connect</h2>

          <p className="mt-4 max-w-xl text-gray-400">
            I am open to frontend opportunities and collaborations. Feel free to
            reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:your-email@example.com"
              className="rounded-xl bg-indigo-500 px-6 py-3 font-medium transition hover:bg-indigo-400"
            >
              Email
            </a>

            <a
              href="#"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
