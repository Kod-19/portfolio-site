import { useEffect, useState } from "react";
import { portfolioService } from "../services/portfolioService";
import Title from "./Title";

const BlogPreview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await portfolioService.getPublishedBlogPosts();
      setPosts(data.slice(0, 2));
    };

    loadPosts();
  }, []);

  return (
    <section id="updates">
      <Title title="Latest Updates" />

      <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--primary-color) sm:text-sm">
            KD Studios blog
          </p>
          <h2 className="max-w-2xl pt-5 text-3xl font-black leading-tight text-(--title-color) sm:text-4xl">
            Follow the journey into mobile app development.
          </h2>
          <p className="pt-5 text-base font-medium leading-8 text-(--text-color) sm:text-lg">
            Short updates on React Native learning, new services, and future
            plans for KD Studios.
          </p>
          <a
            href="/blog"
            className="mt-6 inline-flex text-sm font-black text-(--primary-color) underline-offset-4 transition hover:text-(--accent-color) hover:underline"
          >
            View all updates
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="interactive-card flex h-full flex-col rounded-lg p-5 sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--primary-color)">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : "Recently published"}{" "}
                · {post.readTime || "3 min read"}
              </p>
              <h3 className="pt-3 text-xl font-black leading-tight text-(--title-color) sm:text-2xl">
                {post.title}
              </h3>
              <p className="flex-1 pt-4 text-sm font-medium leading-7 text-(--text-color)">
                {post.excerpt || post.content}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {post.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-(--text-color)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="/blog"
                className="mt-5 text-sm font-bold text-(--primary-color) underline-offset-4 transition hover:text-(--accent-color) hover:underline"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
