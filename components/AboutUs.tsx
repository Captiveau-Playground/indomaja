import Image from "next/image";
import Link from "next/link";
import homeData from "@/data/home.json";

const AboutUs = () => {
  const { about } = homeData;

  return (
    <section id="about-us" className="reveal relative w-full bg-white py-16 md:py-24 lg:py-[128px]">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-32 flex flex-col-reverse gap-12 sm:flex-row lg:items-stretch lg:gap-24">
        {/* Text Column (Bottom on mobile, Left on desktop) */}
        <div className="flex flex-col items-start py-2 md:w-[50%] lg:w-[40%]">
          <h2 className="text-h3 lg:text-h2 text-buccaneer-900 mb-8 lg:mb-10 uppercase font-heading">
            {about.title}
          </h2>
          
          <div className="flex flex-col gap-6 lg:gap-8 font-sans">
            {about.paragraphs.map((p, index) => (
              <p key={index} className="text-[16px] lg:text-body-lg text-grey-500 leading-[1.8]">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 lg:mt-16">
            <Link 
              href="/about" 
              className="group flex items-center gap-2 text-[20px] lg:text-special-h4 tracking-[-0.05em] text-buccaneer-500 transition-all hover:text-buccaneer-600 leading-none"
            >
              {about.cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Image Column (Top on mobile, Right on desktop) */}
        <div className="relative w-full sm:w-[50%] lg:w-[60%] aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[400px]">
          <Image
            src={about.image}
            alt={about.title}
            fill
            className="object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
