import Navigation from '../components/Navigation'
import image from '../assets/shoes-3x.png'
import omnigrip from '../assets/logo-omnigrip.png'
import techlife from '../assets/logo-techlife.png'
import omniMax from '../assets/omnimax-logo.png'

function Technologies() {
  return (
    <div className="relative h-full w-full bg-white">

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Column - Product Info */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 pb-18 flex flex-col justify-end items-center lg:items-centr">
          <div className="pb-0 sm:pb-0 lg:pb-4">
            {/* Product Title */}
            <div className="w-full flex flex-col">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-6 lg:mb-8 w-full text-center lg:text-left">
                KONOS TRILLIUM ATR™
              </h1>
              {/* Product Specifications */}
              <div className="space-y-1 mb-6 lg:mb-8 font-medium w-full lg:w-[90%]">
                <div className="text-gray-700 text-sm sm:text-base">
                  - Peso: 9.2 onzas / 261.5 gramos (por zapato, talla 9 de hombre)
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  - Altura total del recorrido: 27.5 mm talón / 17.5 mm punta
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  - Caída del talón a la punta: 10 mm
                </div>
                <div className="text-gray-700 text-sm sm:text-base">
                  - Usos: Trail Running
                </div>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="bg-black rounded-lg p-3 sm:p-4 max-w-2xl">
              {/* Section Title */}
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-white px-4 sm:px-6 py-1 border border-white rounded-full text-xs sm:text-sm font-medium">
                  Nuestras Tecnologías
                </span>
              </div>

              {/* Main Technology */}
              <div className="text-center mb-4 sm:mb-6">
                <img src={omniMax} alt="OMNI-MAX" className="w-[80%] sm:w-[70%] h-8 sm:h-10 mx-auto lg:w-[50%]" />
                <p className="text-white text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4 line-clamp-3 w-[90%] sm:w-[80%] mx-auto">
                  Sistema adaptable de amortiguación y tracción, con espuma de respuesta extra-ligera, para una estabilidad mejorada y una flexibilidad dinámica para terrenos variables.
                </p>
              </div>

              {/* Sub-Technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-[90%] sm:w-[70%] mx-auto">
                {/* TECH LITE */}
                <div className="text-center">
                  <div className="rounded-lg p-2 mb-2 sm:mb-3 flex justify-center items-center">
                    <img src={techlife} alt="TECH LIFE" className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                  <p className="text-white text-xs leading-relaxed">
                    Amortiguación liviana más avanzada para un rendimiento cómodo dentro y fuera del sendero.
                  </p>
                </div>

                {/* OMNI-GRIP */}
                <div className="text-center">
                  <div className="rounded-lg p-1 mb-2 sm:mb-3 flex justify-center items-center">
                    <img src={omnigrip} alt="OMNI-GRIP" className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                  <p className="text-white text-xs leading-relaxed">
                    Amortiguación liviana más avanzada para un rendimiento cómodo dentro y fuera del sendero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Product Image */}
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-auto">
          <img
            src={image}
            alt="Columbia Trail Running Shoe"
            className="w-full h-full object-cover"
          />

          {/* Call to Action Button */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
            <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Compra Aquí
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
