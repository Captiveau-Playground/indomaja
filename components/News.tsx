import Image from "next/image";
import Link from "next/link";
import newsData from "@/data/news.json";

const News = () => {
  // Use first 3 items for homepage
  const newsItems = newsData.slice(0, 3);

  return (
    <section id="news" className="reveal relative w-full py-6 lg:py-32">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-[112px]">
        <div className="text-center mb-12 lg:mb-20">
          <p className="text-body-md lg:text-body-lg leading-none tracking-[0.15em] text-[#B0B0B0] uppercase mb-4 font-sans">
            NEWS
          </p>
          <h2 className="text-h3 lg:text-h1 font-heading text-buccaneer-900 tracking-[-0.05em] leading-[1.1] font-bold max-w-4xl mx-auto">
            Stay Updated with Our Latest Activities
          </h2>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-4 lg:gap-8 mb-16 snap-x no-scrollbar touch-pan-x">
          {newsItems.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="group cursor-pointer shrink-0 w-[280px] sm:w-[360px] md:w-[420px] lg:w-full snap-start">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-heading text-[20px] lg:text-[24px] text-buccaneer-900 font-bold leading-tight mb-3 group-hover:text-buccaneer-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-body-md line-clamp-3 mb-4">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Link 
            href="/news"
            className="bg-buccaneer-900 w-full text-center px-12 py-4 text-white font-bold uppercase tracking-widest hover:bg-buccaneer-800 transition-colors inline-block"
          >
            Read More News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
