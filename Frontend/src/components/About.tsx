import { useI18n } from '../i18n/I18nProvider'
import { motion } from 'framer-motion'
import { ParticlesBackground } from './ParticlesBackground'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="relative bg-gray-900 py-20 text-white">
      <ParticlesBackground type="stars" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <header className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('about.title')}</h2>
        </header>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 text-white/85"
        >
          <motion.p variants={item}>{t('about.p1')}</motion.p>
          <motion.p variants={item}>{t('about.p2')}</motion.p>
          <motion.p variants={item}>{t('about.degrees')}</motion.p>
          <motion.p variants={item}>{t('about.p3')}</motion.p>
          <motion.div variants={item} className="pt-2">
            <a
              href="https://tinyurl.com/KimShowreel"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              {t('about.showreel')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
