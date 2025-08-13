export function About() {
  return (
    <section id="about" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        </header>
        <div className="space-y-4 text-white/85">
          <p>
            I’m Kim Salihu, a frontend-leaning developer who enjoys turning complex ideas into fast,
            accessible experiences. I care about clean architecture, strong typing, and excellent developer experience.
          </p>
          <p>
            My toolkit includes React, TypeScript, Vite, and Tailwind. I focus on readable code, testing discipline,
            and design informed by real user feedback.
          </p>
          <p>
            Let’s build something great.
          </p>
        </div>
      </div>
    </section>
  )
}
