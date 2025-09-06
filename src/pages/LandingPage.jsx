import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { useCountry } from '../hooks/useCountry'
import activitiesData from '../data/activities.json'
import columbia from '../assets/columbia-white.png'

function LandingPage() {
  const navigate = useNavigate()
  const { selectedCountry, selectCountry } = useCountry()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Orden específico de países
  const countryOrder = [
    'Guatemala', 'El Salvador', 'Honduras', 'Nicaragua',
    'Costa Rica', 'Panamá', 'República Dominicana', 'Venezuela'
  ]

  // Ordenar países según el orden especificado
  const orderedCountries = countryOrder.map(countryName => 
    activitiesData.countries.find(country => country.name === countryName)
  ).filter(Boolean)

  // Redirigir si ya hay un país seleccionado
  useEffect(() => {
    if (selectedCountry) {
      navigate('/home')
    }
  }, [selectedCountry, navigate])

  const handleCountrySelect = (country) => {
    selectCountry(country)
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/0818-refactor_catbanrun_v2_MD?$aem_pjpeg$"
        alt="Columbia Trail Runner"
        className="absolute inset-0 w-full h-full object-cover object-center z-10"
      />

      {/* Logo */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20">
        <div className="flex items-center">
          <img 
            src={columbia} 
            alt="Columbia" 
            className="w-60 h-auto sm:w-100 sm:h-auto lg:w-100 lg:h-auto xl:w-100   xl:h-auto" 
          />
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-20 h-screen flex flex-col sm:flex-col lg:flex-col">
        {/* Top bar - Dropdown */}
        <div className="flex justify-end p-4 sm:p-6 lg:p-8">
          <div className="relative">
            <button 
              className="bg-white text-black px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-bold hover:bg-gray-50 transition-colors border border-black whitespace-nowrap"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="hidden sm:inline">Selecciona tu país</span>
              <span className="sm:hidden">País</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 inline-block ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-10 sm:top-16 right-0 bg-black rounded-lg shadow-lg min-w-40 sm:min-w-48 lg:min-w-56 py-2 z-30">
                {orderedCountries.map((country) => (
                  <div
                    key={country.id}
                    className="px-3 py-2 text-white text-center font-semibold text-xs sm:text-sm lg:text-base cursor-pointer hover:bg-[#4d4d4d] rounded-md mx-2"
                    onClick={() => handleCountrySelect(country)}
                  >
                    {country.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Slogan - Centrado en móvil, izquierda abajo en desktop */}
        <div className="flex-1 flex items-center justify-center sm:items-end sm:justify-start px-4 sm:px-8 lg:px-20 pb-8 sm:pb-8 lg:pb-8">
          <div className="text-white font-extrabold text-center sm:text-left">
            <div className="text-6xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              <div>SHOES THAT</div>
              <div>GIVE THE TRAIL</div>
              <div>BLISTERS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
