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
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <Navbar />

      <section className="reveal pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-[128px] lg:pb-[128px]">
        <div className="mx-auto max-w-[1920px] px-6 md:px-16 lg:px-[112px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative mb-8 aspect-[16/9] overflow-hidden bg-gray-100 md:aspect-[21/9] lg:mb-12 lg:aspect-[976/548]">
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
                <h1 className="text-h3 md:text-h2 lg:text-h1 text-buccaneer-900 font-heading mb-6 leading-[1.1] font-bold tracking-tight">
                  {post.title}
                </h1>
                <div className="text-body-md flex items-center gap-2 font-sans text-[#B0B0B0]">
                  <span>{post.date}</span>
                  <span>by</span>
                  <span className="text-buccaneer-300 font-medium">{post.author}</span>
                </div>
              </div>

              {/* Content */}
              {"sections" in post && Array.isArray(post.sections) ? (
                <div className="flex flex-col gap-6 font-sans">
                  {(
                    post.sections as Array<{
                      type: string;
                      text?: string;
                      number?: number;
                      heading?: string;
                      paragraphs?: string[];
                      images?: string[];
                      intro?: string[];
                      subsections?: { name: string; description: string; images: string[] }[];
                      closing?: string;
                    }>
                  ).map((section, idx) => {
                    if (section.type === "text") {
                      return (
                        <p
                          key={idx}
                          className="lg:text-body-lg text-grey-500 text-[16px] leading-[1.8]"
                        >
                          {section.text}
                        </p>
                      );
                    }

                    if (section.type === "numbered") {
                      return (
                        <div key={idx} className="mt-4 flex flex-col gap-4">
                          <h2 className="text-buccaneer-900 font-heading text-[20px] leading-tight font-bold tracking-tight md:text-[24px] lg:text-[28px]">
                            {section.number}. {section.heading}
                          </h2>
                          {section.paragraphs?.map((p, pIdx) => (
                            <p
                              key={pIdx}
                              className="lg:text-body-lg text-grey-500 text-[16px] leading-[1.8]"
                            >
                              {p}
                            </p>
                          ))}
                          {section.images && section.images.length > 0 && (
                            <div
                              className={`mt-2 grid gap-3 ${section.images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}
                            >
                              {section.images.map((img, imgIdx) => (
                                <div key={imgIdx} className="relative aspect-[4/3] overflow-hidden">
                                  <Image
                                    src={img}
                                    alt={`${section.heading} ${imgIdx + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (section.type === "numbered-grc") {
                      return (
                        <div key={idx} className="mt-4 flex flex-col gap-4">
                          <h2 className="text-buccaneer-900 font-heading text-[20px] leading-tight font-bold tracking-tight md:text-[24px] lg:text-[28px]">
                            {section.number}. {section.heading}
                          </h2>
                          {section.intro?.map((p, pIdx) => (
                            <p
                              key={pIdx}
                              className="lg:text-body-lg text-grey-500 text-[16px] leading-[1.8]"
                            >
                              {p}
                            </p>
                          ))}
                          {section.subsections?.map((sub, subIdx) => (
                            <div key={subIdx} className="mt-2 flex flex-col gap-3">
                              <p className="lg:text-body-lg text-buccaneer-900 text-[16px] leading-[1.8]">
                                <span className="font-bold">{sub.name}</span> – {sub.description}
                              </p>
                              {sub.images.length > 0 && (
                                <div
                                  className={`grid gap-3 ${sub.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                                >
                                  {sub.images.map((img, imgIdx) => (
                                    <div
                                      key={imgIdx}
                                      className="relative aspect-[4/3] overflow-hidden"
                                    >
                                      <Image
                                        src={img}
                                        alt={`${sub.name} ${imgIdx + 1}`}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                          {section.closing && (
                            <p className="lg:text-body-lg text-grey-500 mt-2 text-[16px] leading-[1.8]">
                              {section.closing}
                            </p>
                          )}
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-6 font-sans">
                  {post.content.split(/\n\n/).map((block, blockIdx) => {
                    const trimmed = block.trim();
                    const lines = trimmed.split("\n");
                    const firstLine = lines[0];
                    const isNumberedHeading = /^\d+\.\s/.test(firstLine);

                    if (isNumberedHeading) {
                      return (
                        <div key={blockIdx} className="mt-6 flex flex-col gap-4">
                          <h2 className="text-buccaneer-900 font-heading text-[20px] leading-tight font-bold tracking-tight md:text-[24px] lg:text-[28px]">
                            {firstLine}
                          </h2>
                          {lines.slice(1).map((line, lineIdx) =>
                            line.trim() ? (
                              <p
                                key={lineIdx}
                                className="lg:text-body-lg text-grey-500 text-[16px] leading-[1.8]"
                              >
                                {line.trim()}
                              </p>
                            ) : null,
                          )}
                        </div>
                      );
                    }

                    if (lines.length > 1) {
                      return (
                        <div key={blockIdx} className="flex flex-col gap-4">
                          {lines.map((line, lineIdx) =>
                            line.trim() ? (
                              <p
                                key={lineIdx}
                                className="lg:text-body-lg text-grey-500 text-[16px] leading-[1.8]"
                              >
                                {line.trim()}
                              </p>
                            ) : null,
                          )}
                        </div>
                      );
                    }

                    return (
                      <p
                        key={blockIdx}
                        className="lg:text-body-lg text-grey-500 text-[16px] leading-[1.8]"
                      >
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
              )}

              {/* Others News - Mobile & Tablet Only (Horizontal Scroll) */}
              <div className="mt-16 border-t border-gray-100 pt-16 lg:hidden">
                <h2 className="text-h3 text-buccaneer-900 font-heading mb-8 font-bold">
                  Others News
                </h2>
                <div className="no-scrollbar flex touch-pan-x snap-x gap-6 overflow-x-auto pb-8 md:gap-10">
                  {otherNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="group flex w-[280px] shrink-0 snap-start flex-col transition-all sm:w-[360px] md:w-[420px]"
                    >
                      <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-gray-100 md:mb-8">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-heading text-buccaneer-900 group-hover:text-buccaneer-700 mb-4 line-clamp-2 text-[24px] leading-[1.2] font-extrabold tracking-tight transition-colors md:text-[28px]">
                        {item.title}
                      </h3>
                      <p className="text-grey-500 line-clamp-2 font-sans text-[14px] leading-[1.6] md:text-[16px]">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-32">
                <h2 className="text-h3 text-buccaneer-900 font-heading mb-10 font-bold">
                  Others News
                </h2>
                <div className="flex flex-col gap-8">
                  {otherNews.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="group flex items-start gap-5"
                    >
                      <div className="relative aspect-[4/3] w-[160px] flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.smallThumbnail || item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-body-md text-buccaneer-900 group-hover:text-buccaneer-700 font-heading line-clamp-3 leading-tight font-bold transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-sans text-[12px] text-[#B0B0B0] uppercase">
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
