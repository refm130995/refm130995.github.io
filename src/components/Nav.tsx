export function Nav() {
  return (
    <nav className="nav">
      <a className="nav__mark" href="#top" aria-label="Home">
        RF<span className="nav__dot">.</span>
      </a>
      <div className="nav__links">
        <a href="#work">Work</a>
        <a href="#path">Path</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
