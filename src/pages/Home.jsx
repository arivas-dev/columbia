import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import bannerHome from '../assets/banner-home.jpg'

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={bannerHome}
        alt="Columbia Trail Runner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Navbar */}
      <Navigation />

      {/* Play Button - Center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>

      {/* Slogan - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl ">
          <div>SHOES THAT</div>
          <div>GIVE THE TRAIL</div>
          <div>BLISTERS</div>
        </div>
      </div>
    </div>
  )
}

export default Home
