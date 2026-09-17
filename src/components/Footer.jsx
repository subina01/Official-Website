import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__row mono">
        <span>© {year} Subina Dhakal</span>
        <span>built with React</span>
      </div>
    </footer>
  )
}
