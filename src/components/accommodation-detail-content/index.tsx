import { IFeature } from "@/interfaces/feature";
import { IImage } from "@/interfaces/image";
import { Carosuel } from "../carosuel/page";

export const AccommodationDetailContent = ({
  feature,
}: {
  feature: IFeature[];
}) => {
  return (
    <>
      {feature.map((item, index) => (
        <div
          key={(item as any)?.id ?? index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
        >
          <div
            className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"} space-y-6`}
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {item?.title}
              </h1>
            </div>
            <div
              className="text-gray-700 leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: item?.description as unknown as string,
              }}
            />
          </div>

          <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
            {item?.images && item.images.length > 0 && (
              <div className="space-y-4">
                <Carosuel
                  images={item.images.map((image: IImage) => image?.url)}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
