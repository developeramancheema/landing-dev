import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import { blogCategories, getRecentPosts } from "@/lib/blog-data";
import Newsletter from "./Newsletter";
import { LOGIN_URL, BASE_URL } from "@/lib/config";

interface BlogSidebarProps {
  currentPostSlug?: string;
  relatedPosts?: BlogPost[];
}

export function BlogSidebar({ currentPostSlug, relatedPosts = [] }: BlogSidebarProps) {
  const recentPosts = getRecentPosts(5).filter(post => post.slug !== currentPostSlug);

  return (
    <aside className="space-y-8">

      {/* Recent Posts Widget */}
      <div className="bg-white rounded-xl p-6 drop-shadow-md">
        <div className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Recent Posts
        </div>
        <div className="space-y-4">
          {recentPosts.slice(0, 4).map((post) => (
            <Link key={post.id} href={`${BASE_URL}/blog/${post.slug}`} className="group flex gap-4 p-2 -mx-2 rounded-xl hover:bg-neutral-50 transition-all duration-200">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={`/${post.coverImage}`} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110"/>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors">{post.title}</h4>
                <div className="text-sm">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white rounded-xl p-6 drop-shadow-md">
        <div className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Categories
        </div>
        <ul className="space-y-2">
          {blogCategories.filter(cat => cat !== "All").map((category) => (
            <li key={category}>
              <Link href={`${BASE_URL}/blog/?category=${encodeURIComponent(category)}`} aria-label="Category - Blog" className="group flex items-center justify-between px-4 py-2 rounded-xl bg-indigo-50 transition-all duration-200">
                <span className="text-sm group-hover:text-indigo-600 transition-colors">{category}</span>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Posts Widget */}
      {relatedPosts.length > 0 && (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 drop-shadow-md">
          <div className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Related Articles
          </div>
          <div className="space-y-3">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`${BASE_URL}/blog/${post.slug}`} aria-label="Related Post - Blog" className="group block p-4 bg-white rounded-xl drop-shadow-sm hover:drop-shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full mb-2">{post.category}</span>
                <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors">{post.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Widget */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl p-6 drop-shadow-lg text-white space-y-4">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="space-y-1">
          <div className="text-lg font-semibold">Stay Updated</div>
          <div>Get the latest updates, tips, and scheduling best practices delivered to your inbox.</div>
        </div>
        <Newsletter className="flex flex-col gap-3 w-full" />
        <div>No spam, unsubscribe anytime.</div>
      </div>

      {/* CTA Widget */}
      <div className="bg-indigo-300 rounded-xl p-6 drop-shadow-lg text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white rounded-full" />
        </div>
        
        <div className="relative z-10 space-y-4">
          <div className="text-lg font-bold">Ready to Get Started?</div>
          <div>Transform your scheduling with GetSetTime. Get started today.</div>
          <Link href={`${LOGIN_URL}`} aria-label="Get Started - Blog Sidebar" className="inline-flex items-center gap-2 px-6  py-3 bg-indigo-600 text-white rounded-xl">Get Started</Link>
        </div>
      </div>
    </aside>
  );
}