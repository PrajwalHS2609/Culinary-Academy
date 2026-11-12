import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/academyData';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="w-full bg-[#FAF5EC] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
              <span>The Culinary Journal</span>
              <span aria-hidden="true" className="text-[#C66B45]">·</span>
              <span>Technique & Culture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
              Explore the <br />
              <span className="italic font-normal text-[#C66B45]">World of Food.</span>
            </h2>
          </div>

          <p className="text-sm text-[#252525]/75 max-w-md">
            Essays on ingredient science, knife maintenance, ancient fermentation, and culinary philosophy written by our faculty.
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#FFFFFF] rounded-lg border border-[#252525]/10 overflow-hidden shadow-xs hover:border-[#252525]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF5EC]/95 backdrop-blur-xs px-2.5 py-0.5 rounded text-[11px] font-medium text-[#66734A] border border-[#252525]/10">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#252525]/60">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#252525] group-hover:text-[#C66B45] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#252525]/75 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#252525] group-hover:text-[#C66B45] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF5EC] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#252525]/20 shadow-2xl p-6 sm:p-10 relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors"
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#66734A] uppercase tracking-wider">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#252525] leading-tight">
                {activeArticle.title}
              </h2>

              <div className="rounded-lg overflow-hidden my-4 border border-[#252525]/10 h-64">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-[#252525]/85 leading-relaxed font-normal pt-2">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#252525]/10 flex items-center justify-between">
                <span className="text-xs text-[#66734A] italic">
                  Published by Vance Culinary Academy Faculty
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#252525] text-white rounded hover:bg-[#3a3a3a]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
