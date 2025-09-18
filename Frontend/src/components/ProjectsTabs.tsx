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
            <VimeoEmbed videoUrl="https://vimeo.com/709398946?cjdata=MXxZfDB8WXww&turnstile=0.
                                  FzDRMCgc0O46kVuUnmtZAHuxa4XStwhBLLCaq924WWsJSiYqb5WQODcmgw1YrsljRfFl0ZU-h8cjDWsYmHW2
                                  KBiS18Mj8IWA61LY6COQEOnvmcsAzddaBMRQQuxd4uJjQUVbaMgJL7QKkAezVA-xaToplKBo5QoDUbCRc4516BNZe89uXZzrAc1zsbaLut7d
                                  VwTZDpJkskEFAUDSVwXfS36UfRv-wHlPdgWq3drPmcjHv7MkSDyx9GwTNuMUpkfqJ0ETItyzNb-T-5IKbwPdY3gJMguM_pOqlyKNeXV2leuq
                                  Q9qegzz8jKIZGTQ14ZQLTwEC35rexHhdtF7x_nwgDKS4ao0z2PQxfsUl2ZHW43gGeVpalb--D26Q0YarT9vdx74U8v6pfIwxs5ULT4ykE5fJ
                                  3kAELBAait2oMVO89fde9ARK_ZVVZIz_bE1O_J_oDgR5GoP5Adi2adlSj5WRKn7FbIElLL1rvF7ULbxEu3j3jtVG9F4tH1lE8eOm5cp3GJl7
                                  t-vAkDw_BtSqwz9f_RjU9-b3RJxMEuG63_d6noKTbVl-OdW1QoN40JjQi17yhEjYlIEghfBxWowRq0iPg2w9GEGsfyyr4dqgNLP61_ygi027
                                  b_u6qxcN6CX3EwCQVnyWXeQ1C6nuS6z8xxRJBHdseYsyhE91kVHWlm_YDLDFJgIcnWfY8v1LVItNTacT6PiLI1yQbBdJNlixtZOwDHtv9JKL
                                  H4B27BnJlg8OLKgs2GJ-TwZdLsxwB2KstU0Vdq0Ta4p746VZLMAFpIhXEy1zYEOUTv5W8cUjRqqH4eh8_UW6aqKoxWWpCbxu4YmF_M3Nx9CB
                                  q__0ME57bZp79wssTcS76yyrR8RVjPqnW7vM2PUOXW4p1ExjRhdVAGffNviYrmO7oXoKdqP1HaAd2w.A7sjA2GVao1QSjUj898KqA.fcda2a
                                  457c2c37325edd56117105ffcbd057d7eb88fb18b5b71798a2790fe46f&utm_campaign=2917105&utm_source=affiliate&utm_cha
                                  nnel=affiliate&cjevent=fda469b6946b11f082c6003e0a18b8fa&clickid=fda469b6946b11f082c6003e0a18b8fa" />
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
