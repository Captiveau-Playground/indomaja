import Image from "next/image";
import aboutData from "@/data/about.json";

const VisionMission = () => {
  const { visionMission } = aboutData;

  return (
    <section className="reveal w-full py-16 md:py-24 lg:py-[128px]">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-[112px]">
        <h2 className="text-h3 lg:text-h2 text-buccaneer-900 font-heading mb-12 text-center uppercase">
          Our Vision & Mission
        </h2>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
          {/* Image Column */}
          <div className="relative aspect-[16/9] h-[480px] w-full overflow-hidden shadow-lg lg:w-1/2">
            <Image
              src={visionMission.image}
              alt="Indomaja Logistics and Vision"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div>
              <h3 className="text-h4 text-buccaneer-900 font-heading mb-4 uppercase">Vision</h3>
              <p className="lg:text-body-md text-grey-500 font-sans text-[16px] leading-[1.8]">
                {visionMission.vision}
              </p>
            </div>

            <div>
              <h3 className="text-h4 text-buccaneer-900 font-heading mb-6 uppercase">Mission</h3>
              <ul className="flex flex-col gap-4">
                {visionMission.missions.map((item, index) => (
                  <li
                    key={index}
                    className="lg:text-body-md text-grey-500 flex items-start gap-3 font-sans text-[16px] leading-[1.8]"
                  >
                    <span className="bg-buccaneer-500 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
