import type { MetadataRoute } from "next";
import { SITE_UPDATED, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/llms.txt`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
