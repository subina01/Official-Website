import { motion } from 'framer-motion'
import { enterpriseProjects, personalProjects, moreProjects } from '../data/projects.js'
import { handleSpotlightMove } from '../utils/spotlight.js'
import './Projects.css'

function Card({ children, delay }) {
  return (
    <motion.div
      className="proj-card"
      onMouseMove={handleSpotlightMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="proj-card__spotlight" />
      <div className="proj-card__content">{children}</div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <h2>Selected projects</h2>
          <p>Client systems shipped at ICONSOFT, and a curated set of independent builds.</p>
        </div>

        <h3 className="proj-group-title">Enterprise systems</h3>
        <div className="proj-grid">
          {enterpriseProjects.map((p, i) => (
            <Card key={p.name} delay={i * 0.05}>
              <div className="proj-card__top">
                <h4 className="proj-card__name">{p.name}</h4>
                <span className={`exp-tag ${p.tag === 'BUILT SOLO' ? 'exp-tag--solo' : 'exp-tag--contrib'}`}>
                  {p.tag === 'BUILT SOLO' ? 'Built solo' : 'Contributed'}
                </span>
              </div>
              <p className="proj-card__desc">{p.description}</p>
              <ul className="proj-card__stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="proj-card__note">Private client project — code not public</p>
            </Card>
          ))}
        </div>

        <h3 className="proj-group-title">Personal projects</h3>
        <div className="proj-grid">
          {personalProjects.map((p, i) => (
            <Card key={p.name} delay={i * 0.05}>
              <h4 className="proj-card__name">{p.name}</h4>
              <p className="proj-card__desc">{p.description}</p>
              <ul className="proj-card__stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <a href={p.url} target="_blank" rel="noreferrer" className="proj-card__link">
                View source →
              </a>
            </Card>
          ))}
        </div>

        <p className="proj-more">
          More on GitHub —{' '}
          {moreProjects.map((p, i) => (
            <span key={p.name}>
              <a href={p.url} target="_blank" rel="noreferrer">
                {p.name}
              </a>
              {i < moreProjects.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
