"use client";

import Image from "next/image";
import Link from "next/link";

export default function FloatingWhatsApp() {
  const whatsappNumber = "6289677597478";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="/assets/wa.png"
        alt="WhatsApp"
        width={25}
        height={25}
        className="h-[25px] w-[25px] object-contain"
        unoptimized
      />

      {/* Pulse animation */}
      <div className="absolute inset-0 animate-pulse rounded-full bg-green-500 opacity-0 group-hover:opacity-20" />
    </Link>
  );
}
