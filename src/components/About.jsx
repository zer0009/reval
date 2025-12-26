import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './About.css'

const About = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-wrapper">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img src="/assets/02.jpeg" alt="Reval Electrical Supplies" className="about-image" />
              <div className="about-image-overlay"></div>
            </div>
          </div>
          <div className="about-content">
            <p className="about-paragraph">{t.about.paragraph1}</p>
            <p className="about-paragraph">{t.about.paragraph2}</p>
            <p className="about-paragraph">{t.about.paragraph3}</p>
            <p className="about-paragraph">{t.about.paragraph4}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

