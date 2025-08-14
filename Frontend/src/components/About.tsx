import { useI18n } from '../i18n/I18nProvider'

export function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('about.title')}</h2>
        </header>
        <div className="space-y-4 text-white/85">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.degrees')}</p>
          <p>{t('about.p3')}</p>
          <div className="pt-2">
            <a
              href="https://tinyurl.com/KimShowreel"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              {t('about.showreel')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
