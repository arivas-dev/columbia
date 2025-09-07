import Navigation from '../components/Navigation'
import act1 from '../assets/activities/act1.jpg'
import act2 from '../assets/activities/act2.png'
import act3 from '../assets/activities/act3.jpg'
import { ActivityCard } from '../components/AcrivityCard'
import activitiesData from '../data/activities.json'
import { useState } from 'react'

const imageMap = {
    'act1.jpg': act1,
    'act2.png': act2,
    'act3.jpg': act3
}

const ActivitiesList = ({ onActivitySelect }) => {
    return (
        <>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center mb-10 sm:mb-12 lg:mb-16">
                Nuestras Actividades
            </h1>
            <div className="mx-auto w-[90%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {activitiesData.countries.map((country) => (
                        country.activities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                title={activity.title}
                                date={activity.date}
                                image={imageMap[activity.image]}
                                onClick={() => onActivitySelect(activity)}
                            />
                        ))
                    ))}
                </div>
            </div>
        </>
    )
}

const ActivityDetail = ({ activity, onBack }) => {
    return (
        <>
            <div className="mx-auto w-[90%]">
                <div className="w-full h-full flex">
                    {/* Mapa (lado izquierdo) */}
                    <div className="w-2/5 h-full bg-gradient-to-br from-green-200 to-green-300 relative">
                        <div className="absolute inset-0 p-6">
                            <div className="w-full h-full relative">
                                <div className="absolute top-8 left-6 text-sm font-semibold text-green-800">Pacaya, 2552m</div>
                                <div className="absolute top-1/2 left-1/4 text-sm font-semibold text-green-800">Calderas</div>
                                <div className="absolute bottom-1/3 left-1/3 text-sm font-semibold text-green-800">San Francisco de Sales</div>
                                <div className="absolute bottom-8 right-1/4 text-sm font-semibold text-green-800">Parque Nacional Volcán de Pacaya</div>
                                <svg className="absolute inset-0 w-full h-full">
                                    <path
                                        d="M 50 80 Q 200 120 300 100 Q 400 140 500 120"
                                        stroke="#059669"
                                        strokeWidth="3"
                                        strokeDasharray="8,4"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Contenido derecho */}
                    <div className="w-3/5 h-full flex">
                        {/* Información (mitad izquierda) */}
                        <div className="w-1/2 bg-white p-6 flex flex-col justify-between">
                            <div>
                                <button
                                    onClick={onBack}
                                    className="mb-4 text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Regresar a las actividades
                                </button>

                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    {activity.title} by Columbia
                                </h1>

                                <p className="text-gray-600 mb-6">
                                    Experiencia de trail en El Salvador
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">📅 {activity.date || "Noviembre 15"}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">🕐 10:00 AM – 3:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">⭐ Moderado</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">🏁 El Salvador</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">📏 5 km</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">⬆️ 200 mt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Imagen (mitad derecha) */}
                        <div className="w-1/2 bg-gray-100">
                            <img
                                src={imageMap[activity.image]}
                                alt={activity.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Activities() {
    const [activitieSelected, setActivitieSelected] = useState(null)

    const handleActivitySelect = (activity) => {
        setActivitieSelected(activity)
    }

    const handleBackToActivities = () => {
        setActivitieSelected(null)
    }

    return (
        <div className="relative h-full w-full bg-white flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center h-full px-4">
                {activitieSelected ? (
                    <ActivityDetail
                        activity={activitieSelected}
                        onBack={handleBackToActivities}
                    />
                ) : (
                    <ActivitiesList onActivitySelect={handleActivitySelect} />
                )}
            </div>
        </div>
    )
}

export default Activities