import Navigation from '../components/Navigation'
import act1 from '../assets/activities/act1.jpg'
import act2 from '../assets/activities/act2.png'
import act3 from '../assets/activities/act3.jpg'

function Activities() {
    return (
        <>
            <Navigation />
          

           

            <div className="relative h-full lg:h-screen bg-white flex flex-col justify-end">
                {/* Navbar */}

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center h-full mt-20 md:pb-14 md:mt-0 lg:mt-0 xl:mt-30 2xl:mt-10">
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center mb-10 sm:mb-12 lg:mb-16">
                        Nuestras Actividades
                    </h1>

        

                    {/* Activity Cards */}
                    <div className="mx-auto w-[90%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">

                            {/* Card 1: The Trail Runing Lab   */}
                            <ActivityCard title="Trail Running Lab" date="Octubre 5" image={act3} />



                            {/* Card 2: The Trail Camp */}
                            <ActivityCard title="Trail Camp" date="Octubre 26" image={act2} />

                            {/* Card 3: The Trail Experience */}
                            <ActivityCard title="The Trail Experience" date="Noviembre 15" image={act1} />



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ActivityCard = ({ title, date, image }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
            {/* Image Container */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 sm:h-100 lg:h-110 object-cover object-center brightness-55 contrast-125"
                />
                {/* Title Overlay - Centered */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[80%]">
                    <div className="bg-white rounded-full px-6 py-1 shadow-md text-center">
                        <span className="text-black font-bold text-lg">{title}</span>
                    </div>
                </div>
                {/* Date Overlay - Centered with dark background */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[40%]">
                    <div className=" rounded-full px-4 shadow-md border border-white text-center vertical-center">
                        <span className="text-white font-semibold text-md">{date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities
