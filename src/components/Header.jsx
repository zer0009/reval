import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './Header.css'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = content[language]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img 
            src="/assets/Logo.png" 
            alt={t.companyName} 
            className="logo-image"
            onError={(e) => {
              console.error('Logo failed to load:', e.target.src)
              e.target.style.display = 'none'
            }}
          />
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
        </button>
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">
            {t.nav.home}
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            {t.nav.about}
          </button>
          <button onClick={() => scrollToSection('features')} className="nav-link">
            {t.nav.features}
          </button>
          <button onClick={() => scrollToSection('clients')} className="nav-link">
            {t.nav.clients}
          </button>
          <button onClick={() => scrollToSection('partners')} className="nav-link">
            {language === 'ar' ? 'شركاؤنا' : 'Partners'}
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            {t.nav.contact}
          </button>
        </nav>
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'ar' ? 'EN' : 'AR'}
        </button>
      </div>
    </header>
  )
}

export default Header

