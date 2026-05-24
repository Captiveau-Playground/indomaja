import Image from "next/image";
import Link from "next/link";
import homeData from "@/data/home.json";

const AboutUs = () => {
  const { about } = homeData;

  return (
    <section id="about-us" className="reveal relative w-full bg-white py-16 md:py-24 lg:py-[128px]">
      <div className="mx-auto flex max-w-[1920px] flex-col-reverse gap-12 px-6 sm:flex-row sm:px-16 lg:items-stretch lg:gap-24 lg:px-32">
        {/* Text Column (Bottom on mobile, Left on desktop) */}
        <div className="flex flex-col items-start py-2 md:w-[50%] lg:w-[40%]">
          <h2 className="text-h3 lg:text-h2 text-buccaneer-900 font-heading mb-8 uppercase lg:mb-10">
            {about.title}
          </h2>

          <div className="flex flex-col gap-6 font-sans lg:gap-8">
            {about.paragraphs.map((p, index) => (
              <p key={index} className="lg:text-body-lg text-grey-500 text-[16px] leading-[1.8]">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 lg:mt-16">
            <Link
              href="/about"
              className="group lg:text-special-h4 text-buccaneer-500 hover:text-buccaneer-600 flex items-center gap-2 text-[20px] leading-none tracking-[-0.05em] transition-all"
            >
              {about.cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Image Column (Top on mobile, Right on desktop) */}
        <div className="relative aspect-video min-h-[300px] w-full sm:w-[50%] lg:aspect-auto lg:min-h-[400px] lg:w-[60%]">
          <Image
            src={about.image}
            alt={about.title}
            fill
            className="object-cover shadow-sm"
            sizes="(max-width: 640px) 100vw, 60vw"
            quality={65}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
