import Image from "next/image";
import homeData from "@/data/home.json";

const Hero = () => {
  const { hero } = homeData;

  return (
    <section className="relative flex min-h-[925px] w-full flex-col items-center justify-center overflow-hidden pt-20 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="absolute inset-0 hidden sm:block">
          <Image
            src={hero.backgroundImage}
            alt="Indomaja Hero Background"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>
        {/* Mobile Image */}
        <div className="absolute inset-0 block sm:hidden">
          <Image
            src="/assets/home/hero-section-mobile.webp"
            alt="Indomaja Hero Background Mobile"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>
        {/* Overlay to darken background for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="animate-fade-in-up relative z-10 flex flex-col items-center px-6 text-center md:px-16 lg:px-[112px]">
        <Image
          src="/assets/logo_white.png"
          alt="Indomaja"
          width={250}
          height={52}
          className="mb-8 w-[180px] opacity-90 md:w-[250px]"
        />

        <h1 className="md:text-special-h1 font-heading tracking-heading max-w-4xl text-[48px] leading-[1.1] text-white uppercase">
          {hero.title}
        </h1>

        <div className="mt-10">
          <button className="bg-buccaneer-900 md:text-special-h3 hover:bg-buccaneer-800 cursor-pointer rounded-[12px] px-[24px] py-[12px] text-[24px] font-bold text-white transition-all md:rounded-[16px] md:px-[36px] md:py-[16px]">
            {hero.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
