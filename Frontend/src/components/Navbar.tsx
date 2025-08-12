import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#footer', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-white/90">
          <span className="text-indigo-400">&lt;/&gt;</span> Kim Salihu
        </a>
        <button
          className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <ul className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-gray-950/80">
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {links.map((l) => (
              <li key={l.href} className="py-2">
                <a href={l.href} className="block text-sm text-white/80" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}