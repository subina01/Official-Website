import { motion } from 'framer-motion'
import './Hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

function ArchDiagram() {
  return (
    <motion.svg
      className="hero-diagram"
      viewBox="0 0 480 320"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      aria-hidden="true"
    >
      <line className="flow-line" x1="140" y1="160" x2="190" y2="160" stroke="var(--accent)" strokeWidth="2" />
      <path className="flow-line" d="M310 145 L350 108" stroke="var(--accent)" strokeWidth="2" />
      <path className="flow-line" d="M310 175 L350 210" stroke="var(--accent)" strokeWidth="2" />

      <rect x="10" y="130" width="130" height="60" rx="10" className="node-box" />
      <text x="75" y="155" textAnchor="middle" className="node-title">
        Client apps
      </text>
      <text x="75" y="173" textAnchor="middle" className="node-sub">
        Flutter · React
      </text>

      <rect x="190" y="130" width="120" height="60" rx="10" className="node-box node-box--accent" />
      <text x="250" y="155" textAnchor="middle" className="node-title">
        API
      </text>
      <text x="250" y="173" textAnchor="middle" className="node-sub">
        ASP.NET Core
      </text>

      <rect x="350" y="78" width="120" height="55" rx="10" className="node-box" />
      <text x="410" y="102" textAnchor="middle" className="node-title">
        Data
      </text>
      <text x="410" y="120" textAnchor="middle" className="node-sub">
        PostgreSQL
      </text>

      <rect x="350" y="185" width="120" height="70" rx="10" className="node-box" />
      <text x="410" y="207" textAnchor="middle" className="node-title">
        Tenants
      </text>
      <rect x="366" y="216" width="24" height="24" rx="4" className="tenant-chip" />
      <rect x="398" y="216" width="24" height="24" rx="4" className="tenant-chip" />
      <rect x="430" y="216" width="24" height="24" rx="4" className="tenant-chip" />
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <motion.div initial="hidden" animate="show" variants={container} className="hero__copy">
          <motion.span variants={item} className="hero__badge">
            <span className="hero__dot" /> Currently building at ICONSOFT
          </motion.span>

          <motion.h1 variants={item} className="hero__headline">
            Fullstack developer who ships <span className="hero__accent">backend-heavy</span> product systems.
          </motion.h1>

          <motion.p variants={item} className="hero__desc">
            I'm Subina — I design and build multi-tenant, Clean Architecture systems end to end: ASP.NET
            Core and FastAPI on the backend, React and Flutter on the front. Currently at ICONSOFT, shipping
            client platforms for cooperative savings, banking, and automotive service.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <a href="#projects" className="btn btn--solid">
              View my work
            </a>
            <a href="#contact" className="btn btn--outline">
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <div className="hero__visual">
          <ArchDiagram />
        </div>
      </div>
    </section>
  )
}
