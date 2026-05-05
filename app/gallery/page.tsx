import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Indomaja - Stone & Terracotta Specialist",
  description: "Explore Indomaja's gallery featuring our production process, latest shipping, and extensive warehouse collections of handcrafted stone and terracotta.",
  openGraph: {
    title: "Gallery | Indomaja",
    description: "Witness the craftsmanship and scale of Indomaja's global operations.",
    images: ["/assets/gallery/ship.png"],
  },
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white gap-[10px]">
      <Navbar />
      
      {/* Spacer for Fixed Navbar */}
      <div className="h-[40px] " />

      <Gallery 
        isPage={true}
        title={
          <div className="mx-auto max-w-[1920px] px-6 sm:px-16 lg:px-[112px] text-center">
              <h1 className="text-h3 lg:text-h2 pt-10 font-heading font-bold text-buccaneer-900 leading-none uppercase">GALLERY</h1>
          </div>
        }
      />

      <Footer />
    </main>
  );
}
