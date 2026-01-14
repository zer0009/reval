import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './Clients.css'

const Clients = () => {
  const { language } = useLanguage()
  const t = content[language]

  // Company logos from the companies folder
  const companyLogos = [
    '/assets/companies/1543762122_316_6398_logo1-231x70.png',
    '/assets/companies/1630493914136.png',
    '/assets/companies/1669229788958.png',
    '/assets/companies/9310175536582f1e5e9faa.png',
    '/assets/companies/ALGAMMAL-CONTRACTING-LOGO-GD-AGCC-new.jpg',
    '/assets/companies/arabia_holding_logo.png',
    '/assets/companies/c9.png',
    '/assets/companies/ccc-logo-header.svg',
    '/assets/companies/global.jpg',
    '/assets/companies/Group-738-1.webp',
    '/assets/companies/hassan_allam_holding_logo.png',
    '/assets/companies/IMG-20250218-WA0051.png',
    '/assets/companies/logo.png',
    '/assets/companies/Newest-FMPlus-company-profile-edited-Photoroom.webp'
  ]

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2 className="section-title">{t.clients.title}</h2>
        <p className="clients-subtitle">{t.clients.subtitle}</p>
        <div className="clients-grid">
          {companyLogos.map((logo, index) => (
            <div key={index} className="client-card">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="client-logo"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients

