import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://stackora-ui.vercel.app/sitemap.xml",
    host: "https://stackora-ui.vercel.app",
  }
}
