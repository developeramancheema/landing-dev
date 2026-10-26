import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { APP_NAME, BASE_URL, contactInfo, LOGIN_URL } from "@/lib/config";
import { blogPosts } from "@/lib/blog-data";
import { BlogList } from "../component/BlogList";
import Link from "next/link";
import Heading from "../component/Heading";

function BlogListSkeleton() {
  return (
    <div className="space-y-12">
      {/* Category Filter Skeleton */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-10 w-24 bg-neutral-200 rounded-xl animate-pulse" />
        ))}
      </div>
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden drop-shadow-md">
            <div className="h-52 bg-neutral-200 animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
              <div className="h-6 w-full bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pageUrl = `${BASE_URL}/blog`;

export const metadata: Metadata = {
  title: `Blog | ${APP_NAME} - Scheduling Tips, Best Practices & Industry Insights`,
  description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, product updates, and insights to help you manage appointments more efficiently.`,
  keywords: [ "appointment scheduling blog", "scheduling tips", "booking best practices", "calendar management", "business scheduling", "no-show reduction", "team scheduling", "healthcare scheduling"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Blog | ${APP_NAME} - Scheduling Tips, Best Practices & Industry Insights`,
    description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, product updates, and insights to help you manage appointments more efficiently.`,
    url: pageUrl,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Blog | ${APP_NAME} - Scheduling Tips & Best Practices`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: pageUrl,
    creator: `${BASE_URL}`,
    title: `Blog | ${APP_NAME} - Scheduling Tips & Best Practices`,
    description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, product updates, and insights to help you manage appointments more efficiently.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const faqItems = [
  {
    title: "Does GetSetTime offer online appointment booking for doctors?",
    content: "Yes, GetSetTime offers online appointment booking for doctors, wellness instructors, gym trainers, and other healthcare professionals.",
  },
]

export default function BlogPage() {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        "description": "GetSetTime is a smart appointment scheduling platform trusted by 5,000+ doctors, salon owners, and wellness professionals. Simple to set up, smart enough to run itself.",
        "slogan": "Precision Scheduling for Modern Care",
        "foundingDate": "2025",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "10"
        },
        "areaServed": "Worldwide",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "areaServed": "Worldwide",
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "areaServed": "Worldwide"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/getsettime",
          "https://x.com/getsettime",
          "https://www.instagram.com/getsettime",
          "https://www.youtube.com/@GetSetTime"
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": `${pageUrl}`,
        "name": `Blog | ${APP_NAME}`,
        "description": `Explore the ${APP_NAME} blog for expert scheduling tips and best practices.`,
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "about": {
          "@id": `${BASE_URL}/#softwareapplication`
        },
        "mainEntity": {
          "@id": `${pageUrl}/#collectionpage`
        },
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "inLanguage": "en",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": pageUrl
            }
          ]
        }
      },
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#collectionpage`,
        "url": pageUrl,
        "name": `Blog | ${APP_NAME}`,
        "description": "Collection of articles about appointment scheduling and business management",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "about": {
          "@id": `${BASE_URL}/#softwareapplication`
        },
        "mainEntity": {
          "@type": "ItemList",
          "@id": `${pageUrl}/#bloglist`,
          "name": "Blog Articles",
          "numberOfItems": blogPosts.length,
          "itemListOrder": "https://schema.org/ItemListOrderAscending",
          "itemListElement": blogPosts.map((post, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${BASE_URL}/blog/${post.slug}`,
            "name": post.title
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faqpage`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content
          }
        }))
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <Script id="blog-page-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}/>

      <section className="relative py-12">
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Heading
              badge="Articles"
              title="Insights & Resources for"
              highlightText="Smarter Scheduling"
              description="Discover expert tips, industry best practices, and the latest insights to help you streamline your appointment management and grow your business."
              headingTag="h1"
              titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
            />
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="relative pb-14 sm:pb-20">
        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<BlogListSkeleton />}>
            <BlogList posts={blogPosts} postsPerPage={6} />
          </Suspense>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 sm:p-10">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                {/* left: Content */}
                <div className="space-y-3">
                  <Heading
                    badge="Built for Modern Business"
                    title="Ready for GetSetTime To Manage Your Appointments"
                    description="Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more."
                    titleClassName="text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-[40px]"
                    descriptionClassName = "text-white"
                  />
                  
                  <div className="mt-8">
                    <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Get Started - Blog" className="rounded-xl bg-white px-4 py-3 text-sm text-indigo-600 transition">Get Started</Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-white">
                    {['Online booking', 'Auto reminders', 'Team calendar'].map((item) => (
                      <span key={item} className="text-white flex items-center gap-2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg> {item}</span>
                    ))}
                  </div>
                </div>
                {/* right: Image */}
                <div className="relative mx-auto w-full hidden lg:block">
                  <div className="rounded-xl bg-white/14 sm:p-4 backdrop-blur-xl">
                    <div className="rounded-xl bg-white p-3 sm:p-4 drop-shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-neutral-900">Today’s bookings</div>
                          <div>Live preview</div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-600" />
                      </div>
                      <div className="mt-5 space-y-3">
                        {[
                          { time: '10:00 AM', title: 'Consultation' },
                          { time: '12:30 PM', title: '15 Minutes chat' },
                          { time: '03:00 PM', title: 'Follow-up Call' },
                        ].map((item) => (
                          <div key={item.time} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 sm:px-4 py-2 sm:py-3">
                            <div>
                              <div className="text-sm sm:text-base font-medium text-neutral-900">{item.title}</div>
                              <div className="text-xs sm:text-sm text-neutral-600">{item.time}</div>
                            </div>
                            <span className="rounded-md bg-emerald-50 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-emerald-700">Confirmed</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                        <div>Reminders sent</div>
                        <div className="text-2xl font-bold text-neutral-900">1,284</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-5 -bottom-6 hidden lg:block rounded-xl bg-white px-4 py-3 drop-shadow-xl animate-float">
                    <div>No-show reduction</div>
                    <div className="text-xl font-bold text-neutral-900">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}