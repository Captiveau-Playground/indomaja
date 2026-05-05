import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import Script from "next/script";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "Indomaja | Stone & Terracotta Specialist",
    template: "%s | Indomaja",
  },
  description:
    "Manufacturer and exporter of handcrafted stone and terracotta decorative products from authentic Indonesian natural materials with over 30 years of experience.",
  keywords: [
    "stone decoration",
    "terracotta products",
    "handcrafted decor",
    "Indonesian craftsmanship",
    "Indomaja",
  ],
  authors: [{ name: "Indomaja" }],
  creator: "Indomaja",
  publisher: "Indomaja",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indomaja.co",
    siteName: "Indomaja",
    title: "Indomaja | Stone & Terracotta Specialist",
    description: "Authentic materials and refined craftsmanship in stone and terracotta.",
    images: [
      {
        url: "/assets/hero/home.png",
        width: 1200,
        height: 630,
        alt: "Indomaja - Stone & Terracotta Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indomaja | Stone & Terracotta Specialist",
    description: "Authentic materials and refined craftsmanship in stone and terracotta.",
    images: ["/assets/hero/home.png"],
  },
  metadataBase: new URL("https://indomaja.co"),
  icons: {
    icon: "/assets/favicon.jpg",
    shortcut: "/assets/favicon.jpg",
    apple: "/assets/favicon.jpg",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Indomaja",
    url: "https://indomaja.co",
    logo: "https://indomaja.co/assets/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62 812 3456 7890",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["Indonesian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dusun Karanglo RT 01 / RW 01, Wukirsari, Imogiri",
      addressLocality: "Bantul",
      addressRegion: "Yogyakarta",
      postalCode: "55782",
      addressCountry: "ID",
    },
    sameAs: ["https://facebook.com/indomaja", "https://instagram.com/indomaja"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Indomaja",
    url: "https://indomaja.co",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://indomaja.co/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="animate-fade-in flex min-h-full flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ScrollReveal />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
