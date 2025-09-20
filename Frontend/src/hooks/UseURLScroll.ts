import { useEffect, useState } from "react"

export function useURLScroll(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) {
              setActiveId(id)

              window.history.replaceState(null, "", `#${id}`)
            }
          }
        })
      },
      {
        rootMargin: `-${offset}px 0px -80% 0px`, 
        threshold: 0.1,
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
