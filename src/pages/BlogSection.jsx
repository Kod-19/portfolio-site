import React, { useEffect, useState } from 'react';
import { portfolioService } from '../services/portfolioService';

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const data = await portfolioService.getPublishedBlogPosts();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center text-slate-400 font-mono text-sm">
        Loading articles & studio updates...
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-white">Articles & Insights</h2>
          <p className="text-slate-400 text-sm mt-1">Thoughts on engineering, design, and studio updates.</p>
        </div>

        {posts.length === 0 ? (
          <p className="text-slate-500 text-sm">No articles published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition flex flex-col justify-between"
              >
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-44 object-cover border-b border-slate-800"
                  />
                )}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-mono">
                      <span>{post.readTime || '3 min read'}</span>
                      {post.publishedAt && (
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white hover:text-amber-400 transition cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-3">
                      {post.excerpt || post.content}
                    </p>
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-900 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-slate-800 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}