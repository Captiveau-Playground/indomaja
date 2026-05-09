import { MetadataRoute } from "next";
import productsData from "@/data/products.json";
import newsData from "@/data/news.json";
import galleryData from "@/data/gallery.json";

const BASE_URL = "https://indomaja.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // Product category pages: /products/[slug]
  const categoryPages: MetadataRoute.Sitemap = productsData.map((category) => ({
    url: `${BASE_URL}/products/${category.slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Sub-product pages: /products/[slug]/[slug2]
  const subProductPages: MetadataRoute.Sitemap = productsData.flatMap((category) =>
    category.subProducts.map((sub) => ({
      url: `${BASE_URL}/products/${category.slug}/${sub.slug}`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  // News detail pages: /news/[id]
  const newsPages: MetadataRoute.Sitemap = newsData.map((post) => ({
    url: `${BASE_URL}/news/${post.id}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Gallery detail pages: /gallery/[slug]
  const galleryPages: MetadataRoute.Sitemap = (galleryData as { slug: string }[]).map((item) => ({
    url: `${BASE_URL}/gallery/${item.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...categoryPages, ...subProductPages, ...newsPages, ...galleryPages];
}
