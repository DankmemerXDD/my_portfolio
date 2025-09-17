import type { Project } from '../data/projects'
import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n()
  const { title, description, tags, image, demoUrl, repoUrl } = project
  const [open, setOpen] = useState(false)
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm"
    >
      {image && (
        <div className="mb-3 aspect-video overflow-hidden rounded-xl bg-black/20">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/80 line-clamp-3">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-400"
          >
            {t('projects.demo')}
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/0 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t('projects.source')}
          </a>
        )}
        <button
          className="ml-auto rounded-lg border border-white/20 bg-white/0 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t('projects.less') : t('projects.more')}
        </button>
      </div>
      {open && (
        <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/80">
          {description}
        </div>
      )}
    </motion.article>
  )
}
