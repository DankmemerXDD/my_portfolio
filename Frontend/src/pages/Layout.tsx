import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'
import { Footer } from '../components/Footer'
import { I18nProvider } from '../i18n/I18nProvider'

export default function Layout() {
  return (
    <I18nProvider>
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
    </I18nProvider>
  )
}
