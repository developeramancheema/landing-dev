import type { MetadataRoute } from "next";
import { BASE_URL } from "../lib/config";

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: "*",
      allow: "",
      disallow: ["/api", "/privacy-policy", "/terms-of-conditions", "/not-found" ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

