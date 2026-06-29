import { useReveal } from '../hooks/useReveal'
import { STACK } from '../data'

export function Contact() {
  const { ref, shown } = useReveal<HTMLElement>()
  return (
    <section ref={ref} className={`contact reveal ${shown ? 'is-in' : ''}`} id="contact">
      <span className="contact__index">03</span>

      <h2 className="contact__title">
        Let’s build something <em>that lasts</em>.
      </h2>

      <p className="contact__lede">
        Open to remote roles and collaborations. The fastest way to reach me is email.
      </p>

      <div className="contact__links">
        <a className="contact__primary" href="mailto:refm.130995@gmail.com">
          refm.130995@gmail.com
        </a>
        <div className="contact__secondary">
          <a href="https://github.com/refm130995" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ramonfiguera" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <ul className="contact__stack" aria-label="Tools I work with">
        {STACK.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <footer className="contact__foot">
        <span>Ramon Eduardo Figuera · he/him</span>
        <span>Designed &amp; built with React + TypeScript</span>
      </footer>
    </section>
  )
}
