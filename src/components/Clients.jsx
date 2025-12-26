import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './Clients.css'

const Clients = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2 className="section-title">{t.clients.title}</h2>
        <p className="clients-subtitle">{t.clients.subtitle}</p>
        <div className="clients-grid">
          {t.clients.list.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-logo-placeholder">
                <span className="client-name">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients

