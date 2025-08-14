import { useI18n } from '../i18n/I18nProvider'

export function Hero() {
  const { t } = useI18n()
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            {t('hero.badge')}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 text-lg leading-7 text-white/80">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400">
              {t('hero.ctaProjects')}
            </a>
            <a href="#about" className="rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              {t('hero.ctaAbout')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}