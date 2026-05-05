import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/features/about/AboutHero";
import AboutGallery from "@/components/features/about/AboutGallery";
import VisionMission from "@/components/features/about/VisionMission";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Indomaja - Stone & Terracotta Specialist",
  description: "Learn more about Indomaja, a leading manufacturer and exporter of handcrafted stone and terracotta decorative products from Indonesia with over 30 years of experience.",
  openGraph: {
    title: "About Us | Indomaja",
    description: "Discover our heritage, craftsmanship, and commitment to quality in handcrafted Indonesian natural materials.",
    images: ["/assets/aboutus/thumbnail.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white gap-[10px]">
      <Navbar />
      
      {/* Spacer for Fixed Navbar - since it starts white on this page */}
      <div className="h-[80px] lg:h-[100px]" />
      
      <AboutHero />
      <AboutGallery />
      <VisionMission />
      
      <Footer />
    </main>
  );
}
