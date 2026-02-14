import { useLanguage } from '../context/LanguageContext'
import { useBrand } from '../context/BrandContext'
import { content } from '../data/content'
import PartnerCategory from './PartnerCategory'
import './Partners.css'

const Partners = () => {
  const { language } = useLanguage()
  const { selectBrand } = useBrand()
  const t = content[language]

  // Available brand names
  const availableBrands = [
    'Schneider Electric',
    'ABB',
    'Legrand',
    'BTicino',
    'CHINT',
    '3M',
    'Elios',
    'Elsewedy',
    'Engineering Home'
  ]

  // Function to detect brand name from logo path/filename
  const detectBrandFromLogo = (logoPath) => {
    const filename = logoPath.toLowerCase()
    
    // Direct mappings based on filename patterns
    if (filename.includes('elsewedy')) return 'Elsewedy'
    if (filename.includes('3m') || filename.includes('3-m')) return '3M'
    if (filename.includes('schneider')) return 'Schneider Electric'
    if (filename.includes('abb')) return 'ABB'
    if (filename.includes('legrand')) return 'Legrand'
    if (filename.includes('bticino')) return 'BTicino'
    if (filename.includes('chint')) return 'CHINT'
    if (filename.includes('elios')) return 'Elios'
    if (filename.includes('engineering') || filename.includes('home')) return 'Engineering Home'
    
    // Manual mappings for specific logos (you can expand this)
    const manualMap = {
      '/assets/cables/Elsewedy_Electric_Logo.svg.png': 'Elsewedy',
      '/assets/data_cables/Elsewedy_Electric_Logo.svg.png': 'Elsewedy',
      '/assets/insulation/426-4264739_3m-logo-cmyk-3m-logo.png': '3M',
      '/assets/insulation/5F4B5882-0D03-4A78-A854-278E9365F91F__36543-1259x1280.png': '3M',
    }
    
    return manualMap[logoPath] || null
  }

  const handleLogoClick = (logoPath) => {
    const brandName = detectBrandFromLogo(logoPath)
    if (brandName) {
      selectBrand(brandName)
      // Scroll to brands section
      setTimeout(() => {
        const brandsSection = document.getElementById('brands')
        if (brandsSection) {
          brandsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

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
        
        <PartnerCategory 
          title={t.partners.cablesTitle} 
          logos={cablesLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />

        <PartnerCategory 
          title={t.partners.panelsTitle} 
          logos={panelsLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />

        <PartnerCategory 
          title={t.partners.wiringTitle} 
          logos={wiringLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />

        <PartnerCategory 
          title={t.partners.pvcTitle} 
          logos={pvcLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />

        <PartnerCategory 
          title={t.partners.emtTitle} 
          logos={emtLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />

        <PartnerCategory 
          title={t.partners.dataCablesTitle} 
          logos={dataCablesLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />

        <PartnerCategory 
          title={t.partners.insulationTitle} 
          logos={insulationLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />

        <PartnerCategory 
          title={t.partners.airConditioningTitle} 
          logos={airConditioningLogos} 
          onLogoClick={handleLogoClick} 
          detectBrand={detectBrandFromLogo} 
        />
      </div>
    </section>
  )
}

export default Partners

