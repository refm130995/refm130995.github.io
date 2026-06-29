import { useEffect, useState, lazy, Suspense, type CSSProperties } from 'react'

const CatScene = lazy(() => import('./CatScene'))

/** Pasa el índice de stagger como custom property al estilo del elemento. */
const delay = (i: number) => ({ '--i': i }) as unknown as CSSProperties

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <header className={`hero ${loaded ? 'is-in' : ''}`} id="top">
      <div className="hero__copy">
        <p className="hero__eyebrow stagger" style={delay(0)}>
          Senior Full-Stack Developer · Latin America — Remote
        </p>

        <h1 className="hero__title">
          <span className="stagger" style={delay(1)}>
            I build interfaces that stay
          </span>
          <span className="stagger" style={delay(2)}>
            <em>fast and clear</em> under
          </span>
          <span className="stagger" style={delay(3)}>
            real complexity.
          </span>
        </h1>

        <p className="hero__lede stagger" style={delay(4)}>
          Five-plus years shipping React &amp; TypeScript products for U.S. teams —
          data-heavy dashboards, real-time tooling, and the performance work that
          takes a page from sluggish to instant.
        </p>

        <div className="hero__meta stagger" style={delay(5)}>
          <a className="hero__cta" href="#work">
            See selected work
            <span className="hero__arrow" aria-hidden="true">→</span>
          </a>
          <span className="hero__stat">
            <strong>~35%</strong> faster load · <strong>~30%</strong> fewer prod bugs
          </span>
        </div>
      </div>

      <div className="hero__scene" aria-hidden="true">
        <Suspense fallback={<div className="hero__scene-load" />}>
          <CatScene />
        </Suspense>
        <span className="hero__scene-hint">drag to tilt · he’s shipping too</span>
      </div>
    </header>
  )
}
