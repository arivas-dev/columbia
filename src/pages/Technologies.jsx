import Navigation from '../components/Navigation'
import image from '../assets/shoes-3x.png'
import omnigrip from '../assets/logo-omnigrip.png'
import techlife from '../assets/logo-techlife.png'
import omniMax from '../assets/omnimax-logo.png'

function Technologies() {
  return (
    <div className="relative h-screen bg-white">
      {/* Navbar */}
      <Navigation />

      {/* Main Content */}
      <div className="flex h-full">
        {/* Left Column - Product Info */}
        <div className="w-1/2 p-8 pb-16 flex flex-col justify-center items-end justify-end">
          <div className="w-[">
            {/* Product Title */}
            <div className="w-full flex flex-col">
              <h1 className="text-4xl font-extrabold text-black mb-8 w-[70%]">
                KONOS TRILLIUM ATR™
              </h1>
              {/* Product Specifications */}
              <div className="space-y-1 mb-8 font-medium w-[90%]">
                <div className="text-gray-700">
                  Peso: 9.2 onzas / 261.5 gramos (por zapato, talla 9 de hombre)
                </div>
                <div className="text-gray-700">
                  Altura total del recorrido: 27.5 mm talón / 17.5 mm punta
                </div>
                <div className="text-gray-700">
                  Caída del talón a la punta: 10 mm
                </div>
                <div className="text-gray-700">
                  Usos: Trail Running
                </div>
              </div>

            </div>



            {/* Technologies Section */}
            <div className="bg-black rounded-lg p-4">
              {/* Section Title */}
              <div className="text-center mb-6">
                <span className="text-white px-6 py-1 border border-white rounded-full text-sm font-medium">
                  Nuestras Tecnologías
                </span>
              </div>

              {/* Main Technology */}
              <div className="text-center mb-6">
                <img src={omniMax} alt="OMNI-MAX" className="w-[70%] h-10 mx-auto lg:w-[50%]" />
                <p className="text-white text-sm leading-relaxed mt-4 line-clamp-3 w-[80%] mx-auto">
                  Sistema adaptable de amortiguación y tracción, con espuma de respuesta extra-ligera, para una estabilidad mejorada y una flexibilidad dinámica para terrenos variables.
                </p>
              </div>

              {/* Sub-Technologies */}
              <div className="grid grid-cols-2 gap-4 w-[70%] mx-auto">
                {/* TECH LITE */}
                <div className="text-center">
                  <div className="rounded-lg p-2 mb-3 flex justify-center items-center">
                    <img src={techlife} alt="TECH LIFE" className="w-16 h-16" />
                  </div>
                  <p className="text-white text-xs leading-relaxed">
                    Amortiguación liviana más avanzada para un rendimiento cómodo dentro y fuera del sendero.
                  </p>
                </div>

                {/* OMNI-GRIP */}
                <div className="text-center">
                  <div className="rounded-lg p-1 mb-3 flex justify-center items-center">
                    <img src={omnigrip} alt="OMNI-GRIP" className="w-16 h-16" />
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
        <div className="w-1/2 relative">
          <img
            src={image}
            alt="Columbia Trail Running Shoe"
            className="w-full h-full object-cover"
          />

          {/* Call to Action Button */}
          <div className="absolute bottom-8 right-8">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Compra Aquí
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
