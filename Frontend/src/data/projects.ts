import reactLogo from '../assets/react.svg'

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    description: 'This portfolio built with React, TypeScript, Vite, and Tailwind.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    image: '/vite.svg',
    repoUrl: 'https://github.com/DankmemerXDD/my_portfolio',
  },
  {
    id: 'shop-react-csharp',
    title: 'Shop (React + C#)',
    description: 'Full-stack exploration combining React frontend with a C# backend.',
    tags: ['React', 'C#', 'Full‑stack'],
    image: reactLogo,
    repoUrl: 'https://github.com/DankmemerXDD/shop_React_cSharp',
  },
  {
    id: 'hangman',
    title: 'Hangman',
    description: 'A simple game project to practice UI logic and state management.',
    tags: ['TypeScript', 'Game'],
    image: '/vite.svg',
    repoUrl: 'https://github.com/DankmemerXDD/hangman',
  },
]
