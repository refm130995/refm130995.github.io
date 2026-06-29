export interface Project {
  id: string
  name: string
  stack: string[]
  demo: string
  repo: string
}

export interface Role {
  id: string
  company: string
  title: string
  period: string
  location: string
}

export const PROJECTS: Project[] = [
  {
    id: 'spatial-pulse',
    name: 'Spatial Pulse',
    stack: ['React', 'TypeScript', 'Recharts'],
    demo: 'https://refm130995.github.io/spatial-pulse/',
    repo: 'https://github.com/refm130995/spatial-pulse',
  },
  {
    id: 'coinpulse',
    name: 'CoinPulse',
    stack: ['React', 'TypeScript', 'Recharts'],
    demo: 'https://refm130995.github.io/coinpulse/',
    repo: 'https://github.com/refm130995/coinpulse',
  },
  {
    id: 'countries-atlas',
    name: 'Countries Atlas',
    stack: ['React', 'TypeScript', 'REST'],
    demo: 'https://refm130995.github.io/countries-atlas/',
    repo: 'https://github.com/refm130995/countries-atlas',
  },
  {
    id: 'markdown-studio',
    name: 'Markdown Studio',
    stack: ['React', 'TypeScript', 'marked'],
    demo: 'https://refm130995.github.io/markdown-studio/',
    repo: 'https://github.com/refm130995/markdown-studio',
  },
  {
    id: 'git-explorer',
    name: 'Git Explorer',
    stack: ['React', 'TypeScript', 'GitHub API'],
    demo: 'https://refm130995.github.io/git-explorer/',
    repo: 'https://github.com/refm130995/git-explorer',
  },
  {
    id: 'skycast',
    name: 'SkyCast',
    stack: ['React', 'TypeScript', 'Open-Meteo'],
    demo: 'https://refm130995.github.io/skycast/',
    repo: 'https://github.com/refm130995/skycast',
  },
]

export const ROLES: Role[] = [
  { id: 'brocsoft', company: 'Brocsoft', title: 'Senior Frontend Developer', period: '2024', location: 'Remote · Austin, TX' },
  { id: 'dbaccess', company: 'DBAccess', title: 'Full-Stack Developer', period: '2023 – 2024', location: 'Remote · Miami, FL' },
  { id: 'corbin', company: 'Corbin & Brooks', title: 'Frontend Developer', period: '2022 – 2023', location: 'Remote · Eugene, OR' },
  { id: 'pegasi', company: 'Pegasi', title: 'Full-Stack Developer', period: '2021 – 2022', location: 'Remote · Santiago, CL' },
]

export const STACK = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Nest.js',
  'Python', 'Angular', 'PostgreSQL', 'Docker', 'Socket.io',
]
