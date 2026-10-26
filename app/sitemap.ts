import type { MetadataRoute } from "next";
import { BASE_URL } from "../lib/config";
import { blogPosts } from "../lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {

  const routes: MetadataRoute.Sitemap = [
    // Static routes
    {
      url: `${BASE_URL}`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/features`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pricing`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/solutions/doctor-appointment-scheduling-software`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/solutions/dentist-appointment-scheduling-software`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/solutions/salon-appointment-scheduling-software`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/solutions/physiotherapist-appointment-booking-software`,
      priority: 0.8,
    },
    // Dynamic blog detail routes
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      priority: 0.7,
    })),
  ];

  return routes;
}

