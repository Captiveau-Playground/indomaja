import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-buccaneer-900 relative w-full overflow-hidden pt-12 pb-12 text-white lg:pt-24 lg:pb-16">
      {/* Background Topographic Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/topo-pattern.png')",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-[1920px] px-6 sm:px-16">
        <div className="mb-8 flex flex-col gap-8 lg:mb-18 lg:flex-row lg:gap-24 xl:gap-32">
          {/* Brand - 50% Section */}
          <div className="flex flex-col items-start lg:basis-1/2">
            <Link href="/" className="group mb-12 inline-block lg:mb-0">
              <Image
                src="/assets/logo_3.png"
                alt="Indomaja Logo"
                width={339}
                height={77}
                className="h-[50px] w-auto object-contain md:h-[60px] lg:h-[77px] lg:w-[339px]"
              />
            </Link>
          </div>

          {/* Links Section - 50% Section */}
          <div className="flex flex-col gap-12 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-12 lg:basis-1/2 lg:flex-nowrap lg:gap-8">
            {/* Quick Links */}
            <div className="basis-full sm:basis-[40%] lg:basis-1/3">
              <h2 className="text-body-md mb-4 font-bold tracking-widest text-white uppercase lg:mb-8">
                QUICK LINKS
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="font-heading text-body-md text-buccaneer-400 block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="font-heading text-body-md text-buccaneer-400 block"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="font-heading text-body-md text-buccaneer-400 block"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="font-heading text-body-md text-buccaneer-400 block">
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-heading text-body-md text-buccaneer-400 block"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="basis-full sm:max-w-xs sm:basis-[50%] lg:basis-1/3">
              <h2 className="text-body-md mb-4 font-bold tracking-widest text-white uppercase lg:mb-8">
                ADDRESS
              </h2>
              <div className="space-y-4">
                <p className="font-heading text-body-md text-buccaneer-400 block">
                  Gamping, Campurdarat,
                  <br />
                  Tulungagung Regency, East Java
                </p>
                <p className="font-heading text-body-md text-buccaneer-400 block">
                  Jl. Kasongan, Kajen,
                  <br />
                  Bangunjiwo, Bantul Regency,
                  <br />
                  Special Region of Yogyakarta
                </p>
                <p className="font-heading text-body-md text-buccaneer-400 block">
                  Tepus, Gunungkidul Regency,
                  <br />
                  Special Region of Yogyakarta
                </p>
              </div>
            </div>

            {/* Contact & Follow */}
            <div className="flex basis-full flex-col gap-12 lg:basis-1/3 lg:gap-12">
              {/* Contact Us */}
              <div className="lg:basis-auto">
                <h2 className="text-body-md mb-4 font-bold tracking-widest text-white uppercase">
                  CONTACT US
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/6289677597478"
                    target="_blank"
                    className="text-buccaneer-200 group flex items-center gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                      <Image
                        src="/assets/wa.png"
                        alt="Indomaja Logo"
                        width={20}
                        height={16}
                        className="h-[20px] w-[20px] object-contain"
                      />
                    </div>
                    <span className="font-heading text-body-md text-buccaneer-400 block">
                      +62 896 7759 7478
                    </span>
                  </a>
                  <a
                    href="mailto:indomaja22@gmail.com"
                    className="text-buccaneer-200 group flex items-center gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                      <Image
                        src="/assets/email.png"
                        alt="Indomaja Logo"
                        width={20}
                        height={16}
                        className="h-[20px] w-[20px] object-contain"
                      />
                    </div>
                    <span className="font-heading text-body-md text-buccaneer-400 block">
                      indomaja22@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Follow Us */}
              <div className="lg:basis-auto">
                <h2 className="text-body-md mb-4 font-bold tracking-widest text-white uppercase">
                  FOLLOW US
                </h2>
                <a
                  href="https://instagram.com/indomaja.co"
                  target="_blank"
                  className="text-buccaneer-200 group flex items-center gap-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <Image
                      src="/assets/ig.png"
                      alt="Indomaja Logo"
                      width={20}
                      height={16}
                      className="h-[20px] w-[20px] object-contain"
                    />
                  </div>
                  <span className="font-heading text-body-md text-buccaneer-400 block">
                    indomaja.co
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Bottom Copyright & Credits */}
        <div>
          <div className="flex flex-col items-start justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
            <p className="text-buccaneer-200 font-sans text-[14px] leading-relaxed">
              © 2026 indomaja.co. All rights reserved.
            </p>
            <p className="text-buccaneer-200 font-sans text-[12px] leading-relaxed opacity-60">
              Powered by Captiveau Creative Tech Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
