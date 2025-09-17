import { useI18n } from '../i18n/I18nProvider'
import { motion } from 'framer-motion'
import { ParticlesBackground } from './ParticlesBackground' // 👈 viktig import

export function Hero() {
  const { t } = useI18n()
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 py-24 text-white"
    >
      {/* Bakgrunn med meteorer */}
      <ParticlesBackground type="meteors" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            {t('hero.badge')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-5 text-lg leading-7 text-white/80"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              {t('hero.ctaProjects')}
            </a>
            <a
              href="#about"
              className="rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {t('hero.ctaAbout')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
