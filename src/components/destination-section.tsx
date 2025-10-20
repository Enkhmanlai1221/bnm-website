"use client";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import DestinationCard from "./destination-card";

interface DestinationSectionProps {
  path: string;
  title: string;
  destinations: IBeautifulPlace[] | undefined;
  type?: boolean;
}

export default function DestinationSection({
  path,
  title,
  destinations,
  type = false,
}: DestinationSectionProps) {
  if (!destinations || destinations.length === 0) {
    return null;
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-0">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
          {destinations.map((destination, index) => (
            <DestinationCard
              path={path}
              key={destination._id}
              destination={destination}
              index={index}
              type={type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
