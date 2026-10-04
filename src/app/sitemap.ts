import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://v-athithyaramaa.vercel.app";
  const routes = [
    "",
    "#about",
    "#records",
    "#works",
    "#systems",
    "#telemetry",
    "#beyond",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  }));
}
