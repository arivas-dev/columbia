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
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect()
        // Si el Hero está casi fuera del viewport (con margen)
        if (heroRect.bottom < 50) {
          setShowNavigation(true)
        } else {
          setShowNavigation(false)
        }
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
          <Navigation />
        </div>
      )}
      
      <div className="snap-start h-screen">
        <Home />
      </div>
      
      <div className="snap-start h-screen">
        <Information />
      </div>
      
      <div className="snap-start h-screen">
        <Technologies />
      </div>
      
      <div className="snap-start h-screen">
        <Activities />
      </div>
      
      <div className="snap-start h-screen">
        <Stores />
      </div>
    </div>
  )
}

export default LandingPage
