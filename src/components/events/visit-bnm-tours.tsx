"use client";

import Image from "next/image";

export function VisitBnmTours() {
  return (
    <div
      className="rounded-2xl mt-20 mb-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/EVENT/BACKGROUND.png')",
      }}
    >
      <div className="flex items-center lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
          <div className="flex gap-4">
            <Image
              src="/EVENT/ICON_1.png"
              alt="Visit BNM Tours"
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-contain"
            />
            <Image
              src="/EVENT/ICON_2.png"
              alt="Visit BNM Tours"
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-contain"
            />
          </div>
          <div className="flex flex-col justify-center text-white space-y-6">
            <div className="pt-4">
              <p className="text-4xl font-bold">
                Escape to the Land of Stories
              </p>
              <button className="relative group mt-6">
                <Image
                  src="/EVENT/BUTTON.png"
                  alt="Visit BNM Tours Button"
                  width={200}
                  height={100}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
