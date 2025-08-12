import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'
import { Footer } from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-dvh bg-gray-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
      </main>
      <Footer />
    </div>
  )
}
