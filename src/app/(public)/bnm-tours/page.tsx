import { DaylightDiscoveries } from "@/components/bnm-tours/daylight-discoveries";
import Directional from "@/components/bnm-tours/directional";
import Image from "next/image";

const InformationCards = [
  {
    name: "Travel Experiences",
    description:
      "Step into a one-of-a-kind journey, crafted with care by a family-run business that offers only one tour at a time. Experience Mongolia’s heart and soul through cultural immersion, eco-friendly practices, and personalized attention.",
    image: "/BNM_TOURS/walking.svg",
  },
  {
    name: "Personalized Storytelling nin Real Time",
    description:
      "Your journey, your story—professionally captured by our expert cameraguide. Receive stunning, edited visuals delivered daily, turning every moment of your adventure into a shareable masterpiece.",
    image: "/BNM_TOURS/camera.svg",
  },
  {
    name: "A Journey That Lasts Beyond the Adventure",
    description:
      "Every tour you take contributes to our growing global database, sharing Mongolia’s breathtaking landscapes, rich culture, and unique stories with the world. Together, we preserve and showcase the beauty of this extraordinary land.",
    image: "/BNM_TOURS/logo.svg",
  },
];

const signatureTours = [
  {
    name: "Nomadic Vagabond Venture",
    date: "May 23 – May 30, 2024",
    days: "13 Days",
    price: "Starting from: $1050",
    image: "/BNM_TOURS/NOMADIC_VAGABOND.png",
  },
  {
    name: "Nomadic Vagabond Venture",
    date: "May 23 – May 30, 2024",
    days: "13 Days, 12 Nights",
    price: "Starting from: $1050",
    image: "/BNM_TOURS/NOMADIC_VAGABOND.png",
  },
  {
    name: "Nomadic Vagabond Venture",
    date: "May 23 – May 30, 2024",
    days: "13 Days",
    price: "Starting from: $1050",
    image: "/BNM_TOURS/NOMADIC_VAGABOND.png",
  },
];

const travelerSays = [
  {
    name: "Luke Walter",
    image: "/BNM_TOURS/TRAVELER_SAY1.png",
    quote:
      "Traveling with Brave New Mongolia Tours and having a personal cameraman was a game-changer. The professionalism and skill of the cameraman elevated my travel experience. Every frame captured told a story, making my journey through Mongolia not only memorable but visually stunning. Highly recommend this unique service",
  },
  {
    name: "Jane Doe",
    image: "/BNM_TOURS/TRAVELER_SAY2.png",
    quote:
      "Traveling with Brave New Mongolia Tours and having a personal cameraman was a game-changer. The professionalism and skill of the cameraman elevated my travel experience. Every frame captured told a story, making my journey through Mongolia not only memorable but visually stunning. Highly recommend this unique service",
  },

  {
    name: "John Doe",
    image: "/BNM_TOURS/TRAVELER_SAY3.png",
    quote:
      "Traveling with Brave New Mongolia Tours and having a personal cameraman was a game-changer. The professionalism and skill of the cameraman elevated my travel experience. Every frame captured told a story, making my journey through Mongolia not only memorable but visually stunning. Highly recommend this unique service",
  },
];

export default function BnmToursPage() {
  return (
    <div className="min-h-screen mb-20">
      <Directional />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {InformationCards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col items-center gap-4 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-12 h-12 rounded-full ">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover "
                />
              </div>
              <h2 className="text-2xl font-bold">{card.name}</h2>
              <p className="text-lg text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Signature Tours
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore our 6 main tours, each a unique 6-8 day adventure. Immerse
            yourself in diverse experiences, discovering the treasures of
            Mongolia with every step for an unforgettable journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureTours.map((tour: any, index: number) => (
            <div
              key={`${tour.name}-${index}`}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${tour.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative h-[17rem] w-full rounded-xl">
                <div className="absolute top-[6rem] inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight">
                      {tour.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm opacity-90">{tour.date}</p>
                      <p className="text-sm font-medium">{tour.days}</p>
                      {tour.price && (
                        <p className="text-sm font-semibold text-yellow-300">
                          {tour.price}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Skybound Escapes
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Fly into a world of wonders with our 3 Short Tours. These 3-4 day
            expeditions offer quick yet immersive experiences, allowing you to
            witness the best of Mongolia from the sky and on the ground.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureTours.map((tour: any, index: number) => (
            <div
              key={`${tour.name}-${index}`}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${tour.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative h-[17rem] w-full rounded-xl">
                <div className="absolute top-[6rem] inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight">
                      {tour.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm opacity-90">{tour.date}</p>
                      <p className="text-sm font-medium">{tour.days}</p>
                      {tour.price && (
                        <p className="text-sm font-semibold text-yellow-300">
                          {tour.price}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <DaylightDiscoveries />
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cross-Route Expeditions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Can’t decide between the mountains and the desert? You don’t have
            to. Our Hybrid Tours let you experience Mongolia’s diverse
            landscapes in one seamless expedition.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureTours.map((tour: any, index: number) => (
            <div
              key={`${tour.name}-${index}`}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${tour.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative h-[17rem] w-full rounded-xl">
                <div className="absolute top-[6rem] inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight">
                      {tour.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm opacity-90">{tour.date}</p>
                      <p className="text-sm font-medium">{tour.days}</p>
                      {tour.price && (
                        <p className="text-sm font-semibold text-yellow-300">
                          {tour.price}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Every journey leaves a story. Here's what some of our guests had to
            say after experiencing Mongolia with us—unfiltered, heartfelt, and
            in their own words.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelerSays.map((data: any, index: number) => (
            <div
              key={`${data.name}-${index}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {data.quote}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900">
                      {data.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="relative overflow-hidden rounded-2xl mt-20 mb-8 bg-cover bg-center"
          style={{
            backgroundImage: "url('/START_JOURNEY/START_JOURNEY1.png')",
          }}
        >
          <div className="relative z-10 flex items-center min-h-[280px] lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
              <div className="relative flex items-end justify-end border border-white">
                <Image
                  src="/START_JOURNEY/START_JOURNEY2.png"
                  alt="Mongolian Guide"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center text-white space-y-6">
                <div className="pt-4">
                  <p className="text-2xl font-bold">
                    Discover Mongolia the right way guided by those who know it
                    best.
                  </p>
                  <p className="mt-4">
                    Let’s talk about how your adventure could unfold in the land
                    of eternal blue sky. From remote mountains to nomadic camps,
                    we offer flexible routes and authentic experiences designed
                    just for you.
                  </p>
                  <button className="relative group mt-6">
                    <Image
                      src="/START_JOURNEY/START_JOURNEY3.png"
                      alt="Start Your Journey Button"
                      width={200}
                      height={60}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
