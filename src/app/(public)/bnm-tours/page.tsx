import Image from "next/image";

export default function BnmToursPage() {
  const tourProperties = [
    {
      id: 1,
      name: "KharaKhorum Tour",
      location: "Дархан-Уул аймаг, Хонгор сум",
      price: "1050",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA1.png",
      day: "14",
      isSpecialPartner: true,
      isNew: true,
    },
    {
      id: 2,
      name: "Western Horizon Wings",
      location: "Улаанбаатар хот, Налайх дүүрэг",
      price: "1050",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA2.png",
      day: "14",
      isSpecialPartner: true,
      isNew: false,
    },
    {
      id: 3,
      name: "Eastern Echoes in Time",
      location: "Улаанбаатар хот, Сүхбаатар дүүрэг",
      price: "1050",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA3.png",
      day: "14",
      isSpecialPartner: false,
      isNew: true,
    },
    {
      id: 4,
      name: "Darkhan Inn /дуплекс хаус/",
      location: "Дархан-Уул аймаг, Хонгор сум",
      price: "1050",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA4.png",
      day: "14",
      isSpecialPartner: true,
      isNew: false,
    },
    {
      id: 5,
      name: "Black Moose-Хар Хандгайт",
      location: "Улаанбаатар хот, Чингэлтэй дүүрэг",
      price: "1050",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA5.png",
      day: "14",
      isSpecialPartner: false,
      isNew: true,
    },
    {
      id: 6,
      name: "Шаргаморьт 2 давхар хаус",
      location: "Улаанбаатар хот, Сүхбаатар дүүрэг",
      price: "1050",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA6.png",
      day: "14",
      isSpecialPartner: true,
      isNew: false,
    },
    {
      id: 7,
      name: "Хаадын тамга /хаус/",
      location: "Улаанбаатар хот, Налайх дүүрэг",
      price: "1050",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA7.png",
      day: "14",
      isSpecialPartner: false,
      isNew: true,
    },
    {
      id: 8,
      name: "Orshil House",
      location: "Улаанбаатар хот, Баянзүрх дүүрэг",
      price: "1050,000",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA8.png",
      day: "14",
      isSpecialPartner: true,
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">BNM Tours</h2>
            <p className="text-lg text-gray-600">
              Discover amazing properties and accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-3 right-3">
                    <button className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>

                <div className="p-1 mt-1">
                  <h3 className="font-bold text-gray-900 text-md mb-1 line-clamp-2">
                    {property.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-gray-500 text-sm">
                      6 days 5 nights
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-gray-900 text-lg">
                        ${property.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
