export const ActivityCard = ({ title, date, image, onClick }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative cursor-pointer" onClick={onClick}>
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