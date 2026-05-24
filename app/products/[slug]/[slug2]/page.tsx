import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductCatalog from "@/components/ProductCatalog";
import type { Metadata } from "next";

interface ProductItem {
  slug: string;
  name: string;
  images: string[];
  code: string;
  material: string;
  size: string;
}

interface SubProduct {
  slug: string;
  line1: string;
  line2: string;
  image: string;
  description: string;
  detailedDescription?: string;
  descriptionParts?: string[];
  heroImages?: string[];
  items: ProductItem[];
}

interface Category {
  slug: string;
  categoryTitle: string;
  subProducts: SubProduct[];
}

const typedProducts = products as Category[];

export async function generateStaticParams() {
  return typedProducts.flatMap((category) =>
    category.subProducts.map((sub) => ({
      slug: category.slug,
      slug2: sub.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; slug2: string }>;
}): Promise<Metadata> {
  const { slug, slug2 } = await params;
  const category = typedProducts.find((p) => p.slug === slug);
  const subCategory = category?.subProducts.find((s) => s.slug === slug2);
  if (!subCategory) return { title: "Not Found" };

  const title = `${subCategory.line1} ${subCategory.line2}`.trim();
  const description = subCategory.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [subCategory.heroImages?.[0] ?? subCategory.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; slug2: string }>;
}) {
  const { slug, slug2 } = await params;
  const category = typedProducts.find((p) => p.slug === slug);
  const subCategory = category?.subProducts?.find((s) => s.slug === slug2);

  if (!subCategory) {
    notFound();
  }

  // Ensure parts and images exist, otherwise fallback
  const parts = subCategory.descriptionParts || [subCategory.detailedDescription || "", "", ""];
  const heroImages = subCategory.heroImages || [
    subCategory.image,
    subCategory.image,
    subCategory.image,
  ];

  const productName = `${subCategory.line1} ${subCategory.line2}`.trim();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: subCategory.description,
    image: heroImages[0],
    url: `https://indomaja.co/products/${slug}/${slug2}`,
    brand: {
      "@type": "Brand",
      name: "Indomaja",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Indomaja",
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col gap-[10px] bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Navbar />

      <div className="h-[80px] lg:h-[100px]" />

      {/* Mosaic Hero Section */}
      <section className="relative w-full bg-white py-6 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-0">
          {/* Centered Title */}
          <div className="mb-12 text-center lg:mb-20">
            <h1 className="text-h3 lg:text-h2 font-heading text-buccaneer-900 font-bold tracking-[0.05em] uppercase">
              {subCategory.line1} {subCategory.line2}
            </h1>
          </div>

          {/* Mosaic Grid Layout */}
          <div className="grid w-full grid-cols-2 border-t border-l border-gray-50 lg:grid-cols-3">
            {/* Cell 1: Image 1 */}
            <div className="relative order-1 aspect-[3/4] overflow-hidden border-r border-b border-gray-50 sm:aspect-square">
              <Image
                src={heroImages[0]}
                alt="Hero 1"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                quality={65}
              />
            </div>
            {/* Cell 2: Text 1 */}
            <div className="order-2 flex items-center justify-center border-r border-b border-gray-50 bg-white p-6 lg:p-12">
              <p className="md:text-body-md max-w-sm text-left text-[12px] leading-relaxed text-[#6D6D6D]">
                {parts[0]}
              </p>
            </div>
            {/* Cell 3: Image 2 (lg: order 3) / Text 2 (sm: order 3) */}
            <div className="order-3 flex items-center justify-center border-r border-b border-gray-50 bg-white p-6 lg:order-4 lg:p-12">
              <p className="md:text-body-md max-w-sm text-left text-[12px] leading-relaxed text-[#6D6D6D]">
                {parts[1]}
              </p>
            </div>
            {/* Cell 4: Text 2 (lg: order 4) / Image 2 (sm: order 4) */}
            <div className="relative order-4 aspect-[3/4] overflow-hidden border-r border-b border-gray-50 sm:aspect-square lg:order-3">
              <Image
                src={heroImages[1]}
                alt="Hero 2"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                quality={65}
              />
            </div>

            {/* Cell 5: Image 3 */}
            <div className="relative order-5 aspect-[3/4] overflow-hidden border-r border-b border-gray-50 sm:aspect-square">
              <Image
                src={heroImages[2]}
                alt="Hero 3"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                quality={65}
              />
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

      {/* Product Content with Sidebar and Grid */}
      <section id="catalog" className="relative w-full bg-white py-16">
        <ProductCatalog subCategory={subCategory} />
      </section>

      <Footer />
    </main>
  );
}
