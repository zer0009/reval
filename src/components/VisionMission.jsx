import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './VisionMission.css'

const VisionMission = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section className="vision-mission">
      <div className="container">
        <div className="vision-mission-content">
          <div className="vision-mission-image-section">
            <div className="vision-mission-image-wrapper">
              <div className="image-overlay"></div>
              <img src="/assets/03.jpeg" alt="Vision and Mission" className="vision-mission-image" />
            </div>
          </div>
          <div className="vision-mission-cards">
            <div className="vision-card">
              <div className="card-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="card-title">{t.vision.title}</h3>
              <p className="card-text">{t.vision.text}</p>
            </div>
            <div className="mission-card">
              <div className="card-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="card-title">{t.mission.title}</h3>
              <p className="card-text">{t.mission.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

