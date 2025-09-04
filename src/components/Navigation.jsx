import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

function Navigation() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="absolute top-4 left-4 right-4 z-20 bg-white/50 backdrop-blur-sm shadow-2xl rounded-lg text-black">
    <div className="px-6 py-4 lg:px-10 lg:py-5">
      <div className="flex justify-between items-center">
        {/* Left Section - Logo and Brand */}
        <div className="flex items-center space-x-1">
          <Logo className="w-40 " />
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex items-center space-x-2 z-100">
          <Link to="/home" className={`px-3 py-2 text-sm font-medium rounded-md ${isActive('/home') ? 'underline' : ''}`}>
            Inicio
          </Link>
          <Link to="/information" className={`px-3 py-2 text-sm font-medium ${isActive('/information') ? 'underline' : ''}`}>
            Información
          </Link>
          <Link to="/technologies" className={`px-3 py-2 text-sm font-medium ${isActive('/technologies') ? 'underline' : ''}`}>
            Tecnologías
          </Link>
          <Link to="/activities" className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">
            Actividades
          </Link>
          <a href="#" className="px-3 py-2 text-sm font-medium hover:text-white/80 transition-colors">
            Tiendas
          </a>
          <span>|</span>
          <a href="#" className="px-3 py-2 text-sm font-medium  hover:text-white/80 transition-colors">
            Compra en Línea
          </a>
        </div>

       
      </div>
    </div>
  </nav>
  )
}

export default Navigation
