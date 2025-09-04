import Logo from '../components/Logo'

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/0818-refactor_catbanrun_v2_MD?$aem_pjpeg$"
        alt="Columbia Trail Runner"
        className="absolute inset-0 w-full h-full object-cover object-center z-10"
      />

      {/* Logo (único elemento con posición absoluta) */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center space-x-4">
          <Logo className="text-white w-md" />
        </div>
      </div>

      {/* Contenedor principal en flex (ocupa toda la pantalla) */}
      <div className="flex flex-col justify-between h-screen px-20 py-8 pt-20 relative z-20">
        {/* Top bar (Dropdown alineado a la derecha) */}
        <div className="flex justify-end">
          <div className="relative flex justify-center">
            <button className="bg-white min-w-56 text-black px-8 py-1 rounded-full text-base font-bold hover:bg-gray-50 transition-colors border border-black">
              Selecciona tu país
              <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-12 bg-black rounded-lg shadow-lg min-w-56 lg:min-w-64 py-2">
              {[
                'Guatemala', 'El Salvador', 'Honduras', 'Nicaragua',
                'Costa Rica', 'Panamá', 'República Dominicana', 'Venezuela'
              ].map((country) => (
                <div
                  key={country}
                  className={`px-2 text-center py-2 text-white font-semibold text-base cursor-pointer hover:bg-[#4d4d4d] rounded-md mx-2`}
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slogan en parte inferior izquierda */}
        <div className="text-white font-extrabold text-6xl md:text-7xl lg:text-7xl">
          <div>SHOES THAT</div>
          <div>GIVE THE TRAIL</div>
          <div>BLISTERS</div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
