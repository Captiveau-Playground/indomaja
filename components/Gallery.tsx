import Image from "next/image";
import Link from "next/link";
import galleryData from "@/data/gallery.json";

interface GalleryProps {
  title?: React.ReactNode;
  subtitle?: string;
  isPage?: boolean;
}

const Gallery = ({ title, subtitle, isPage = false }: GalleryProps) => {
  const latestShipping = galleryData.find((g) => g.slug === "latest-shipping");
  const productionProcess = galleryData.find((g) => g.slug === "production-process");
  const ourWarehouse = galleryData.find((g) => g.slug === "our-warehouse");

  return (
    <section id="gallery" className={`reveal relative w-full bg-white py-6 lg:py-32`}>
      <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-[112px]">
        <div className="mb-12 text-center lg:mb-20">
          {title ? (
            title
          ) : (
            <>
              <p className="text-body-md lg:text-body-lg mb-4 font-sans leading-none tracking-[0.15em] text-[#B0B0B0] uppercase">
                GALLERY
              </p>
              <h2 className="text-h3 lg:text-h1 font-heading text-buccaneer-900 mx-auto max-w-4xl leading-[1.1] font-bold tracking-[-0.05em] lg:text-[64px]">
                {subtitle || "A Closer Look at Our Process and Operations"}
              </h2>
            </>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          {/* Large Left Column */}
          <Link
            href={`/gallery/${latestShipping?.slug}`}
            className="group relative block aspect-[172px/264px] overflow-hidden md:aspect-square lg:aspect-[4/5]"
          >
            <Image
              src={latestShipping?.image || "/assets/gallery/ship.png"}
              alt={latestShipping?.title || "Latest Shipping"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="50vw"
              quality={65}
            />
            <div className="absolute inset-0 transition-opacity duration-300">
              <Image
                src="/assets/overlay.png"
                alt="Overlay"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-3 text-white sm:p-6 lg:p-10">
              <p className="lg:text-special-h2 mb-1 font-sans text-[16px] leading-none font-medium tracking-tight uppercase sm:text-[24px]">
                {latestShipping?.title.split(" ")[0]}
              </p>
              <h3 className="lg:text-special-h2 text-[16px] leading-[0.9] font-bold tracking-tighter uppercase sm:text-[24px]">
                {latestShipping?.title.split(" ")[1]}
              </h3>
            </div>
          </Link>

          {/* Right Column Stack */}
          <div className="grid grid-rows-2 gap-4 lg:gap-8">
            <Link
              href={`/gallery/${productionProcess?.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden md:aspect-auto"
            >
              <Image
                src={productionProcess?.image || "/assets/gallery/production.png"}
                alt={productionProcess?.title || "Production Process"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="50vw"
                quality={65}
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 transition-opacity duration-300">
                <Image
                  src="/assets/overlay2.png"
                  alt="Overlay"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-3 text-white sm:p-6 lg:p-8">
                <p className="lg:text-special-h2 mb-1 font-sans text-[16px] leading-none font-medium tracking-tight uppercase sm:text-[24px]">
                  {productionProcess?.title.split(" ")[0]}
                </p>
                <h3 className="lg:text-special-h2 text-[16px] leading-[0.9] font-bold tracking-tighter uppercase sm:text-[24px]">
                  {productionProcess?.title.split(" ")[1]}
                </h3>
              </div>
            </Link>

            <Link
              href={`/gallery/${ourWarehouse?.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden md:aspect-auto"
            >
              <Image
                src={ourWarehouse?.image || "/assets/gallery/warehouse.png"}
                alt={ourWarehouse?.title || "Our Warehouse"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="50vw"
                quality={65}
              />
              <div className="absolute inset-0 transition-opacity duration-300">
                <Image
                  src="/assets/overlay2.png"
                  alt="Overlay"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-3 text-white sm:p-6 lg:p-8">
                <p className="lg:text-special-h2 mb-1 font-sans text-[16px] leading-none font-medium tracking-tight uppercase sm:text-[24px]">
                  {ourWarehouse?.title.split(" ")[0]}
                </p>
                <h3 className="lg:text-special-h2 text-[16px] leading-[0.9] font-bold tracking-tighter uppercase sm:text-[24px]">
                  {ourWarehouse?.title.split(" ")[1]}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
