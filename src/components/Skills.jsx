import { motion } from 'framer-motion'
import { skills } from '../data/skills.js'
import './Skills.css'

const CATEGORY_LABELS = {
  backend: 'Backend',
  frontend: 'Frontend',
  data: 'Data & storage',
  architecture: 'Architecture',
  messaging: 'Messaging & jobs',
  tooling: 'Tooling',
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>What I build with</h2>
          <p>The tools I reach for day to day, grouped by where they sit in the stack.</p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skills-group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="skills-group__title">{CATEGORY_LABELS[group.category]}</h3>
              <div className="skills-group__chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
