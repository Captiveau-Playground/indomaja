import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/features/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Indomaja for partnership, distribution, and business inquiries. Reach us by email, WhatsApp, or visit our workshop in East Java, Indonesia.",
  openGraph: {
    title: "Contact Us | Indomaja",
    description:
      "Get in touch with Indomaja for partnership, distribution, and business inquiries.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      <Navbar />

      {/* Contact Content */}
      <section className="reveal pt-40 pb-16 md:pt-48 md:pb-24 lg:pt-48 lg:pb-[140px]">
        <div className="mx-auto max-w-[1920px] px-6 md:px-16 lg:px-[112px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-[112px]">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-between gap-12 lg:sticky lg:top-[160px] lg:h-full lg:gap-0">
              <h1 className="text-h3 lg:text-h2 text-buccaneer-900 font-heading max-w-[600px] leading-[1.1] font-bold">
                Get in Touch with Us. <br />
                For partnership, distribution, and business inquiries.
              </h1>

              <div className="flex flex-col gap-6 lg:pb-2">
                {/* Email */}
                <div className="group flex items-center gap-6">
                  <div className="bg-grey-100 group-hover:border-buccaneer-900 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full transition-colors">
                    <Mail size={20} className="text-buccaneer-900" strokeWidth={1.5} />
                  </div>
                  <a
                    href="mailto:indomaja22@gmail.com"
                    className="text-buccaneer-900 hover:text-buccaneer-700 text-[16px] font-medium transition-colors md:text-[18px]"
                  >
                    indomaja22@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="group flex items-center gap-6">
                  <div className="bg-grey-100 group-hover:border-buccaneer-900 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full transition-colors">
                    <Phone size={20} className="text-buccaneer-900" strokeWidth={1.5} />
                  </div>
                  <a
                    href="https://wa.me/6289677597478"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buccaneer-900 hover:text-buccaneer-700 text-[16px] font-medium transition-colors md:text-[18px]"
                  >
                    +62 896 7759 7478
                  </a>
                </div>

                {/* Instagram */}
                <div className="group flex items-center gap-6">
                  <div className="bg-grey-100 group-hover:border-buccaneer-900 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full transition-colors">
                    <svg className="text-buccaneer-900 h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <a
                    href="https://instagram.com/indomaja.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buccaneer-900 hover:text-buccaneer-700 text-[16px] font-medium transition-colors md:text-[18px]"
                  >
                    indomaja.co
                  </a>
                </div>

                {/* Address */}
                <div className="group flex items-start gap-6">
                  <div className="bg-grey-100 group-hover:border-buccaneer-900 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full transition-colors">
                    <MapPin size={20} className="text-buccaneer-900" strokeWidth={1.5} />
                  </div>
                  <p className="text-buccaneer-900 pt-3 text-[16px] leading-relaxed font-medium md:text-[18px]">
                    Gamping, Campurdarat,
                    <br />
                    Tulungagung Regency, East Java
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
