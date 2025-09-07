import { useState, useEffect, useRef } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Home from './Home'
import Information from './Information'
import Technologies from './Technologies'
import Activities from './Activities'
import Stores from './Stores'

function LandingPage() {
  const [showNavigation, setShowNavigation] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  
  const heroRef = useRef(null)
  const homeRef = useRef(null)
  const informationRef = useRef(null)
  const technologiesRef = useRef(null)
  const activitiesRef = useRef(null)
  const storesRef = useRef(null)

  const sections = [
    { ref: heroRef, id: 'hero', name: 'Hero' },
    { ref: homeRef, id: 'home', name: 'Inicio' },
    { ref: informationRef, id: 'information', name: 'Información' },
    { ref: technologiesRef, id: 'technologies', name: 'Tecnologías' },
    { ref: activitiesRef, id: 'activities', name: 'Actividades' },
    { ref: storesRef, id: 'stores', name: 'Tiendas' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.snap-container')
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height

      // Encontrar la sección más visible
      let mostVisibleSection = 'hero'
      let maxVisibility = 0

      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          const sectionRect = ref.current.getBoundingClientRect()
          const sectionTop = sectionRect.top - containerTop
          const sectionBottom = sectionRect.bottom - containerTop
          
          // Calcular qué tan visible está la sección
          const visibleTop = Math.max(0, sectionTop)
          const visibleBottom = Math.min(containerHeight, sectionBottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const visibility = visibleHeight / containerHeight

          if (visibility > maxVisibility) {
            maxVisibility = visibility
            mostVisibleSection = id
          }
        }
      })

      setActiveSection(mostVisibleSection)
      
      // Mostrar navigation después del hero
      if (mostVisibleSection !== 'hero') {
        setShowNavigation(true)
      } else {
        setShowNavigation(false)
      }
    }
    
    // Verificar estado inicial
    handleScroll()
    
    // Usar scroll event en el contenedor principal
    const container = document.querySelector('.snap-container')
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="snap-container snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <div ref={heroRef} className="snap-start h-screen">
        <Hero />
      </div>
      
      {showNavigation && (
        <div className="fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out">
          <Navigation activeSection={activeSection} />
        </div>
      )}
      
      <div ref={homeRef} className="snap-start h-screen">
        <Home />
      </div>
      
      <div ref={informationRef} className="snap-start h-screen">
        <Information />
      </div>
      
      <div ref={technologiesRef} className="snap-start h-screen">
        <Technologies />
      </div>
      
      <div ref={activitiesRef} className="snap-start h-screen">
        <Activities />
      </div>
      
      <div ref={storesRef} className="snap-start h-screen">
        <Stores />
      </div>
    </div>
  )
}

export default LandingPage
