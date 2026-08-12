import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local, already pre-optimized webp/png in /public.
    // Disabling Vercel's on-the-fly optimizer stops consuming the
    // Image Optimization transformation quota entirely (5k/mo on Hobby),
    // while next/image still handles lazy loading, priority & layout.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    qualities: [65, 75],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
