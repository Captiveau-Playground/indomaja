import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import newsData from "@/data/news.json";
import { notFound } from "next/navigation";

// Generate static params for all news items
export async function generateStaticParams() {
  return newsData.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = newsData.find((p) => p.id === slug);
  if (!post) return { title: "News Not Found" };

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = newsData.find((p) => p.id === slug);
  
  if (!post) {
    return notFound();
  }

  // Get other news (excluding current)
  const otherNews = newsData.filter((p) => p.id !== slug);

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <section className="reveal pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-[128px] lg:pb-[128px]">
        <div className="mx-auto max-w-[1920px] px-6 md:px-16 lg:px-[112px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[976/548] mb-8 lg:mb-12 overflow-hidden bg-gray-100">
                <Image
                  src={post.detailImage || post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Title and Meta */}
              <div className="mb-8 lg:mb-12">
                <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold text-buccaneer-900 leading-[1.1] mb-6 font-heading tracking-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-2 text-body-md text-[#B0B0B0] font-sans">
                  <span>{post.date}</span>
                  <span>by</span>
                  <span className="text-buccaneer-300 font-medium">{post.author}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-8 prose prose-lg max-w-none prose-p:text-grey-500 prose-p:leading-[1.8] font-sans">
                {post.content.split(/\n\s*\n/).map((paragraph, idx) => (
                  <p key={idx} className="text-[16px] lg:text-body-lg text-grey-500">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Others News - Mobile & Tablet Only (Horizontal Scroll) */}
              <div className="lg:hidden mt-16 pt-16 border-t border-gray-100">
                <h2 className="text-h3 font-bold text-buccaneer-900 mb-8 font-heading">Others News</h2>
                <div className="flex overflow-x-auto gap-6 md:gap-10 snap-x no-scrollbar pb-8 touch-pan-x">
                  {otherNews.map((item) => (
                    <Link 
                      key={item.id} 
                      href={`/news/${item.id}`}
                      className="group flex flex-col shrink-0 w-[280px] sm:w-[360px] md:w-[420px] snap-start transition-all"
                    >
                      <div className="relative aspect-[4/3] mb-6 md:mb-8 overflow-hidden bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-heading text-[24px] md:text-[28px] text-buccaneer-900 font-extrabold leading-[1.2] mb-4 group-hover:text-buccaneer-700 transition-colors tracking-tight line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-grey-500 text-[14px] md:text-[16px] leading-[1.6] line-clamp-2 font-sans">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-h3 font-bold text-buccaneer-900 mb-10 font-heading">Others News</h2>
                <div className="flex flex-col gap-8">
                  {otherNews.slice(0, 4).map((item) => (
                    <Link 
                      key={item.id} 
                      href={`/news/${item.id}`} 
                      className="group flex gap-5 items-start"
                    >
                      <div className="relative w-[160px] aspect-[4/3] flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.smallThumbnail || item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-body-md font-bold text-buccaneer-900 leading-tight group-hover:text-buccaneer-700 transition-colors font-heading line-clamp-3">
                          {item.title}
                        </h3>
                        <p className="text-[12px] text-[#B0B0B0] font-sans uppercase">
                          {item.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
