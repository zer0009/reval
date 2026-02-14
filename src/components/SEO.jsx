import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'

const SEO = () => {
  const { language } = useLanguage()
  const t = content[language]

  useEffect(() => {
    // Update document title
    document.title = language === 'ar' 
      ? 'ريفال للتوريدات الكهربائية | Reval Electrical Supplies & Contracting'
      : 'Reval Electrical Supplies & Contracting | Electrical Supplies Egypt'

    // Update meta description
    const description = language === 'ar'
      ? 'شركة ريفال للتوريدات الكهربائية والمقاولات - توريد وتركيب المواد الكهربائية، أعمال التركيبات الكهربائية، التكييف، اللوحات الكهربائية، الكابلات، القواطع. خدمة 24/7 في مصر.'
      : 'Reval Electrical Supplies & Contracting - Leading electrical supplies, installation works, air conditioning, electrical panels, cables, circuit breakers. 24/7 service in Egypt.'

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Update or create meta keywords
    const keywords = language === 'ar'
      ? 'ريفال, توريدات كهربائية, مقاولات كهربائية, لوحات كهربائية, كابلات كهربائية, قواطع كهربائية, تركيب كهرباء, تكييف, مواد كهربائية مصر, شركات كهرباء مصر, توريدات كهربائية القاهرة'
      : 'Reval, electrical supplies, electrical contracting, electrical panels, electrical cables, circuit breakers, electrical installation, air conditioning, electrical materials Egypt, electrical companies Egypt, electrical supplies Cairo'

    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', keywords)

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: t.companyName },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://reval-eg.com/' },
      { property: 'og:image', content: 'https://reval-eg.com/assets/Logo.png' },
      { property: 'og:locale', content: language === 'ar' ? 'ar_EG' : 'en_US' },
      { property: 'og:locale:alternate', content: language === 'ar' ? 'en_US' : 'ar_EG' },
      { property: 'og:site_name', content: 'Reval Electrical Supplies' }
    ]

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', tag.property)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', tag.content)
    })

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://reval-eg.com/' },
      { name: 'twitter:title', content: t.companyName },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://reval-eg.com/assets/Logo.png' }
    ]

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', tag.name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', tag.content)
    })

    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ElectricalContractor',
      name: t.companyName,
      alternateName: t.companyNameShort,
      description: description,
      url: window.location.origin,
      logo: `${window.location.origin}/assets/Logo.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: language === 'ar' ? '18 شارع جسر السويس (برج الزهور)' : '18 Gesr El Suez Street (Al-Zahour Tower)',
        addressLocality: language === 'ar' ? 'مصر الجديدة - القاهرة' : 'Heliopolis - Cairo',
        addressCountry: 'EG'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+20-1099529641',
        contactType: 'customer service',
        areaServed: 'EG',
        availableLanguage: ['Arabic', 'English']
      },
      sameAs: [],
      areaServed: {
        '@type': 'Country',
        name: 'Egypt'
      },
      serviceType: [
        'Electrical Supplies',
        'Electrical Installation',
        'Air Conditioning Installation',
        'Electrical Panel Installation',
        'Cable Installation'
      ],
      foundingDate: '2022',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '50-100'
      }
    }

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

  }, [language, t])

  return null
}

export default SEO
