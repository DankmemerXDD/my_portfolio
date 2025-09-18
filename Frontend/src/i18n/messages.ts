export type Language = 'en' | 'no'

export type Messages = Record<string, string>

export const en: Messages = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.toggle.en': 'EN',
  'nav.toggle.no': 'NO',

  'hero.badge': 'Built with React + Vite + Tailwind',
  'hero.title': 'Building fast web experiences',
  'hero.subtitle': 'I craft performant, maintainable web apps with a focus on developer experience and user delight.',
  'hero.ctaProjects': 'View Projects',
  'hero.ctaAbout': 'About Me',

  'about.title': 'About Me',
  'about.p1': 'I’m Kim Salihu, a graduate developer who enjoys turning complex ideas into fast, accessible experiences. I care about clean architecture, strong typing, and excellent developer experience.',
  'about.p2': 'My toolkit includes React, TypeScript, Vite, and Tailwind. I focus on readable code, testing discipline, and design informed by user feedback.',
  'about.p3': 'Let’s build something great.',
  'about.degrees': 'I hold a Bachelor degree in Computer Science and in VFX.',
  'about.showreel': 'Watch my VFX showreel',

  'projects.title': 'Projects',
  'projects.subtitle': 'A selection of things I’ve built recently.',
  'projects.tabs.chef': 'Chef',
  'projects.tabs.vfx': 'VFX',
  'projects.tabs.cs': 'Computer Science',
  'projects.chef.subtitle': 'Highlights from my time as a chef.',
  'projects.vfx.subtitle': 'My VFX showreel and visual work from when i was studying at school.',
  'projects.cs.subtitle': 'Software projects I’ve built; click to see details.',

  'projects.more': 'More info',
  'projects.less': 'Less',
  'projects.demo': 'Live Demo',
  'projects.source': 'Source Code',
  'projects.openVimeo': 'Open on Vimeo',

  'services.title': 'What I Do',
  'services.subtitle': 'Ways I can help your product succeed.',
  'services.frontend.title': 'Frontend Engineering',
  'services.frontend.desc': 'Accessible, performant UI with React, TypeScript, and Tailwind.',
  'services.arch.title': 'Architecture & DX',
  'services.arch.desc': 'Clean code, testing, tooling, and CI to keep teams moving fast.',
  'services.ux.title': 'Performance & UX',
  'services.ux.desc': 'Ship fast sites with great UX and Core Web Vitals.',

  'footer.rights': 'All rights reserved.',
}

export const no: Messages = {
  'nav.home': 'Hjem',
  'nav.about': 'Om',
  'nav.projects': 'Prosjekter',
  'nav.services': 'Tjenester',
  'nav.contact': 'Kontakt',
  'nav.toggle.en': 'EN',
  'nav.toggle.no': 'NO',

  'hero.badge': 'Bygget med React + Vite + Tailwind',
  'hero.title': 'Jeg bygger raske webløsninger',
  'hero.subtitle': 'Jeg lager ytelsesorienterte, vedlikeholdbare webapper med fokus på utvikleropplevelse og brukerglede.',
  'hero.ctaProjects': 'Se prosjekter',
  'hero.ctaAbout': 'Om meg',

  'about.title': 'Om meg',
  'about.p1': 'Jeg er Kim Salihu, en utvikler med fokus på frontend som liker å gjøre komplekse ideer om til raske, tilgjengelige opplevelser. Jeg er opptatt av ren arkitektur, sterk typing og god utvikleropplevelse.',
  'about.p2': 'Jeg bruker blant annet React, TypeScript, Vite og Tailwind. Jeg prioriterer lesbar kode, gode testvaner og et design som er basert på reelle tilbakemeldinger fra brukere. Se CV/PDF for mer bakgrunn.',
  'about.p3': 'La oss bygge noe bra.',
  'about.degrees': 'Jeg har bachelor i informatikk og i VFX.',
  'about.showreel': 'Se VFX‑showreelen min',

  'projects.title': 'Prosjekter',
  'projects.subtitle': 'Et utvalg av ting jeg har bygget i det siste.',
  'projects.tabs.chef': 'Kokk',
  'projects.tabs.vfx': 'VFX',
  'projects.tabs.cs': 'Informatikk',
  'projects.chef.subtitle': 'Høydepunkter fra tiden som kokk.',
  'projects.vfx.subtitle': 'VFX‑showreel og visuelt arbeid.',
  'projects.cs.subtitle': 'Programvareprosjekter jeg har bygget; klikk for detaljer.',

  'projects.more': 'Mer info',
  'projects.less': 'Mindre',
  'projects.demo': 'Live demo',
  'projects.source': 'Kildekode',
  'projects.openVimeo': 'Åpne på Vimeo',

  'services.title': 'Dette gjør jeg',
  'services.subtitle': 'Slik kan jeg hjelpe produktet ditt å lykkes.',
  'services.frontend.title': 'Frontend-utvikling',
  'services.frontend.desc': 'Tilgjengelig og rask UI med React, TypeScript og Tailwind.',
  'services.arch.title': 'Arkitektur og DX',
  'services.arch.desc': 'Ren kode, testing, verktøy og CI som holder tempoet oppe.',
  'services.ux.title': 'Ytelse og UX',
  'services.ux.desc': 'Lever raske nettsider med god UX og Core Web Vitals.',

  'footer.rights': 'Alle rettigheter forbeholdt.',
}
