import { motion } from 'framer-motion'
import { experience } from '../data/experience.js'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Where I've worked</h2>
          <p>Real teams, real systems — most recent first.</p>
        </div>

        <div className="exp-list">
          {experience.map((entry, i) => (
            <motion.article
              key={entry.company}
              className="exp-entry"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="exp-entry__side">
                <span className="exp-entry__duration mono">{entry.duration}</span>
                {entry.current && <span className="exp-entry__current">Current</span>}
              </div>

              <div className="exp-entry__body">
                <h3 className="exp-entry__role">{entry.role}</h3>
                <p className="exp-entry__company">{entry.company}</p>

                {entry.summary && <p className="exp-entry__summary">{entry.summary}</p>}

                {entry.items[0].name ? (
                  <ul className="exp-entry__projects">
                    {entry.items.map((it) => (
                      <li key={it.name}>
                        <div className="exp-entry__project-head">
                          <span className="exp-entry__project-name">{it.name}</span>
                          <span
                            className={`exp-tag ${it.tag === 'BUILT SOLO' ? 'exp-tag--solo' : 'exp-tag--contrib'}`}
                          >
                            {it.tag === 'BUILT SOLO' ? 'Built solo' : 'Contributed'}
                          </span>
                        </div>
                        <p className="exp-entry__project-detail">{it.detail}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="exp-entry__bullets">
                    {entry.items.map((it) => (
                      <li key={it.detail}>{it.detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
