import { useReveal } from '../hooks/useReveal'
import { PROJECTS } from '../data'

export function Work() {
  return (
    <section className="work" id="work">
      <SectionHead index="01" title="Selected work" hint="Built, shipped, deployed" />

      <ol className="work__list">
        {PROJECTS.map((p, i) => (
          <WorkRow key={p.name} project={p} n={i + 1} />
        ))}
      </ol>
    </section>
  )
}

function WorkRow({ project, n }: { project: (typeof PROJECTS)[number]; n: number }) {
  const { ref, shown } = useReveal<HTMLLIElement>()
  return (
    <li ref={ref} className={`row reveal ${shown ? 'is-in' : ''}`}>
      <span className="row__no">{String(n).padStart(2, '0')}</span>

      <div className="row__body">
        <h3 className="row__name">{project.name}</h3>
        <p className="row__blurb">{project.blurb}</p>
        <ul className="row__stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="row__links">
        <a className="row__link" href={project.demo} target="_blank" rel="noreferrer">
          Live <span aria-hidden="true">↗</span>
        </a>
        <a className="row__link row__link--muted" href={project.repo} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </li>
  )
}

export function SectionHead({ index, title, hint }: { index: string; title: string; hint: string }) {
  return (
    <div className="sechead">
      <span className="sechead__index">{index}</span>
      <h2 className="sechead__title">{title}</h2>
      <span className="sechead__hint">{hint}</span>
    </div>
  )
}
