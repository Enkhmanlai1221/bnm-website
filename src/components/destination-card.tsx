"use client";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  destination: IBeautifulPlace;
  index: number;
  type?: boolean;
  path: string;
}

export default function DestinationCard({
  path,
  destination,
  index,
  type = false,
}: DestinationCardProps) {
  const getCardClasses = (size: string) => {
    switch (size) {
      case "WIDE":
        return "col-span-2 row-span-1";
      case "TALL":
        return "col-span-1 row-span-2";
      case "MEDIUM":
        return "col-span-1 row-span-1";
      case "LARGE":
        return "col-span-2 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <Link
      key={destination._id}
      href={`${path}/${destination._id}`}
      className={`group relative overflow-hidden ${getCardClasses(destination.imagePosition)} rounded-2xl min-h-[18rem] max-h-[37rem]`}
    >
      <Image
        src={destination.mainImage?.url}
        alt={destination.name}
        fill
        className="min-h-[18rem] max-h-[37rem] w-full object-cover duration-700 group-hover:scale-105"
      />
      {type && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-bold text-lg leading-tight">
            {destination.name}
          </h3>
        </div>
      )}
    </Link>
  );
}
