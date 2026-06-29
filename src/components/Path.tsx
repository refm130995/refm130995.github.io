import { useReveal } from '../hooks/useReveal'
import { ROLES } from '../data'
import { SectionHead } from './Work'

export function Path() {
  return (
    <section className="path" id="path">
      <SectionHead index="02" title="The path so far" hint="Remote, for U.S. teams" />

      <div className="path__list">
        {ROLES.map((r) => (
          <Entry key={r.company} role={r} />
        ))}
      </div>
    </section>
  )
}

function Entry({ role }: { role: (typeof ROLES)[number] }) {
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
        <p className="entry__note">{role.note}</p>
      </div>
    </div>
  )
}
