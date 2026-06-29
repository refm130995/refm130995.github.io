import { useI18n, LANGS, LANG_LABEL } from '../i18n'

export function Nav() {
  const { lang, setLang, t } = useI18n()

  return (
    <nav className="nav">
      <a className="nav__mark" href="#top" aria-label="Home">
        RF<span className="nav__dot">.</span>
      </a>

      <div className="nav__right">
        <div className="nav__links">
          <a href="#work">{t.nav.work}</a>
          <a href="#path">{t.nav.path}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="langswitch" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l}
              className={`langswitch__btn ${lang === l ? 'is-active' : ''}`}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
