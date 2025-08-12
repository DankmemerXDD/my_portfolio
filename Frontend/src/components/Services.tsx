export function Services() {
  const items = [
    {
      title: 'Frontend Engineering',
      desc: 'Accessible, performant UI with React, TypeScript, and Tailwind.',
      icon: '⚡',
    },
    {
      title: 'Architecture & DX',
      desc: 'Clean code, testing, tooling, and CI to keep teams moving fast.',
      icon: '🧭',
    },
    {
      title: 'Performance & UX',
      desc: 'Ship fast sites with great UX and Core Web Vitals.',
      icon: '🚀',
    },
  ]

  return (
    <section id="services" className="bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What I Do</h2>
          <p className="mt-2 text-white/70">Ways I can help your product succeed.</p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
