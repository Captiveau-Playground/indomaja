import Image from "next/image";
import aboutData from "@/data/about.json";

const AboutGallery = () => {
  const { gallery } = aboutData;

  return (
    <section className="reveal w-full bg-white py-16 md:py-24 lg:py-[128px]">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-[112px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
          {/* Left Column - Two stacked horizontal images */}
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-row gap-4 lg:gap-8">
              <div className="relative aspect-[2/3] w-full overflow-hidden">
                <Image
                  src={gallery[2].src}
                  alt={gallery[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-[2/3] w-full overflow-hidden">
                <Image
                  src={gallery[3].src}
                  alt={gallery[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column - One tall vertical image */}
          <div className="relative aspect-[2/3] w-full overflow-hidden sm:aspect-auto">
            <Image
              src={gallery[1].src}
              alt={gallery[1].alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
