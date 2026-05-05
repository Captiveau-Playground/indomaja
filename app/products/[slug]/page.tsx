import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurProduct from "@/components/OurProduct";
import ScrollReveal from "@/components/ScrollReveal";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ProductCategory {
  slug: string;
  categoryTitle: string;
  categoryDescription: string;
  subProducts: { slug: string; line1: string; line2: string; image: string; description: string }[];
}

const typedProducts = products as ProductCategory[];

export async function generateStaticParams() {
  return typedProducts.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = typedProducts.find((p) => p.slug === slug);
  if (!category) return { title: "Not Found" };

  return {
    title: category.categoryTitle,
    description: category.categoryDescription,
    openGraph: {
      title: category.categoryTitle,
      description: category.categoryDescription,
    },
  };
}

export default async function SlugProductsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = typedProducts.find((p) => p.slug === slug);

  if (!category) {
    notFound();
  }

  // If there's only one sub-product, go straight to the detail page
  if (category.subProducts && category.subProducts.length === 1) {
    const { redirect } = await import("next/navigation");
    redirect(`/products/${slug}/${category.subProducts[0].slug}`);
  }

  return (
    <main className="flex min-h-screen flex-col gap-[10px] bg-white">
      <Navbar />

      {/* Sub-products Listing */}
      <OurProduct
        title={
          <div className="py-16 text-center sm:w-full">
            <h1 className="text-h3 lg:text-h2 font-heading text-buccaneer-900 leading-none font-bold">
              {category.categoryTitle.toUpperCase()}
            </h1>
          </div>
        }
        sectionStyle="reveal relative w-full bg-white py-16 sm:py-24 lg:py-24"
        page="products"
        productsData={category.subProducts}
        basePath={`/products/${slug}`}
        isClickable={true}
      />

      <Footer />
    </main>
  );
}
