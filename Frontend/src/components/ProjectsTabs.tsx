import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { chefItems } from '../data/chef'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { VimeoEmbed } from './VimeoEmbed'

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm ${active ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}
    >
      {children}
    </button>
  )
}

export function ProjectsTabs() {
  const { t } = useI18n()
  const [tab, setTab] = useState<'chef' | 'vfx' | 'cs'>('cs')

  return (
    <section id="projects" className="relative bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('projects.title')}</h2>
          <p className="mt-2 text-white/70">{t('projects.subtitle')}</p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2">
          <TabButton active={tab === 'chef'} onClick={() => setTab('chef')}>{t('projects.tabs.chef')}</TabButton>
          <TabButton active={tab === 'vfx'} onClick={() => setTab('vfx')}>{t('projects.tabs.vfx')}</TabButton>
          <TabButton active={tab === 'cs'} onClick={() => setTab('cs')}>{t('projects.tabs.cs')}</TabButton>
        </div>

        {tab === 'chef' && (
          <div>
            <p className="mb-6 text-white/70">{t('projects.chef.subtitle')}</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {chefItems.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                  <div className="aspect-video overflow-hidden bg-black/20">
                    <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {tab === 'vfx' && (
          <div>
            <p className="mb-6 text-white/70">{t('projects.vfx.subtitle')}</p>
            <VimeoEmbed videoUrl="https://tinyurl.com/KimShowreel" />
          </div>
        )}

        {tab === 'cs' && (
          <div>
            <p className="mb-6 text-white/70">{t('projects.cs.subtitle')}</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
