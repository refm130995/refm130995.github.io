import { useEffect, useState, lazy, Suspense, type CSSProperties } from 'react'
import { useI18n } from '../i18n'

const CapybaraScene = lazy(() => import('./CapybaraScene'))

/** Pasa el índice de stagger como custom property al estilo del elemento. */
const delay = (i: number) => ({ '--i': i }) as unknown as CSSProperties

export function Hero() {
  const { t } = useI18n()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <header className={`hero ${loaded ? 'is-in' : ''}`} id="top">
      <div className="hero__copy">
        <p className="hero__eyebrow stagger" style={delay(0)}>
          {t.hero.eyebrow}
        </p>

        <h1 className="hero__title">
          <span className="stagger" style={delay(1)}>
            {t.hero.titleBefore}
          </span>
          <span className="stagger" style={delay(2)}>
            <em>{t.hero.titleEm}</em>
          </span>
          <span className="stagger" style={delay(3)}>
            {t.hero.titleAfter}
          </span>
        </h1>

        <p className="hero__lede stagger" style={delay(4)}>
          {t.hero.lede}
        </p>

        <div className="hero__meta stagger" style={delay(5)}>
          <a className="hero__cta" href="#work">
            {t.hero.cta}
            <span className="hero__arrow" aria-hidden="true">→</span>
          </a>
          <span className="hero__stat">{t.hero.stat}</span>
        </div>
      </div>

      <div className="hero__scene" aria-hidden="true">
        <Suspense fallback={<div className="hero__scene-load" />}>
          <CapybaraScene />
        </Suspense>
        <span className="hero__scene-hint">{t.sceneHint}</span>
      </div>
    </header>
  )
}
