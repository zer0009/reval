import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'
import './Statistics.css'

const Statistics = () => {
  const { language } = useLanguage()
  const t = content[language]
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)

    useEffect(() => {
      if (!isVisible) return

      let startTime = null
      const startValue = 0
      const endValue = end

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        setCount(currentCount)

        if (progress < 1) {
          countRef.current = requestAnimationFrame(animate)
        } else {
          setCount(endValue)
        }
      }

      countRef.current = requestAnimationFrame(animate)

      return () => {
        if (countRef.current) {
          cancelAnimationFrame(countRef.current)
        }
      }
    }, [isVisible, end, duration])

    return (
      <span className="stat-number">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  const icons = [
    <svg key="clients" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-4 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
      <path d="M20 10v2h4v-2h-4zm-1.5-2c.83 0 1.5-.67 1.5-1.5S19.33 5 18.5 5 17 5.67 17 6.5 17.67 8 18.5 8z" fill="currentColor"/>
    </svg>,
    <svg key="projects" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" fill="currentColor"/>
    </svg>,
    <svg key="support" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
    </svg>,
    <svg key="experience" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
    </svg>
  ]

  return (
    <section ref={sectionRef} id="statistics" className="statistics">
      <div className="container">
        <div className="statistics-grid">
          {t.statistics.items.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{icons[index]}</div>
              <div className="stat-content">
                {stat.value ? (
                  <Counter 
                    end={stat.value} 
                    suffix={stat.suffix || ''}
                    prefix={stat.prefix || ''}
                  />
                ) : (
                  <span className="stat-number">{stat.text}</span>
                )}
                <h3 className="stat-label">{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
