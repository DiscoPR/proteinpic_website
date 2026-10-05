import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-04");
  const published = new Date("2026-10-05");
  return [
    {
      url: site.url,
      lastModified: published,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}${site.compare.path}`,
      lastModified: published,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${site.url}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
