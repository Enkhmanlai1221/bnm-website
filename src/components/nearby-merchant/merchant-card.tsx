import Image from "next/image";

export function MerchantCard({ data }: { data: any }) {
  return (
    <div
      key={data.id}
      className="bg-white rounded-2xl overflow-hidden duration-300"
    >
      <div className="relative h-64">
        <Image
          src={data.mainImage?.url}
          alt={data.mainImage?.url}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-1 mt-1">
        <h3 className="font-bold text-md mb-1 line-clamp-2">{data.name}</h3>
        <div>
          <span className="text-sm">6 house 5 ger</span>
        </div>
        <span className="font-bold text-lg text-primary">${150}</span>
      </div>
    </div>
  );
}
