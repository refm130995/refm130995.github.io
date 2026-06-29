export interface Project {
  name: string
  blurb: string
  stack: string[]
  demo: string
  repo: string
}

export interface Role {
  company: string
  title: string
  period: string
  location: string
  note: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Spatial Pulse',
    blurb: 'A real-time space-analytics dashboard — live KPIs, a streaming chart and a sortable zone table that stay smooth under constant updates.',
    stack: ['React', 'TypeScript', 'Recharts'],
    demo: 'https://refm130995.github.io/spatial-pulse/',
    repo: 'https://github.com/refm130995/spatial-pulse',
  },
  {
    name: 'CoinPulse',
    blurb: 'A live crypto market tracker with 7-day sparklines and a one-minute auto-refresh that keeps the last good data on a failed fetch.',
    stack: ['React', 'TypeScript', 'Recharts'],
    demo: 'https://refm130995.github.io/coinpulse/',
    repo: 'https://github.com/refm130995/coinpulse',
  },
  {
    name: 'Countries Atlas',
    blurb: 'Explore every country: combined search and region filters, a detail view, and clickable borders — backed by World Bank population data.',
    stack: ['React', 'TypeScript', 'REST'],
    demo: 'https://refm130995.github.io/countries-atlas/',
    repo: 'https://github.com/refm130995/countries-atlas',
  },
  {
    name: 'Markdown Studio',
    blurb: 'A live Markdown editor with a formatting toolbar and DOMPurify-sanitised preview — careful about XSS even on your own content.',
    stack: ['React', 'TypeScript', 'marked'],
    demo: 'https://refm130995.github.io/markdown-studio/',
    repo: 'https://github.com/refm130995/markdown-studio',
  },
  {
    name: 'Git Explorer',
    blurb: 'Search any GitHub user and browse their repos — debounced queries, cancelled in-flight requests, and fully typed async states.',
    stack: ['React', 'TypeScript', 'GitHub API'],
    demo: 'https://refm130995.github.io/git-explorer/',
    repo: 'https://github.com/refm130995/git-explorer',
  },
  {
    name: 'SkyCast',
    blurb: 'Weather with city autocomplete and a 7-day forecast, themed by the location’s local day or night. Built on the free Open-Meteo API.',
    stack: ['React', 'TypeScript', 'Open-Meteo'],
    demo: 'https://refm130995.github.io/skycast/',
    repo: 'https://github.com/refm130995/skycast',
  },
]

export const ROLES: Role[] = [
  {
    company: 'Brocsoft',
    title: 'Senior Frontend Developer',
    period: '2024',
    location: 'Remote · Austin, TX',
    note: 'Cut frontend load time ~35% (Lighthouse / CWV) by refactoring React components and trimming the bundle; reduced production bugs ~30%.',
  },
  {
    company: 'DBAccess',
    title: 'Full-Stack Developer',
    period: '2023 – 2024',
    location: 'Remote · Miami, FL',
    note: 'Shipped SIGO Seguros’ policy-changes module with React, Next.js and Nest.js, improving the user flow ~40%. High Jest coverage.',
  },
  {
    company: 'Corbin & Brooks',
    title: 'Frontend Developer',
    period: '2022 – 2023',
    location: 'Remote · Eugene, OR',
    note: 'Led platform improvements in React + TypeScript, lifting engagement metrics 25–50%; tamed async state with Redux Saga.',
  },
  {
    company: 'Pegasi',
    title: 'Full-Stack Developer',
    period: '2021 – 2022',
    location: 'Remote · Santiago, CL',
    note: 'Built real-time telemedicine video (Twilio/WebRTC + Socket.io) and a layered Node.js backend with event streams over Kafka.',
  },
]

export const STACK = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Nest.js',
  'Python', 'Angular', 'PostgreSQL', 'Docker', 'Socket.io',
]
