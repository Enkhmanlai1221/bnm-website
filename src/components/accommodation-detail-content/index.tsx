import { IFeature } from "@/interfaces/feature";
import { IImage } from "@/interfaces/image";
import { Carosuel } from "../carosuel/page";
import { ContentLoading } from "../loading";

export const AccommodationDetailContent = ({
  feature,
  isLoading = false,
}: {
  feature: IFeature[];
  isLoading?: boolean;
}) => {
  // if (isLoading) {
  //   return <ContentLoading />;
  // }

  return (
    <div className="space-y-12">
      {feature.map((item, index) => (
        <div
          key={item._id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className={`p-8 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {item?.title}
              </h2>

              <div
                className="text-gray-600 mb-6 prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{
                  __html: item?.description as unknown as string,
                }}
              />

              {item?.url && (
                <div className="mb-6">
                  <iframe
                    src="https://www.youtube.com/embed/cPtSIPk2ETo?autoplay=1&mute=1&loop=1&playlist=cPtSIPk2ETo"
                    title="Virtual Tour"
                    className="w-full h-64 rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            <div
              className={`p-8 bg-gray-50 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
            >
              {item?.images && item.images.length > 0 && (
                <Carosuel
                  images={item.images.map((image: IImage) => image?.url)}
                />
              )}
            </div>
          </div>
          {item?.url && (
            <div className="mb-6">
              <iframe
                src="https://www.youtube.com/embed/cPtSIPk2ETo?autoplay=1&mute=1&loop=1&playlist=cPtSIPk2ETo"
                title="Virtual Tour"
                className="w-full h-64 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
