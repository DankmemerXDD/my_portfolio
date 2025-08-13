import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, image, demoUrl, repoUrl } = project
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition hover:translate-y-[-2px] hover:shadow-xl">
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
      <p className="mt-2 text-sm text-white/80">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
            {tag}
          </li>
        ))}
      </ul>
      {(demoUrl || repoUrl) && (
        <div className="mt-4 flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/0 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </article>
  )
}
