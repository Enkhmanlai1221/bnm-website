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

export default function Directional() {
  return (
    <div
      className="flex min-h-[80vh]"
      style={{
        backgroundImage: "url('/BNM_TOURS/BACKGROUND.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start self-start justify-center w-1/3 pl-28">
        <Image
          src={"/BNM_TOURS/ICON.png"}
          alt={"Icon"}
          width={300}
          height={300}
          className="object-cover"
        />
        <p className="text-3xl text-blue-900 font-bold">
          Directional Discoveries Tour
        </p>
        <p className="mt-4 text-md text-gray-600">
          Unlock the essence of Mongolia with our uniquely crafted directional
          tours. Each tour is a gateway to unparalleled experiences, offering
          the most efficient and comprehensive exploration of Mongolia's diverse
          landscapes, cultures, and wonders. Choose your direction, and let the
          adventure unfold.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center w-2/3">
        <div className="absolute top-56 left-28 w-[28rem] h-[22rem]">
          <Image
            src={directions[0].image}
            alt={directions[0].name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-20 right-68 w-[22rem] h-[20rem]">
          <Image
            src={directions[1].image}
            alt={directions[1].name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-56 right-28 w-[28rem] h-[22rem]">
          <Image
            src={directions[2].image}
            alt={directions[2].name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-14 right-68 w-[24rem] h-[21rem]">
          <Image
            src={directions[3].image}
            alt={directions[3].name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
