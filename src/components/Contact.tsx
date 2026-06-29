import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n'
import { STACK } from '../data'

export function Contact() {
  const { t } = useI18n()
  const { ref, shown } = useReveal<HTMLElement>()
  return (
    <section ref={ref} className={`contact reveal ${shown ? 'is-in' : ''}`} id="contact">
      <span className="contact__index">03</span>

      <h2 className="contact__title">
        {t.contact.titleBefore} <em>{t.contact.titleEm}</em>
        {t.contact.titleAfter}
      </h2>

      <p className="contact__lede">{t.contact.lede}</p>

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

      <ul className="contact__stack" aria-label="Tools">
        {STACK.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <footer className="contact__foot">
        <span>Ramon Eduardo Figuera · he/him</span>
        <span>{t.contact.foot}</span>
      </footer>
    </section>
  )
}
