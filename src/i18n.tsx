import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es' | 'it'
export const LANGS: Lang[] = ['en', 'es', 'it']
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', es: 'ES', it: 'IT' }

interface Dict {
  nav: { work: string; path: string; contact: string }
  hero: {
    eyebrow: string
    titleBefore: string
    titleEm: string
    titleAfter: string
    lede: string
    cta: string
    stat: string
  }
  sceneHint: string
  work: { title: string; hint: string }
  path: { title: string; hint: string }
  contact: {
    titleBefore: string
    titleEm: string
    titleAfter: string
    lede: string
    foot: string
  }
  projectBlurbs: Record<string, string>
  roleNotes: Record<string, string>
}

export const DICT: Record<Lang, Dict> = {
  en: {
    nav: { work: 'Work', path: 'Path', contact: 'Contact' },
    hero: {
      eyebrow: 'Senior Full-Stack Developer · Latin America — Remote',
      titleBefore: 'I build interfaces that stay',
      titleEm: 'fast and clear',
      titleAfter: 'under real complexity.',
      lede:
        'Five-plus years shipping React & TypeScript products for U.S. teams — data-heavy dashboards, real-time tooling, and the performance work that takes a page from sluggish to instant.',
      cta: 'See selected work',
      stat: '~35% faster load · ~30% fewer prod bugs',
    },
    sceneHint: 'drag to tilt · he’s shipping too',
    work: { title: 'Selected work', hint: 'Built, shipped, deployed' },
    path: { title: 'The path so far', hint: 'Remote, for U.S. teams' },
    contact: {
      titleBefore: 'Let’s build something',
      titleEm: 'that lasts',
      titleAfter: '.',
      lede: 'Open to remote roles and collaborations. The fastest way to reach me is email.',
      foot: 'Designed & built with React + TypeScript',
    },
    projectBlurbs: {
      'spatial-pulse':
        'A real-time space-analytics dashboard — live KPIs, a streaming chart and a sortable zone table that stay smooth under constant updates.',
      coinpulse:
        'A live crypto market tracker with 7-day sparklines and a one-minute auto-refresh that keeps the last good data on a failed fetch.',
      'countries-atlas':
        'Explore every country: combined search and region filters, a detail view, and clickable borders — backed by World Bank population data.',
      'markdown-studio':
        'A live Markdown editor with a formatting toolbar and DOMPurify-sanitised preview — careful about XSS even on your own content.',
      'git-explorer':
        'Search any GitHub user and browse their repos — debounced queries, cancelled in-flight requests, and fully typed async states.',
      skycast:
        'Weather with city autocomplete and a 7-day forecast, themed by the location’s local day or night. Built on the free Open-Meteo API.',
    },
    roleNotes: {
      brocsoft:
        'Cut frontend load time ~35% (Lighthouse / CWV) by refactoring React components and trimming the bundle; reduced production bugs ~30%.',
      dbaccess:
        'Shipped SIGO Seguros’ policy-changes module with React, Next.js and Nest.js, improving the user flow ~40%. High Jest coverage.',
      corbin:
        'Led platform improvements in React + TypeScript, lifting engagement metrics 25–50%; tamed async state with Redux Saga.',
      pegasi:
        'Built real-time telemedicine video (Twilio/WebRTC + Socket.io) and a layered Node.js backend with event streams over Kafka.',
    },
  },

  es: {
    nav: { work: 'Proyectos', path: 'Trayecto', contact: 'Contacto' },
    hero: {
      eyebrow: 'Desarrollador Full-Stack Senior · Latinoamérica — Remoto',
      titleBefore: 'Construyo interfaces que se mantienen',
      titleEm: 'rápidas y claras',
      titleAfter: 'ante la complejidad real.',
      lede:
        'Más de cinco años creando productos con React y TypeScript para equipos de EE.UU. — dashboards con muchos datos, herramientas en tiempo real y el trabajo de rendimiento que lleva una página de lenta a instantánea.',
      cta: 'Ver proyectos seleccionados',
      stat: '~35% más rápido · ~30% menos bugs en producción',
    },
    sceneHint: 'arrastra para girar · él también está programando',
    work: { title: 'Proyectos seleccionados', hint: 'Construidos, lanzados, desplegados' },
    path: { title: 'El trayecto hasta ahora', hint: 'Remoto, para equipos de EE.UU.' },
    contact: {
      titleBefore: 'Construyamos algo',
      titleEm: 'que perdure',
      titleAfter: '.',
      lede: 'Abierto a roles remotos y colaboraciones. La forma más rápida de contactarme es el correo.',
      foot: 'Diseñado y construido con React + TypeScript',
    },
    projectBlurbs: {
      'spatial-pulse':
        'Un dashboard de analítica espacial en tiempo real — KPIs en vivo, un gráfico en streaming y una tabla de zonas ordenable que se mantienen fluidos bajo actualizaciones constantes.',
      coinpulse:
        'Un monitor de mercado cripto en vivo con sparklines de 7 días y auto-actualización cada minuto que conserva los últimos datos válidos si una petición falla.',
      'countries-atlas':
        'Explora cada país: búsqueda y filtros por región combinados, vista de detalle y fronteras clicables — con datos de población del Banco Mundial.',
      'markdown-studio':
        'Un editor Markdown en vivo con barra de formato y vista previa saneada con DOMPurify — cuidando el XSS incluso en tu propio contenido.',
      'git-explorer':
        'Busca cualquier usuario de GitHub y explora sus repos — consultas con debounce, peticiones en curso canceladas y estados async totalmente tipados.',
      skycast:
        'Clima con autocompletado de ciudades y pronóstico de 7 días, con tema según el día o la noche local. Construido sobre la API gratuita Open-Meteo.',
    },
    roleNotes: {
      brocsoft:
        'Reduje el tiempo de carga del frontend ~35% (Lighthouse / CWV) refactorizando componentes React y recortando el bundle; bajé los bugs en producción ~30%.',
      dbaccess:
        'Lancé el módulo de cambios de pólizas de SIGO Seguros con React, Next.js y Nest.js, mejorando el flujo de usuario ~40%. Alta cobertura con Jest.',
      corbin:
        'Lideré mejoras de plataforma en React + TypeScript, elevando métricas de engagement 25–50%; domé el estado asíncrono con Redux Saga.',
      pegasi:
        'Construí videoconsultas de telemedicina en tiempo real (Twilio/WebRTC + Socket.io) y un backend Node.js por capas con flujos de eventos sobre Kafka.',
    },
  },

  it: {
    nav: { work: 'Progetti', path: 'Percorso', contact: 'Contatti' },
    hero: {
      eyebrow: 'Sviluppatore Full-Stack Senior · America Latina — Da remoto',
      titleBefore: 'Costruisco interfacce che restano',
      titleEm: 'veloci e chiare',
      titleAfter: 'nella complessità reale.',
      lede:
        'Oltre cinque anni a creare prodotti con React e TypeScript per team statunitensi — dashboard ricche di dati, strumenti in tempo reale e il lavoro sulle performance che porta una pagina da lenta a istantanea.',
      cta: 'Guarda i progetti',
      stat: '~35% più veloce · ~30% meno bug in produzione',
    },
    sceneHint: 'trascina per ruotare · sta lavorando anche lui',
    work: { title: 'Progetti selezionati', hint: 'Costruiti, rilasciati, in produzione' },
    path: { title: 'Il percorso finora', hint: 'Da remoto, per team statunitensi' },
    contact: {
      titleBefore: 'Costruiamo qualcosa',
      titleEm: 'che duri',
      titleAfter: '.',
      lede: 'Aperto a ruoli da remoto e collaborazioni. Il modo più veloce per contattarmi è l’email.',
      foot: 'Progettato e realizzato con React + TypeScript',
    },
    projectBlurbs: {
      'spatial-pulse':
        'Una dashboard di analisi spaziale in tempo reale — KPI live, un grafico in streaming e una tabella di zone ordinabile che restano fluidi sotto aggiornamenti costanti.',
      coinpulse:
        'Un tracker del mercato cripto in tempo reale con sparkline a 7 giorni e aggiornamento automatico ogni minuto che mantiene gli ultimi dati validi se una richiesta fallisce.',
      'countries-atlas':
        'Esplora ogni paese: ricerca e filtri per regione combinati, vista dettaglio e confini cliccabili — con dati sulla popolazione della Banca Mondiale.',
      'markdown-studio':
        'Un editor Markdown live con barra di formattazione e anteprima sanificata con DOMPurify — attento all’XSS anche sui tuoi contenuti.',
      'git-explorer':
        'Cerca qualsiasi utente GitHub ed esplora i suoi repo — query con debounce, richieste in corso annullate e stati async completamente tipizzati.',
      skycast:
        'Meteo con autocompletamento delle città e previsioni a 7 giorni, con tema in base al giorno o alla notte locale. Costruito sull’API gratuita Open-Meteo.',
    },
    roleNotes: {
      brocsoft:
        'Ho ridotto il tempo di caricamento del frontend del ~35% (Lighthouse / CWV) rifattorizzando i componenti React e alleggerendo il bundle; bug in produzione ridotti del ~30%.',
      dbaccess:
        'Ho rilasciato il modulo di modifica polizze di SIGO Seguros con React, Next.js e Nest.js, migliorando il flusso utente del ~40%. Alta copertura con Jest.',
      corbin:
        'Ho guidato miglioramenti della piattaforma in React + TypeScript, aumentando le metriche di engagement del 25–50%; gestito lo stato async con Redux Saga.',
      pegasi:
        'Ho realizzato video di telemedicina in tempo reale (Twilio/WebRTC + Socket.io) e un backend Node.js a livelli con flussi di eventi su Kafka.',
    },
  },
}

// --- Context ---------------------------------------------------------------

const KEY = 'site.lang'

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY) as Lang | null
    if (saved && LANGS.includes(saved)) return saved
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase()
  return (LANGS as string[]).includes(nav) ? (nav as Lang) : 'en'
}

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const Ctx = createContext<LangCtx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  return <Ctx.Provider value={{ lang, setLang, t: DICT[lang] }}>{children}</Ctx.Provider>
}

export function useI18n(): LangCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used within LangProvider')
  return ctx
}
