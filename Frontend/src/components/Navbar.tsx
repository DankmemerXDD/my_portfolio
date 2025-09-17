import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { motion } from 'framer-motion'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useI18n()
  const links = [
    { href: '#hero', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#services', label: t('nav.services') },
    { href: '#footer', label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-white/90">
          <span className="text-indigo-400">&lt;/&gt;</span> Kim Salihu
        </a>
        <div className="flex items-center gap-3">
          <button
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs sm:inline-block"
            onClick={() => setLang(lang === 'en' ? 'no' : 'en')}
          >
            {lang === 'en' ? t('nav.toggle.no') : t('nav.toggle.en')}
          </button>
        </div>
      </nav>
      <div className="sm:hidden flex items-center justify-end px-6 pb-2">
        <button
          className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs"
          onClick={() => setLang(lang === 'en' ? 'no' : 'en')}
        >
          {lang === 'en' ? t('nav.toggle.no') : t('nav.toggle.en')}
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-gray-950/80">
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {links.map((l) => (
              <li key={l.href} className="py-2">
                <motion.a
                  href={l.href}
                  className="block text-sm text-white/80"
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {l.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
