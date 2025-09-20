import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-gradient-to-b from-gray-950 to-black py-10 text-white">
  
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Kim Salihu. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/DankmemerXDD?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <Github size={32} className="text-white/70 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/kim-salihu-1aa6b6170/"
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <Linkedin size={32} className="text-white/70 hover:text-white" />
          </a>
          <a
            href="mailto:kims9725@hotmail.com"
            className="transition-transform duration-200 hover:scale-110"
          >
            <Mail size={32} className="text-white/70 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  )
}
