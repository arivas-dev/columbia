import Navigation from '../components/Navigation'
import image1Section from '../assets/image-1-section.jpg'
import image2Section from '../assets/image-2-section.jpg'

function Information() {
  return (
    <div className="relative h-screen bg-white">
      {/* Navbar */}
      <Navigation />

      {/* Main Content */}
      <div className="flex h-full">
          {/* Left Section - Trail Runner Image and Text */}
            <div className=" h-full w-1/2">
            {/* Trail Runner Image heigth 70% */}
            <div className="relative h-[70%]">
            <img
                src={image1Section}
                alt="Columbia Trail Running Shoe"
                className="h-[100%] w-full object-cover "
              />
            </div>
            
            {/* Text Block */}
            <div className="bg-white p-6 rounded-lg shadow-sm h-[30%] flex flex-col justify-center w-[80%] mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sin miedo al barro, ni al polvo
              </h2>
              <p className="text-gray-700 leading-relaxed line-clamp-3">
                Haz que cualquier terreno se rinda con equipo diseñado para devorar rocas. Amortiguación ligera, agarre y estabilidad en todo tipo de superficies, kilómetro tras kilómetro.
              </p>
            </div>
          </div>

          {/* Right Section - Text and Product Image */}
          <div className="h-full w-1/2">
            {/* Text Block */}
            <div className="bg-white p-6 h-[40%] flex flex-col justify-end w-[75%] mx-auto line-clamp-3 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cada superficie es un sendero
              </h2>
              <p className="text-gray-700 leading-relaxed line-clamp-3">
                Está bien huir de tus problemas... si llevas el calzado correcto.
                Amortiguación ligera, agarre tenaz y estabilidad en todo tipo de terreno. Este calzado le sacan ampollas al sendero.
              </p>
            </div>
            
            {/* Product Image */}
            <div className="relative h-[60%]">
              <img
                src={image2Section}
                alt="Columbia Trail Running Shoe"
                className="h-[100%] w-full object-cover"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Information