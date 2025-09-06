import Navigation from '../components/Navigation'
import act1 from '../assets/activities/act1.jpg'
import act2 from '../assets/activities/act2.png'
import act3 from '../assets/activities/act3.jpg'
import { ActivityCard } from '../components/AcrivityCard'
import activitiesData from '../data/activities.json'

const imageMap = {
    'act1.jpg': act1,
    'act2.png': act2,
    'act3.jpg': act3
  }

function Activities() {
    return (
        <>
            <div className="relative h-full w-full bg-white flex flex-col justify-end">
                {/* Main Content */}
                <div className="flex flex-col items-center justify-center h-full mt-20 md:pb-14 md:mt-0 lg:mt-0 xl:mt-30 2xl:mt-10">
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center mb-10 sm:mb-12 lg:mb-16">
                        Nuestras Actividades
                    </h1>
                    {/* Activity Cards */}
                    <div className="mx-auto w-[90%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                            {activitiesData.countries.map((country) => (
                                country.activities.map((activity) => (
                                    <ActivityCard 
                                        key={activity.id} 
                                        title={activity.title} 
                                        date={activity.date} 
                                        image={imageMap[activity.image]} 
                                    />
                                ))
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   

export default Activities
