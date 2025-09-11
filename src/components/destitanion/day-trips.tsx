import Image from "next/image";

export function DayTrips() {
  const destinations = [
    { name: "Khogno Tarna NP", image: "/aglag.png", size: "medium" },
    { name: "Khustai Nuruu NP", image: "/khustai.png", size: "wide" },
    { name: "Chinggis Khaanii Khuree", image: "/chinigs.png", size: "medium" },
    { name: "Terelj NP", image: "/terelj.png", size: "wide" },
    {
      name: "Genghis Khan Statue Complex",
      image: "/khuree.png",
      size: "wide",
    },
  ];

  const getCardClasses = (size: string) => {
    switch (size) {
      case "wide":
        return "col-span-2 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getCardHeight = (size: string) => {
    switch (size) {
      case "wide":
        return "h-64";
      case "tall":
        return "h-[32rem]";
      case "medium":
        return "h-64";
      default:
        return "h-64";
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-left">
          Day Trips
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[256px]">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`group relative overflow-hidden ${getCardClasses(destination.size)} ${getCardHeight(destination.size)} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold drop-shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  {destination.name}
                </h3>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
