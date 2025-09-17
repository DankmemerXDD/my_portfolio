import { useI18n } from '../i18n/I18nProvider'
import { motion } from 'framer-motion'
import { ParticlesBackground } from './ParticlesBackground'

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export function Services() {
  const { t } = useI18n()
  const items = [
    { title: t('services.frontend.title'), desc: t('services.frontend.desc'), icon: '⚡' },
    { title: t('services.arch.title'), desc: t('services.arch.desc'), icon: '🧭' },
    { title: t('services.ux.title'), desc: t('services.ux.desc'), icon: '🚀' },
  ]

  return (
    <section id="services" className="relative bg-gray-950 py-20 text-white">
      <ParticlesBackground type="bubbles" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('services.title')}</h2>
          <p className="mt-2 text-white/70">{t('services.subtitle')}</p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              variants={serviceVariants}
              initial="hidden"
              whileInView="show"
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
