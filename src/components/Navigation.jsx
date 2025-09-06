import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

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
            <Link to="/home" className={`px-3 py-2 text-sm font-medium rounded-md ${isActive('/home') ? 'underline' : ''}`}>
              Inicio
            </Link>
            <Link to="/information" className={`px-3 py-2 text-sm font-medium ${isActive('/information') ? 'underline' : ''}`}>
              Información
            </Link>
            <Link to="/technologies" className={`px-3 py-2 text-sm font-medium ${isActive('/technologies') ? 'underline' : ''}`}>
              Tecnologías
            </Link>
            <Link to="/activities" className={`px-3 py-2 text-sm font-medium ${isActive('/activities') ? 'underline' : ''}  `}>
              Actividades
            </Link>
            <Link to="/stores" className={`px-3 py-2 text-sm font-medium ${isActive('/stores') ? 'underline' : ''}`}>
              Tiendas
            </Link>
            <span>|</span>
            <a href="#" className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">
              Compra en Línea
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-2 lg:hidden">
            <Link to="/home" onClick={() => setMenuOpen(false)} className={`px-3 py-2 text-sm font-medium ${isActive('/home') ? 'underline' : ''}`}>
              Inicio
            </Link>
            <Link to="/information" onClick={() => setMenuOpen(false)} className={`px-3 py-2 text-sm font-medium ${isActive('/information') ? 'underline' : ''}`}>
              Información
            </Link>
            <Link to="/technologies" onClick={() => setMenuOpen(false)} className={`px-3 py-2 text-sm font-medium ${isActive('/technologies') ? 'underline' : ''}`}>
              Tecnologías
            </Link>
            <Link to="/activities" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">
              Actividades
            </Link>
            <a href="#" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">
              Tiendas
            </a>
            <span className="self-center">|</span>
            <a href="#" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">
              Compra en Línea
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
