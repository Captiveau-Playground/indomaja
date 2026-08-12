import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import newsData from "@/data/news.json";

export const metadata = {
  title: "News - Indomaja",
  description:
    "Stay updated with Indomaja's latest collections, exhibitions, and artisanal stories.",
};

export default function NewsPage() {
  const featuredNews = newsData[0];
  const otherNews = newsData.slice(1, 11); // Take the next 4 for the grid

  return (
    <main className="flex min-h-screen flex-col gap-[10px] overflow-x-hidden bg-white">
      <Navbar />

      {/* Page Title */}
      <section className="reveal pt-24 pb-12 text-center md:pt-32 md:pb-16 lg:pt-[128px] lg:pb-[64px]">
        <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-32">
          <h1 className="text-h3 lg:text-h2 text-buccaneer-900 font-heading leading-none font-bold uppercase">
            NEWS
          </h1>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="reveal pb-16 md:pb-24 lg:pb-[128px]">
        <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-32">
          <Link
            href={`/news/${featuredNews.id}`}
            className="group flex flex-col items-stretch gap-8 sm:flex-row lg:gap-10"
          >
            <div className="order-2 flex w-full flex-col justify-between gap-6 py-2 sm:order-1 sm:w-[40%]">
              <div>
                <h2 className="text-h3 lg:text-h1 text-buccaneer-900 group-hover:text-buccaneer-700 font-heading mb-8 line-clamp-3 leading-snug font-black tracking-tight transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-body-md lg:text-body-lg leading-relaxed text-[#6D6D6D]">
                  {featuredNews.description}
                </p>
              </div>
              <div className="text-body-md lg:text-body-lg text-[#B0B0B0] uppercase">
                {featuredNews.date}
              </div>
            </div>
            <div className="relative order-1 aspect-square w-full overflow-hidden sm:order-2 sm:aspect-[16/9] sm:w-[60%] lg:h-[548px] lg:w-[976px]">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={75}
              />
            </div>
          </Link>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="reveal border-t border-gray-100 py-0 pb-16 md:py-24">
        <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-32">
          <div className="no-scrollbar flex touch-pan-x snap-x gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-10 lg:pb-0">
            {otherNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group flex w-[280px] shrink-0 snap-start flex-col sm:w-[360px] md:w-[420px] lg:w-full"
              >
                <div className="relative mb-6 aspect-[4/3] overflow-hidden md:mb-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    quality={65}
                  />
                </div>

                <h3 className="font-heading text-buccaneer-900 group-hover:text-buccaneer-700 mb-4 line-clamp-3 text-[24px] leading-snug font-extrabold tracking-tight transition-colors md:mb-6 md:text-[28px] lg:text-[32px]">
                  {item.title}
                </h3>

                <p className="line-clamp-3 font-sans text-[14px] leading-[1.6] text-[#6B7280] md:text-[16px]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
