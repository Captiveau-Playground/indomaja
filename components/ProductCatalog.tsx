"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProductItem {
  name: string;
  slug: string;
  images: string[];
  code: string;
  material: string;
  size: string;
}

interface SubCategory {
  line1: string;
  line2: string;
  items: ProductItem[];
}

export default function ProductCatalog({ subCategory }: { subCategory: SubCategory }) {
  const [activeSlug, setActiveSlug] = useState(subCategory.items[0]?.slug || "");
  const [isManualScroll, setIsManualScroll] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScroll) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSlug(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    subCategory.items.forEach((item) => {
      const el = sectionRefs.current[item.slug];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [subCategory.items, isManualScroll]);

  const scrollToSection = (slug: string) => {
    setIsManualScroll(true);
    setActiveSlug(slug);
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    // Resume observer after animation
    setTimeout(() => {
      setIsManualScroll(false);
    }, 800);
  };

  if (!subCategory.items || subCategory.items.length === 0) {
    return (
      <div className="mx-auto max-w-[1920px] px-6 py-12 text-center md:px-16 lg:px-[112px]">
        <p className="font-sans text-[#B0B0B0]">No items available for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex max-w-[1920px] flex-col gap-4 px-6 md:gap-6 md:px-16 lg:flex-row lg:px-[112px]">
      {/* Sidebar Navigation */}
      {subCategory.items.length > 1 && (
        <aside className="sticky top-0 z-30 hidden w-full border-b border-gray-100 bg-white lg:relative lg:block lg:w-1/4 lg:border-none lg:bg-transparent">
          <div className="no-scrollbar overflow-x-auto py-4 lg:sticky lg:top-[120px] lg:py-0">
            <nav className="flex flex-row gap-8 whitespace-nowrap lg:flex-col lg:gap-5">
              {subCategory.items.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => scrollToSection(item.slug)}
                  className={`shrink-0 text-left font-sans text-[14px] tracking-tight transition-colors duration-300 lg:text-[16px] ${
                    activeSlug === item.slug
                      ? "font-bold text-[#5B2A2E] underline decoration-2 underline-offset-8 lg:no-underline"
                      : "font-medium text-[#B0B0B0] hover:text-[#5B2A2E]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      )}

      {/* Main Product Display Area - Vertical Listing */}
      <div className={`w-full ${subCategory.items.length > 1 ? "lg:w-3/4" : ""}`}>
        <div className="flex flex-col gap-12">
          {subCategory.items.map((item) => (
            <div
              key={item.slug}
              id={item.slug}
              ref={(el) => {
                sectionRefs.current[item.slug] = el;
              }}
              className="scroll-mt-[180px] lg:scroll-mt-32"
            >
              {subCategory.items.length > 1 && (
                <h2 className="font-heading mb-8 text-[24px] font-bold tracking-tight text-[#333] lg:mb-10 lg:text-[36px]">
                  {item.name}
                </h2>
              )}

              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className="group relative aspect-square overflow-hidden border border-gray-100 bg-[#F8F8F8]"
                  >
                    <Image
                      src={img}
                      alt={`${item.name} ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}

                {/* Fallback to fill placeholders if only one image */}
                {item.images.length === 1 &&
                  [1, 2].map((i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden border border-gray-100 bg-[#F8F8F8] opacity-50"
                    >
                      <Image
                        src={item.images[0]}
                        alt="placeholder"
                        fill
                        className="object-cover grayscale"
                        sizes="33vw"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
