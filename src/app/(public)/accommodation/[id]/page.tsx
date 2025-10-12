import { Carosuel } from "@/components/carosuel/page";
import Image from "next/image";

export default function AccommodationDetailPage() {
  const dayTrips = [
    {
      id: 1,
      name: "Khogno Tarna NP",
      image: "/ACCOMMODATION/DAY_TRIPS1.png",
      size: "medium",
    },
    {
      id: 2,
      name: "Khustai Nuruu NP",
      image: "/ACCOMMODATION/DAY_TRIPS2.png",
      size: "wide",
    },
    {
      id: 3,
      name: "Chinggis Khaanii Khuree",
      image: "/ACCOMMODATION/DAY_TRIPS3.png",
      size: "medium",
    },
    {
      id: 4,
      name: "Terelj NP",
      image: "/ACCOMMODATION/DAY_TRIPS4.png",
      size: "wide",
    },
    {
      id: 5,
      name: "Genghis Khan Statue Complex",
      image: "/ACCOMMODATION/DAY_TRIPS5.png",
      size: "wide",
    },
  ];
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button className="text-gray-600 hover:text-gray-800 flex items-center">
              <span className="text-lg">&lt;</span>
              <span className="ml-1">Back</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Terelj National Park
                </h1>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">Day Trips</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  If you're looking for a place to get out of Ulaanbaatar and
                  really see some of Mongolia's natural beauty, Terelj National
                  Park is the perfect spot. It's only about an hour and a half
                  drive from the city, but it feels like a completely different
                  world.
                </p>
                <p className="mb-4">
                  The landscapes here are just stunning—huge rock formations,
                  green valleys, and the Tuul River winding through the park.
                  People come here to hike, camp, and even stay in ger camps
                  with local nomadic families, so you can really get a feel for
                  traditional Mongolian life while you're surrounded by nature.
                </p>
                <p>
                  One of the coolest things about Terelj is how peaceful it is.
                  You can ride horses through the park, take a quiet walk by the
                  river, or just sit and watch the clouds roll over the
                  mountains. There's plenty of space to just breathe and take it
                  all in.
                </p>
              </div>

              <Carosuel images={dayTrips.map((trip) => trip.image)} />
            </div>
            {/* Video Section */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                // poster="/detailplayer.png"
                preload="metadata"
              >
                <source src="/videos/terelj-park.mp4" type="video/mp4" />
                <source src="/videos/terelj-park.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
