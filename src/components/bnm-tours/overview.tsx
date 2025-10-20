"use client";

import Image from "next/image";

export function Overview() {
  return (
    <div>
      <div className="flex items-center gap-4 my-8">
        <h1 className="text-2xl font-bold">KharaKhorum Tour |</h1>
        <h1 className="text-2xl font-bold">06Days 05 Nights |</h1>
        <h1 className="text-2xl font-bold">May 23 – May 30, 2024</h1>
      </div>

      <div className="flex justify-between gap-8 mb-12 mt-20">
        <div className="flex flex-col justify-between w-2/3">
          <div>
            <h2 className="text-2xl text-blue-700 font-bold">Overview</h2>
            <p className="text-lg text-gray-600">
              The Karakorum Tour offers a rich 6-day exploration of central
              Mongolia, blending cultural immersion, historical landmarks, and
              serene natural beauty. Highlights include the spiritual Erdenezuu
              Monastery and the tranquil shores of Ugii Lake.
            </p>
          </div>
          <div className="mt-6">
            <Image
              src="/BNM-TOURS1.png"
              alt="Karakorum Tour"
              width={500}
              height={300}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src="/VIDEO-IMAGE.png"
            alt="Karakorum Tour Video"
            width={500}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
