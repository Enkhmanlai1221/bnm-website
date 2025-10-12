import Image from "next/image";

export default function VisitUlaanbaatarPage() {
  const places = [
    {
      id: 1,
      image: "/VISIT_UB/VISIT1.png",
      title: "Recommended",
      size: "wide",
    },
    {
      id: 2,
      image: "/VISIT_UB/VISIT2.png",
      title: "Recommended",
      size: "wide",
    },
    {
      id: 3,
      image: "/VISIT_UB/VISIT3.png",
      title: "Recommended",
      size: "medium",
    },
    {
      id: 4,
      image: "/VISIT_UB/VISIT4.png",
      title: "Recommended",
      size: "medium",
    },
    {
      id: 5,
      image: "/VISIT_UB/VISIT5.png",
      title: "Recommended",
      size: "medium",
    },
  ];
  const getCardInformationClasses = (size: string) => {
    switch (size) {
      case "wide":
        return "col-span-3 row-span-1";
      case "medium":
        return "col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getCardInformationHeight = (size: string) => {
    switch (size) {
      case "wide":
        return "h-72";
      case "tall":
        return "h-[36rem]";
      case "medium":
        return "h-72";
      case "large":
        return "h-[36rem]";
      default:
        return "h-72";
    }
  };
  return (
    <div className="min-h-screen">
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 auto-rows-[18rem] gap-4">
            {places.map((place, index) => (
              <div
                key={place.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(place.size)} ${getCardInformationHeight(place.size)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="py-20 bg-rgba(174, 197, 246, 0.7) mb-16 relative"
        style={{ backgroundColor: "#abc2f3" }}
      >
        <div className="absolute bottom-0 left-8 w-[20rem] h-[20rem] flex-shrink-0 z-10">
          <Image
            src="/VISIT_UB/ANAR.png"
            alt="Virtual Tour Guide Anar"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-transparent bg-clip-text">
                  Virtual City Tour
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The virtual Tour Guide Anar from BraveNewMongoliaTours is here
                  to guide you through the most optimal itinerary to experience
                  our Capital City.
                </p>
                <div className="flex justify-end">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 uppercase tracking-wide">
                    See Details
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden">
              <Image
                src="/VISIT_UB/VIDEO.png"
                alt="Virtual City Tour Video"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
