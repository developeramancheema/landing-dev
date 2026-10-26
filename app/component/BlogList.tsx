"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BlogCard } from "./BlogCard";
import type { BlogPost } from "@/lib/blog-data";
import { blogCategories, getPostCategories } from "@/lib/blog-data";
import ScreenGate from "./ScreenGate";

interface BlogListProps {
  posts: BlogPost[];
  postsPerPage?: number;
}

export function BlogList({ posts, postsPerPage = 6 }: BlogListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get category from URL params, default to "All"
  const categoryFromUrl = searchParams.get("category") || "All";
  
  const [visibleCount, setVisibleCount] = useState(postsPerPage);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  // Sync category state with URL when it changes
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
    setVisibleCount(postsPerPage); // Reset visible count when URL changes
  }, [categoryFromUrl, postsPerPage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter posts by category or tag (excluding featured if shown separately)
  const filteredPosts = useMemo(() => {
    let filtered = posts;
    
    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post =>
        getPostCategories(post).includes(selectedCategory)
      );
    }

    return [...filtered].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [posts, selectedCategory]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;
  const remainingPosts = filteredPosts.length - visibleCount;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => prev + postsPerPage);
      setIsLoading(false);
    }, 500);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(postsPerPage); // Reset visible count when changing category
    setIsCategoryDropdownOpen(false);
    
    // Update URL with the selected category
    if (category === "All") {
      router.push("/blog", { scroll: false });
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  return (
    <div className="space-y-12">
      
      <ScreenGate minWidth={768}>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4">
          {/* Category Filter */}
          <div className="flex items-center justify-start w-full">
            <div ref={categoryDropdownRef} className="relative w-full sm:max-w-xs">
              <button
                type="button"
                onClick={() => setIsCategoryDropdownOpen((prev) => !prev)}
                className="w-full px-4 py-3 pr-10 rounded-xl bg-white text-neutral-700 border border-neutral-200 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 cursor-pointer text-left"
                aria-haspopup="listbox"
                aria-expanded={isCategoryDropdownOpen}
              >
                {selectedCategory}
              </button>

              <svg className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isCategoryDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>

              {isCategoryDropdownOpen && (
                <ul role="listbox" className="absolute z-20 mt-2 w-full max-h-60 overflow-y-auto rounded-xl border border-neutral-200 bg-white drop-shadow-lg overflow-hidden">
                  {blogCategories.map((category) => {
                    const isActive = category === selectedCategory;
                    return (
                      <li key={category}>
                        <button
                          type="button"
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200 ${
                            isActive
                              ? "bg-indigo-50 text-indigo-700 font-medium"
                              : "text-neutral-700 hover:bg-neutral-50"
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-end w-full">
            <div> Showing <span className="font-semibold text-neutral-900">{visiblePosts.length}</span> of{" "}
              <span className="font-semibold text-neutral-900">{filteredPosts.length}</span> articles
              {selectedCategory !== "All" && (
                <span> in <span className="text-indigo-600 font-medium">{selectedCategory}</span></span>
              )}
            </div>
          </div>
      </div>
      </ScreenGate>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visiblePosts.map((post, index) => (
            <div key={post.id} style={{ animationDelay: `${(index % postsPerPage) * 100}ms` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center bg-white rounded-xl drop-shadow-sm">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="font-semibold text-neutral-900 mb-2">No articles found</div>
          <p>Try selecting a different category</p>
        </div>
      )}

      {/* Load More Button */}
      {hasMorePosts && (
        <div className="flex justify-center">
          <button onClick={handleLoadMore} disabled={isLoading} className="group relative inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0">
            {isLoading ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>Load More</span>
                <span className="px-2.5 py-1 text-xs bg-white/20 rounded-full">{remainingPosts} remaining</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </>
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
          </button>
        </div>
      )}

    </div>
  );
}