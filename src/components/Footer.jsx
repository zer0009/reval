import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './Footer.css'

const Footer = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">{t.footer.text}</p>
        <p className="footer-established">{t.footer.established}</p>
      </div>
    </footer>
  )
}

export default Footer

