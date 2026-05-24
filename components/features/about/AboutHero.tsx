import Image from "next/image";
import aboutData from "@/data/about.json";

const AboutHero = () => {
  const { hero } = aboutData;

  return (
    <section className="reveal relative w-full bg-white pt-16 pt-24">
      <div className="mx-auto flex max-w-[1920px] flex-col-reverse gap-12 px-6 sm:px-16 lg:flex-row lg:items-stretch lg:gap-24 lg:px-[112px]">
        {/* Text Column */}
        <div className="flex flex-col items-start lg:w-3/5">
          <h1 className="text-h3 lg:text-h2 text-buccaneer-900 font-heading mb-8 uppercase lg:mb-10">
            {hero.title}
          </h1>

          <div className="text-grey-500 flex flex-col gap-6 font-sans">
            {hero.paragraphs.map((p, index) => (
              <p
                key={index}
                className={`lg:text-body-md text-[16px] leading-[1.8] ${index === hero.paragraphs.length - 1 ? "font-medium" : ""}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="relative aspect-square w-full lg:aspect-auto lg:w-2/5">
          <Image
            src={hero.image}
            alt="About Indomaja Artisan"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            quality={75}
            style={{ objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
