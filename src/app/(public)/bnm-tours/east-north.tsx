import Image from "next/image";

const directions = [
  {
    name: "Western Horizon Wings",
    date: "May 23 – May 30,  2024",
    days: 13,
    price: 1050,
    image: "/BNM_TOURS/WESTER_HORIZON_WINGS.png",
  },
  {
    name: "Numinous Northern Reindeer",
    date: "May 23 – May 30,  2024",
    days: 13,
    price: 1050,
    image: "/BNM_TOURS/NORTHERN_REINDEER.png",
  },
  {
    name: "Eastern Echoes in Time",
    date: "May 23 – May 30,  2024",
    days: 13,
    price: 1050,
    image: "/BNM_TOURS/EATERN_ECHOES.png",
  },
  {
    name: "Singing Southern Dunes",
    date: "May 23 – May 30,  2024",
    days: 13,
    price: 1050,
    image: "/BNM_TOURS/SOUTHERN_DUNES.png",
  },
];

export default function BnmToursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <div className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="relative mb-16">
              <div className="w-[396px] h-[396px] relative border-2 border-blue-300 rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2">
                  <Image
                    src={directions[1].image}
                    alt={directions[1].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1/2">
                  <Image
                    src={directions[3].image}
                    alt={directions[3].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-0 top-0 w-1/2 h-full">
                  <Image
                    src={directions[0].image}
                    alt={directions[0].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute right-0 top-0 w-1/2 h-full">
                  <Image
                    src={directions[2].image}
                    alt={directions[2].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
