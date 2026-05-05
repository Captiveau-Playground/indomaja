import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import OurProduct from "@/components/OurProduct";
import AboutUs from "@/components/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indomaja | Stone & Terracotta Specialist",
  description:
    "Manufacturer and exporter of handcrafted stone and terracotta decorative products from authentic Indonesian natural materials with over 30 years of experience.",
  openGraph: {
    title: "Indomaja | Stone & Terracotta Specialist",
    description: "Authentic materials and refined craftsmanship in stone and terracotta.",
    images: ["/assets/hero/home.png"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <OurProduct
        title={
          <div className="mb-12 px-6 sm:px-16 lg:mb-24 lg:px-32">
            <div className="mx-auto max-w-[1920px]">
              <p className="text-body-normal lg:text-body-lg mb-4 font-sans leading-none font-medium tracking-[0.15em] text-[#B0B0B0] uppercase">
                OUR PRODUCT
              </p>
              <h2 className="text-h3 lg:text-h1 font-heading text-buccaneer-900 leading-[1.1] font-bold tracking-[-0.05em] lg:text-[64px]">
                Authentic Materials,
                <br className="hidden sm:block" /> Refined Craftsmanship
              </h2>
            </div>
          </div>
        }
        sectionStyle="reveal relative w-full bg-buccaneer-50 py-16 md:py-24 lg:py-[128px]"
        page="home"
        isClickable={true}
      />
      <Gallery />
      <News />
      <Map />
      <Footer />
    </main>
  );
}
