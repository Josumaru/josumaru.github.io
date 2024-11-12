import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://josumaru.my.id",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://josumaru.my.id/#showcase",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
    {
      url: "https://josumaru.my.id/#experience",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
  ];
}
