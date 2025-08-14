import { useI18n } from '../i18n/I18nProvider'

export function Footer(){
  const { t } = useI18n()
  return(
    <footer id="footer" className="border-t border-white/10 bg-gray-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Kim Salihu. {t('footer.rights')}</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/DankmemerXDD?tab=repositories" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/kim-salihu-1aa6b6170/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">LinkedIn</a>
          <a href="mailto:kims9725@hotmail.com" className="text-white/70 hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  )
}