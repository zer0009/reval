import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './Partners.css'

const Partners = () => {
  const { language } = useLanguage()
  const t = content[language]

  const cablesLogos = [
    '/assets/cables/cabel_01.png',
    '/assets/cables/cabel_02.png',
    '/assets/cables/cabel_03.png',
    '/assets/cables/cabel_04.png',
    '/assets/cables/Elsewedy_Electric_Logo.svg.png'
  ]

  const panelsLogos = [
    '/assets/panels/06.png',
    '/assets/panels/07.png',
    '/assets/panels/08.png',
    '/assets/panels/09.png',
    '/assets/panels/10.png',
    '/assets/panels/11.png'
  ]

  const wiringLogos = [
    '/assets/wiring/07.png',
    '/assets/wiring/12.jpeg',
    '/assets/wiring/13.png',
    '/assets/wiring/14.png',
    '/assets/wiring/15.png',
    '/assets/wiring/venus-electric-Logo-Vector.svg-.png'
  ]

  const pvcLogos = [
    '/assets/pfc/16.png',
    '/assets/pfc/newega-logo.png',
    '/assets/pfc/rehab-logo.png'
  ]

  const emtLogos = [
    '/assets/emt/17.png',
    '/assets/emt/18.png',
    '/assets/emt/19.png',
    '/assets/emt/20.png'
  ]

  const dataCablesLogos = [
    '/assets/data_cables/13.png',
    '/assets/data_cables/D-Link-Logo.wine.png',
    '/assets/data_cables/Elsewedy_Electric_Logo.svg.png',
    '/assets/data_cables/mesc-logo-png_seeklogo-271807.png',
    '/assets/data_cables/Nexans_logo.svg.png'
  ]

  const insulationLogos = [
    '/assets/insulation/426-4264739_3m-logo-cmyk-3m-logo.png',
    '/assets/insulation/5F4B5882-0D03-4A78-A854-278E9365F91F__36543-1259x1280.png'
  ]

  const airConditioningLogos = [
    '/assets/air_conditioning/Logo_of_the_Carrier_Corporation.svg.png',
    '/assets/air_conditioning/Logo_of_the_Sharp_Corporation.svg.png',
    '/assets/air_conditioning/tornado.png',
    '/assets/air_conditioning/Fresh_Electric.jpg',
    '/assets/air_conditioning/midea.png',
    '/assets/air_conditioning/Haier_logo.svg.png',
    '/assets/air_conditioning/lg.png',
    '/assets/air_conditioning/samsung.jpg',
    '/assets/air_conditioning/Unionaire.png'
  ]

  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="partners-header">
          <h2 className="partners-title">
            <svg className="lightning-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.title}
          </h2>
          <p className="partners-subtitle">{t.partners.subtitle}</p>
        </div>
        
        <div className="partners-cables-section">
          <h3 className="cables-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.cablesTitle}
          </h3>
          <div className="partners-logos-grid">
            {cablesLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`Cable Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-panels-section">
          <h3 className="panels-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.panelsTitle}
          </h3>
          <div className="partners-logos-grid">
            {panelsLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`Panel Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-wiring-section">
          <h3 className="wiring-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.wiringTitle}
          </h3>
          <div className="partners-logos-grid">
            {wiringLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`Wiring Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-pvc-section">
          <h3 className="pvc-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.pvcTitle}
          </h3>
          <div className="partners-logos-grid">
            {pvcLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`PVC Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-emt-section">
          <h3 className="emt-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.emtTitle}
          </h3>
          <div className="partners-logos-grid">
            {emtLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`EMT Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-data-cables-section">
          <h3 className="data-cables-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.dataCablesTitle}
          </h3>
          <div className="partners-logos-grid">
            {dataCablesLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`Data Cable Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-insulation-section">
          <h3 className="insulation-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.insulationTitle}
          </h3>
          <div className="partners-logos-grid">
            {insulationLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`Insulation Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-air-conditioning-section">
          <h3 className="air-conditioning-title">
            <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.partners.airConditioningTitle}
          </h3>
          <div className="partners-logos-grid">
            {airConditioningLogos.map((logo, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={logo} 
                  alt={`Air Conditioning Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners

