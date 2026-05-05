import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-buccaneer-900 text-white pt-12 pb-12 lg:pb-16 lg:pt-24 relative overflow-hidden">
      {/* Background Topographic Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/assets/topo-pattern.png')",
        }}
      ></div>
      
      <div className="mx-auto max-w-[1920px] px-6 sm:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 xl:gap-32 mb-8 lg:mb-18">
          {/* Brand - 50% Section */}
          <div className="flex flex-col items-start lg:basis-1/2">
            <Link href="/" className="inline-block group mb-12 lg:mb-0">
              <Image 
                src="/assets/logo_3.png" 
                alt="Indomaja Logo" 
                width={339} 
                height={77} 
                className="h-[50px] md:h-[60px] lg:h-[77px] w-auto lg:w-[339px] object-contain" 
              />
            </Link>
          </div>

          {/* Links Section - 50% Section */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-12 sm:gap-x-4 sm:gap-y-12 lg:gap-8 lg:basis-1/2">
            {/* Quick Links */}
            <div className="basis-full sm:basis-[40%] lg:basis-1/3">
              <h2 className="text-white font-bold uppercase tracking-widest text-body-md mb-4 lg:mb-8">
                QUICK LINKS
              </h2>
              <ul className="space-y-4">
                <li><Link href="/" className="font-heading text-body-md text-buccaneer-400 block">About Us</Link></li>
                <li><Link href="/products" className="font-heading text-body-md text-buccaneer-400 block">Products</Link></li>
                <li><Link href="/gallery" className="font-heading text-body-md text-buccaneer-400 block">Gallery</Link></li>
                <li><Link href="/news" className="font-heading text-body-md text-buccaneer-400 block">News</Link></li>
                <li><Link href="/contact" className="font-heading text-body-md text-buccaneer-400 block">Contact Us</Link></li>
              </ul>
            </div>

            {/* Address */}
            <div className="basis-full sm:basis-[50%] lg:basis-1/3 sm:max-w-xs">
              <h2 className="text-white font-bold uppercase tracking-widest text-body-md mb-4 lg:mb-8">
                ADDRESS
              </h2>
              <div className="space-y-4 ">
                <p className="font-heading text-body-md text-buccaneer-400 block">
                  Gamping, Campurdarat,<br />
                  Tulungagung Regency, East Java
                </p>
                <p className="font-heading text-body-md text-buccaneer-400 block">
                  Jl. Kasongan, Kajen,<br />
                  Bangunjiwo, Bantul Regency,<br />
                  Special Region of Yogyakarta
                </p>
                <p className="font-heading text-body-md text-buccaneer-400 block">
                  Tepus, Gunungkidul Regency,<br />
                  Special Region of Yogyakarta
                </p>
              </div>
            </div>

            {/* Contact & Follow */}
            <div className="basis-full lg:basis-1/3 flex flex-col gap-12 lg:gap-12">
              {/* Contact Us */}
              <div className="lg:basis-auto">
                <h2 className="text-white font-bold uppercase tracking-widest text-body-md mb-4">
                  CONTACT US
                </h2>
                <div className="space-y-4">
                  <a href="https://wa.me/6289677597478" target="_blank" className="flex items-center gap-5 text-buccaneer-200 group">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
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
                  <a href="mailto:indomaja22@gmail.com" className="flex items-center gap-5 text-buccaneer-200 group">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
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
                <h2 className="text-white font-bold uppercase tracking-widest text-body-md mb-4">
                  FOLLOW US
                </h2>
                <a href="https://instagram.com/indomaja.co" target="_blank" className="flex items-center gap-5 text-buccaneer-200 group">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
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
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-1 lg:gap-0">
            <p className="text-[14px] text-buccaneer-200 font-sans leading-relaxed">
              © 2026 MULAI+. All rights reserved.
            </p>
            <p className="text-[12px] text-buccaneer-200 opacity-60 font-sans leading-relaxed">
              Powered by Captiveau Creative Tech Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
