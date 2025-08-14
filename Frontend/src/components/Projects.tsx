import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { useI18n } from '../i18n/I18nProvider'

export function Projects() {
  const { t } = useI18n()
  return (
    <section id="projects" className="relative bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('projects.title')}</h2>
          <p className="mt-2 text-white/70">{t('projects.subtitle')}</p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}