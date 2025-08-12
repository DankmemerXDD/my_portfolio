export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Built with React + Vite + Tailwind
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Building fast web experiences
          </h1>
          <p className="mt-5 text-lg leading-7 text-white/80">
            I craft performant, maintainable web apps with a focus on developer experience and user delight.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400">
              View Projects
            </a>
            <a href="#about" className="rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}