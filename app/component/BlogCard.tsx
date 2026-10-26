import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative h-full">
      <Link href={`/blog/${post.slug}`} aria-label="Blog Post Details - Blog" className="block h-full">
        <div className="relative h-full bg-white rounded-xl overflow-hidden drop-shadow-md transition-all duration-500 hover:drop-shadow-2xl hover:-translate-y-2 flex flex-col justify-between">

          <div className="relative">
            <div className="relative overflow-hidden">
              <Image src={`/${post.coverImage}`} alt={post.title} width={800} height={400} className="object-cover aspect-[16/8] sm:aspect-[4/3] w-full h-full transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300">{post.title}</h3>
              <p>{post.excerpt.length > 120 ? `${post.excerpt.slice(0, 120).trimEnd()}…` : post.excerpt}</p>
            </div>
          </div>
          
          <div className="p-4">            
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-sm text-indigo-600">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
              </span>
              
            </div>
          </div>

          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500/30 transition-all duration-500 pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </div>
      </Link>
    </article>
  );
}