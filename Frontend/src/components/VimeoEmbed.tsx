import { useEffect, useState } from 'react'

type VimeoEmbedProps = {
  videoUrl: string
  className?: string
}

export function VimeoEmbed({ videoUrl, className }: VimeoEmbedProps) {
  const [html, setHtml] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setError(null)
        setHtml(null)
        const encoded = encodeURIComponent(videoUrl)
        const res = await fetch(`https://vimeo.com/api/oembed.json?url=${encoded}`)
        if (!res.ok) throw new Error(`oEmbed fetch failed: ${res.status}`)
        const data = (await res.json()) as { html?: string }

        let embed = data.html ?? null
        if (embed) {
          embed = embed
            .replace(/width="\d+"/, 'width="100%"')
            .replace(/height="\d+"/, 'height="100%"')
        }

        if (!cancelled) setHtml(embed)
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load video')
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [videoUrl])

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        <div className="aspect-video w-full">
          {html ? (
            <div
              className="h-full w-full [&>iframe]:h-full [&>iframe]:w-full"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : error ? (
            <div className="flex h-full w-full items-center justify-center text-sm text-white/70">
              {error}
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-white/70">
              Loading video…
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
