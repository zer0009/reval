import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-taglines">
            {t.taglines.map((tagline, index) => (
              <span key={index} className="tagline">{tagline}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

