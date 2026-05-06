import Image from "next/image";
import Link from "next/link";
import newsData from "@/data/news.json";

const News = () => {
  // Use first 4 items for homepage
  const newsItems = newsData.slice(0, 4);

  return (
    <section id="news" className="reveal relative w-full py-6 lg:py-32">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-[112px]">
        <div className="mb-12 text-center lg:mb-20">
          <p className="text-body-md lg:text-body-lg mb-4 font-sans leading-none tracking-[0.15em] text-[#B0B0B0] uppercase">
            NEWS
          </p>
          <h2 className="text-h3 lg:text-h1 font-heading text-buccaneer-900 mx-auto max-w-4xl leading-[1.1] font-bold tracking-[-0.05em]">
            Stay Updated with Our Latest Activities
          </h2>
        </div>

        <div className="no-scrollbar mb-16 flex touch-pan-x snap-x gap-4 overflow-x-auto lg:grid lg:grid-cols-4 lg:gap-8">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group w-[280px] shrink-0 cursor-pointer snap-start sm:w-[360px] md:w-[420px] lg:w-full"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="font-heading text-buccaneer-900 group-hover:text-buccaneer-700 mb-3 line-clamp-2 text-[20px] leading-snug font-bold transition-colors lg:text-[24px]">
                {item.title}
              </h3>
              <p className="text-body-md mb-4 line-clamp-3 text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="flex w-full justify-center">
          <Link
            href="/news"
            className="bg-buccaneer-900 hover:bg-buccaneer-800 inline-block w-full px-12 py-4 text-center font-bold tracking-widest text-white uppercase transition-colors"
          >
            Read More News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
