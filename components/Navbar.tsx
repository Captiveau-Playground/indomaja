"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSolidPage = pathname === "/about" || pathname.startsWith("/products") || pathname.startsWith("/gallery") || pathname.startsWith("/news") || pathname === "/contact";
  const shouldBeSolid = isScrolled || isSolidPage || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        shouldBeSolid 
          ? "bg-white py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16">
        <div className="flex items-center">
          <Link href="/" className="flex flex-col group" onClick={() => setIsMenuOpen(false)}>
            <div className="relative h-[20px] w-[111px] lg:h-[40px] lg:w-[222px]">
              <Image
                src="/assets/logo_white.png"
                alt="Indomaja Logo White"
                width={222}
                height={40}
                className={`absolute inset-0 h-auto w-full transition-opacity duration-500 ${
                  shouldBeSolid ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src="/assets/logo.png"
                alt="Indomaja Logo"
                width={222}
                height={40}
                className={`absolute inset-0 h-auto w-full transition-opacity duration-500 ${
                  shouldBeSolid ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <span
              className={`mt-1 font-sans text-[8px] lg:text-[12px] leading-none uppercase tracking-[0.15em] transition-colors duration-500 ${
                shouldBeSolid ? "text-buccaneer-800" : "text-white opacity-90"
              }`}
            >
              STONE & TERRACOTTA SPECIALIST
            </span>
          </Link>
        </div>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-heading text-[16px] font-medium leading-none tracking-[-0.05em] transition-all duration-500 hover:text-buccaneer-600 ${
                shouldBeSolid ? "text-[#6D6D6D]" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <div 
            className={`w-8 h-0.5 transition-all duration-500 origin-center ${
              shouldBeSolid ? "bg-black" : "bg-white"
            } ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} 
          />
          <div 
            className={`w-8 h-0.5 transition-all duration-500 ${
              shouldBeSolid ? "bg-black" : "bg-white"
            } ${isMenuOpen ? "opacity-0" : ""}`} 
          />
          <div 
            className={`w-8 h-0.5 transition-all duration-500 origin-center ${
              shouldBeSolid ? "bg-black" : "bg-white"
            } ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} 
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-white transition-all duration-500 ease-in-out lg:hidden overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100 py-6 border-t border-gray-100 shadow-md" : "max-h-0 opacity-0 py-0 border-transparent shadow-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-heading text-[20px] font-medium leading-none tracking-[-0.05em] text-[#6D6D6D] hover:text-buccaneer-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
