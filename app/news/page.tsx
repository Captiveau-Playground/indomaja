import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import newsData from "@/data/news.json";

export const metadata = {
  title: "News - Indomaja",
  description: "Stay updated with Indomaja's latest collections, exhibitions, and artisanal stories.",
};

export default function NewsPage() {
  const featuredNews = newsData[0];
  const otherNews = newsData.slice(1, 4); // Take the next 3 for the grid

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden gap-[10px]">
      <Navbar />
      
      {/* Page Title */}
      <section className="reveal pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-[128px] lg:pb-[64px] text-center">
        <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-32 ">
          <h1 className="text-h3 lg:text-h2 font-bold leading-none text-buccaneer-900 uppercase font-heading">
            NEWS
          </h1>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="reveal pb-16 md:pb-24 lg:pb-[128px]">
        <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-32 ">
          <Link 
            href={`/news/${featuredNews.id}`}
            className="group flex flex-col sm:flex-row gap-8 lg:gap-10 items-stretch"
          >
            <div className="order-2 sm:order-1 w-full sm:w-[40%] flex flex-col justify-between py-2 gap-6">
              <div>
                <h2 className="text-h3 lg:text-h1 font-black text-buccaneer-900 leading-[1] mb-8 group-hover:text-buccaneer-700 transition-colors font-heading tracking-tight">
                  {featuredNews.title}
                </h2>
                <p className="text-[#6D6D6D] text-body-md lg:text-body-lg leading-relaxed">
                  {featuredNews.description}
                </p>
              </div>
              <div className="text-body-md lg:text-body-lg text-[#B0B0B0] uppercase">
                {featuredNews.date}
              </div>
            </div>
            <div className="order-1 sm:order-2 w-full sm:w-[60%] relative aspect-square sm:aspect-[16/9] lg:w-[976px] lg:h-[548px] overflow-hidden">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </Link>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="reveal py-0 pb-16 md:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-32 ">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 lg:gap-10 pb-4 lg:pb-0 snap-x no-scrollbar touch-pan-x">
            {otherNews.map((item) => (
              <Link 
                key={item.id} 
                href={`/news/${item.id}`}
                className="group flex flex-col shrink-0 w-[280px] sm:w-[360px] md:w-[420px] lg:w-full snap-start"
              >
                <div className="relative aspect-[4/3] mb-6 md:mb-10 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <h3 className="font-heading text-[24px] md:text-[28px] lg:text-[32px] text-buccaneer-900 font-extrabold leading-[1.2] mb-4 md:mb-6 group-hover:text-buccaneer-700 transition-colors tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-[#6B7280] text-[14px] md:text-[16px] leading-[1.6] line-clamp-3 font-sans">
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

