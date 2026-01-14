import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useBrand } from '../context/BrandContext'
import { content } from '../data/content'
import './Brands.css'

const Brands = () => {
  const { language } = useLanguage()
  const { selectedBrand, clearBrand } = useBrand()
  const t = content[language]
  const brandSectionRef = useRef(null)

  // Brand data - Schneider first as requested
  const brands = [
    {
      name: 'Schneider Electric',
      folder: 'schneider',
      images: [
        '045666_SE_2_369.jpg',
        '056939N_SE_gen_369.jpg',
        '60180_main_369.jpg',
        '61364_main_web_369.jpg',
        '7577_main_369.jpg',
        'A9HV318XNSX250_A9HV324XNSX250_Door close_369.jpg',
        'EZ9E212S2S_369.jpg',
        'Gamme XB5_369.jpg',
        'GV3L65_Image_369.jpg',
        'KERLOCH_ODA4_FH01_26-09_000888_369.jpg',
        'LMR5210001+LMR0100001+LMR7253001_369.jpg',
        'PB120807_369.jpg',
        'XB7_635_RPFJR18001_369.jpg'
      ]
    },
    {
      name: 'ABB',
      folder: 'ABB',
      images: [
        'e3_famiglia_2.png',
        'erc-products-v3-min.png',
        'formula-dsa.jpg',
        'modular-din-rail-products_395x245.jpg'
      ]
    },
    {
      name: 'Legrand',
      folder: 'legrand',
      images: [
        'legrand product 02.png'
      ]
    },
    {
      name: 'BTicino',
      folder: 'bticino',
      images: [
        'bticino products 02.png'
      ]
    },
    {
      name: 'CHINT',
      folder: 'chint',
      images: [
        'NB1-63-D63-179766-MCB-9-1280x1280.jpeg',
        'NL1-63 DBAX-63A-2P-RCCB.png.thumb.319.319.png',
        'NM8N-125S 4P-MCCB-1.png.thumb.319.319.png',
        'UVT-X1-Accessories (Final Power Distribution).png.thumb.319.319.png'
      ]
    },
    {
      name: '3M',
      folder: '3M',
      images: [
        '3m-cable-accessories_cc.webp',
        '3m-electrical-supplies_cc.webp',
        '3m-electrical-tapes_cc.jpg',
        '3m-fire-barrier_cc.jpg'
      ]
    },
    {
      name: 'Elios',
      folder: 'elios',
      images: [
        '100-45_940x.webp',
        'BULB_A55_6W_9W-cool_940x.webp',
        'CANDLE_C37_5W-Warm_940x.webp',
        'cool_951edb11-e29e-4f1d-a58a-0ce00028a5eb_940x.webp',
        'DOWNLIGHTROUND6W-PlasticBodyCool_940x.webp',
        'FLOODLIGHT-150W--Cool_940x.webp',
        'fluorescentG13_940x.webp',
        'PANEL_60X60CM_40W-Cool_940x.webp',
        'PVCinsulatingtape-red_940x.webp',
        'spot-kit-30w_940x.webp',
        'warm_f460b08e-bc86-467d-a50d-a9724b502041_940x.webp'
      ]
    },
    {
      name: 'Elsewedy',
      folder: 'elsewedy',
      images: [
        '105008-_1_223x223.avif',
        '105691-_1_223x223.avif',
        '170727-MR165WDayLight_4_223x223.webp',
        '180605_EP081124EGSW001_1_223x223.webp',
        '180615_223x223.avif',
        '212549_223x223.avif',
        '26140-BulaE14WarmLight5W_4_223x223.avif',
        'EL320701113-3_223x223.avif',
        'LoudspeakerWire2_.75Red_2_223x223.avif',
        'wires_223x223.avif'
      ]
    },
    {
      name: 'Engineering Home',
      folder: 'engineering home',
      images: [
        '1.jpg',
        '19.jpg',
        '3 (1).jpg',
        '3.jpg',
        '34.jpg'
      ]
    }
  ]

  // Filter brands based on selection
  const filteredBrands = selectedBrand 
    ? brands.filter(brand => brand.name === selectedBrand)
    : brands

  // Scroll to the selected brand section when it changes
  useEffect(() => {
    if (selectedBrand && brandSectionRef.current) {
      setTimeout(() => {
        brandSectionRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }, 300)
    }
  }, [selectedBrand])

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="brands-header">
          <h2 className="brands-title">
            <svg className="lightning-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
            </svg>
            {t.brands.title}
          </h2>
          <p className="brands-subtitle">{t.brands.subtitle}</p>
          {selectedBrand && (
            <div className="brand-filter-indicator">
              <span>
                {language === 'ar' ? `عرض: ${selectedBrand}` : `Showing: ${selectedBrand}`}
              </span>
              <button onClick={() => clearBrand()} className="clear-filter-btn">
                {language === 'ar' ? 'عرض الكل' : 'Show All'}
              </button>
            </div>
          )}
        </div>

        {filteredBrands.map((brand, index) => (
          <div 
            key={index} 
            ref={selectedBrand === brand.name ? brandSectionRef : null}
            className={`brand-section brand-${brand.folder.toLowerCase().replace(/\s+/g, '-')}-section ${selectedBrand === brand.name ? 'brand-selected' : ''}`}
          >
            <h3 className="brand-section-title">
              <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
              </svg>
              {brand.name}
            </h3>
            <div className={`brand-images-scroll ${brand.images.length < 5 ? 'brand-images-center' : ''}`}>
              {brand.images.length > 0 ? (
                brand.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="brand-image-card">
                    <img
                      src={`/assets/brands/${brand.folder}/${image}`}
                      alt={`${brand.name} - ${image}`}
                      className="brand-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                ))
              ) : (
                <div className="brand-image-card">
                  <img
                    src={`/assets/brands/${brand.folder}/logo.png`}
                    alt={brand.name}
                    className="brand-image"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.target
                      const folder = brand.folder
                      const alternatives = [
                        `/assets/brands/${folder}/logo.jpg`,
                        `/assets/brands/${folder}/brand.png`,
                        `/assets/brands/${folder}/brand.jpg`
                      ]
                      let currentIndex = 0
                      const tryNext = () => {
                        if (currentIndex < alternatives.length) {
                          img.src = alternatives[currentIndex]
                          currentIndex++
                        } else {
                          img.style.display = 'none'
                        }
                      }
                      img.onerror = tryNext
                      tryNext()
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands
