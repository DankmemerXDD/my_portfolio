import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Language, Messages } from './messages'
import { en as enMessages, no as noMessages } from './messages'

type I18nContextType = {
  lang: Language
  messages: Messages
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'en' || saved === 'no' ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const messages = useMemo(() => (lang === 'en' ? enMessages : noMessages), [lang])
  const t = (key: string) => messages[key] ?? key

  const value = useMemo(() => ({ lang, setLang, messages, t }), [lang, messages])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
