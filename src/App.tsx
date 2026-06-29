import { LangProvider } from './i18n'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Path } from './components/Path'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <LangProvider>
      <div className="page">
        <div className="grain" aria-hidden="true" />
        <Nav />
        <main className="wrap">
          <Hero />
          <Work />
          <Path />
          <Contact />
        </main>
      </div>
    </LangProvider>
  )
}
