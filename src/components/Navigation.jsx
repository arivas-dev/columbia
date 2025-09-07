import { useState } from 'react'
import Logo from './Logo'

function Navigation({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (sectionId) => activeSection === sectionId

  const scrollToSection = (sectionId) => {
    const sectionMap = {
      'home': 1,
      'information': 2,
      'technologies': 3,
      'activities': 4,
      'stores': 5
    }
    
    const sectionIndex = sectionMap[sectionId]
    if (sectionIndex !== undefined) {
      const container = document.querySelector('.snap-container')
      if (container) {
        const sectionHeight = window.innerHeight
        container.scrollTo({
          top: sectionHeight * sectionIndex,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav className="absolute top-4 left-4 right-4 z-20 bg-white/50 backdrop-blur-sm shadow-2xl rounded-lg text-black">
      <div className="px-6 py-4 lg:px-10 lg:py-5">
        <div className="flex justify-between items-center">
          
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Logo className="w-40" />
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('home') ? 'underline' : ''}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('information')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('information') ? 'underline' : ''}`}
            >
              Información
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('technologies') ? 'underline' : ''}`}
            >
              Tecnologías
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('activities') ? 'underline' : ''}`}
            >
              Actividades
            </button>
            <button 
              onClick={() => scrollToSection('stores')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('stores') ? 'underline' : ''}`}
            >
              Tiendas
            </button>
            <span>|</span>
            <a href="#" className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors">
              Compra en Línea
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-2 lg:hidden">
            <button 
              onClick={() => { scrollToSection('home'); setMenuOpen(false); }}
              className={`px-3 py-2 text-sm font-medium text-left transition-colors ${isActive('home') ? 'underline' : ''}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => { scrollToSection('information'); setMenuOpen(false); }}
              className={`px-3 py-2 text-sm font-medium text-left transition-colors ${isActive('information') ? 'underline' : ''}`}
            >
              Información
            </button>
            <button 
              onClick={() => { scrollToSection('technologies'); setMenuOpen(false); }}
              className={`px-3 py-2 text-sm font-medium text-left transition-colors ${isActive('technologies') ? 'underline' : ''}`}
            >
              Tecnologías
            </button>
            <button 
              onClick={() => { scrollToSection('activities'); setMenuOpen(false); }}
              className={`px-3 py-2 text-sm font-medium text-left transition-colors ${isActive('activities') ? 'underline' : ''}`}
            >
              Actividades
            </button>
            <button 
              onClick={() => { scrollToSection('stores'); setMenuOpen(false); }}
                className={`px-3 py-2 text-sm font-medium text-left transition-colors ${isActive('stores') ? 'underline' : ''}`}
            >
              Tiendas
            </button>
            <span className="self-center">|</span>
            <a href="#" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-sm font-medium transition-colors">
              Compra en Línea
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
