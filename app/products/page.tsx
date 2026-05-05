import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurProduct from "@/components/OurProduct";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Indomaja - Stone & Terracotta Specialist",
  description: "Learn more about Indomaja, a leading manufacturer and exporter of handcrafted stone and terracotta decorative products from Indonesia with over 30 years of experience.",
  openGraph: {
    title: "Products | Indomaja",
    description: "Discover our heritage, craftsmanship, and commitment to quality in handcrafted Indonesian natural materials.",
    images: ["/assets/aboutus/thumbnail.png"],
  },
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white gap-[10px]">
      <Navbar />
      
      <OurProduct title={
        <div className="sm:w-full text-center py-16">
             <h1 className="text-h3 lg:text-h2 font-heading font-bold text-buccaneer-900 leading-none">OUR PRODUCTS</h1>
        </div>
      }
      sectionStyle="reveal relative w-full bg-white py-16 md:py-24 lg:py-[128px]"
      page="products"
      isClickable={true}
      />
      
      <Footer />
    </main>
  );
}