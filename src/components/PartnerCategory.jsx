import { useRef } from 'react'

const PartnerCategory = ({ title, logos, onLogoClick, detectBrand }) => {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="partner-category">
      <div className="category-header">
        <svg className="lightning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
        </svg>
        {title}
      </div>
      
      <div className="carousel-container">
        <button 
          className="carousel-arrow arrow-left" 
          onClick={() => scroll('left')}
          aria-label="Previous partners"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="partners-logos-grid" ref={scrollContainerRef}>
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="partner-logo-card"
              onClick={() => onLogoClick(logo)}
              style={{ cursor: detectBrand(logo) ? 'pointer' : 'default' }}
            >
              <img 
                src={logo} 
                alt={`Partner logo ${index + 1}`}
                className="partner-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow arrow-right" 
          onClick={() => scroll('right')}
          aria-label="Next partners"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PartnerCategory
