import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import galleryData from "@/data/gallery.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
}

interface GalleryCategory {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  descriptionParts?: string[];
  heroImages?: string[];
  isVertical?: boolean;
  items: GalleryItem[];
}

const typedGallery = galleryData as GalleryCategory[];

export async function generateStaticParams() {
  return typedGallery.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = typedGallery.find((c) => c.slug === slug);
  if (!category) return { title: "Not Found" };

  return {
    title: category.title,
    description: category.description.slice(0, 160),
    openGraph: {
      title: category.title,
      description: category.description.slice(0, 160),
      images: [category.image],
    },
  };
}

export default async function GalleryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = typedGallery.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Fallback if parts or heroImages are missing
  const parts = category.descriptionParts || [category.description, "", ""];
  const heroImages = category.heroImages || [category.image, category.image, category.image];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ScrollReveal />
      <Navbar />

      <div className="h-[80px] lg:h-[100px]" />

      {/* Mosaic Hero Section (Matching Product Detail Style) */}
      <section className="relative w-full bg-white py-6 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-0">
          {/* Centered Title */}
          <div className="mb-12 text-center lg:mb-20">
            <h1 className="text-h3 lg:text-h2 font-heading text-buccaneer-900 font-bold tracking-[0.05em] uppercase">
              {category.title}
            </h1>
          </div>

          {/* Mosaic Grid Layout */}
          <div className="grid w-full grid-cols-2 border-t border-l border-gray-50 lg:grid-cols-3">
            {/* Cell 1: Image 1 */}
            <div className="relative order-1 overflow-hidden border-r border-b border-gray-50 sm:aspect-square lg:aspect-[3/4]">
              <Image src={heroImages[0]} alt="Hero 1" fill className="object-cover" />
            </div>

            {/* Cell 2: Text 1 */}
            <div className="order-2 flex items-center justify-center border-r border-b border-gray-50 bg-white p-6 lg:p-12">
              <p className="md:text-body-md max-w-sm text-left text-[12px] leading-relaxed text-[#6D6D6D]">
                {parts[0]}
              </p>
            </div>

            {/* Cell 3: Image 2 */}
            <div className="relative order-4 overflow-hidden border-r border-b border-gray-50 sm:aspect-square lg:order-4 lg:aspect-[3/4]">
              <Image src={heroImages[1]} alt="Hero 2" fill className="object-cover" />
            </div>

            {/* Cell 4: Text 2 */}
            <div className="order-3 flex items-center justify-center border-r border-b border-gray-50 bg-white p-6 lg:order-3 lg:p-12">
              <p className="md:text-body-md max-w-sm text-left text-[12px] leading-relaxed text-[#6D6D6D]">
                {parts[1]}
              </p>
            </div>

            {/* Cell 5: Image 3 */}
            <div className="relative order-5 overflow-hidden border-r border-b border-gray-50 sm:aspect-square lg:order-2 lg:aspect-[3/4]">
              <Image src={heroImages[2]} alt="Hero 3" fill className="object-cover" />
            </div>

            {/* Cell 6: Text 3 */}
            <div className="order-6 flex items-center justify-center border-r border-b border-gray-50 bg-white p-6 lg:p-12">
              <p className="md:text-body-md max-w-sm text-left text-[12px] leading-relaxed text-[#6D6D6D]">
                {parts[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="reveal relative w-full pb-16 md:pb-24 lg:pb-[128px]">
        <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-[112px]">
          <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-4 lg:grid-cols-4">
            {category.items.map((item: GalleryItem) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="bg-buccaneer-900/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
