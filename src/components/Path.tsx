import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n'
import { ROLES, type Role } from '../data'
import { SectionHead } from './Work'

export function Path() {
  const { t } = useI18n()
  return (
    <section className="path" id="path">
      <SectionHead index="02" title={t.path.title} hint={t.path.hint} />

      <div className="path__list">
        {ROLES.map((r) => (
          <Entry key={r.id} role={r} note={t.roleNotes[r.id]} />
        ))}
      </div>
    </section>
  )
}

function Entry({ role, note }: { role: Role; note: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`entry reveal ${shown ? 'is-in' : ''}`}>
      <div className="entry__meta">
        <span className="entry__period">{role.period}</span>
        <span className="entry__loc">{role.location}</span>
      </div>
      <div className="entry__body">
        <h3 className="entry__role">
          {role.title} <span className="entry__at">·</span>{' '}
          <span className="entry__company">{role.company}</span>
        </h3>
        <p className="entry__note">{note}</p>
      </div>
    </div>
  )
}
