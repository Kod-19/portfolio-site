import Title from '../components/Title'
import { blogPosts } from '../data/blogPosts'

const BlogPage = () => {
  return (
    <main className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(102,227,255,0.12),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(255,209,102,0.08),transparent_28%),var(--dark-bg)] text-(--text-color) font-sans selection:bg-sky-400/25'>
      <div className='mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-12 xl:px-20'>
        <section className='pt-8 sm:pt-12'>
          <Title title='Blog' />

          <div className='grid grid-cols-1 gap-8 pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14'>
            <aside className='lg:sticky lg:top-28 lg:self-start'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-(--primary-color) sm:text-sm'>
                KD Studios updates
              </p>
              <h1 className='max-w-3xl pt-5 text-4xl font-black leading-tight text-(--title-color) sm:text-5xl'>
                News, learning notes, and future plans.
              </h1>
              <p className='pt-5 text-base font-medium leading-8 text-(--text-color) sm:text-lg'>
                Follow the journey as KD Studios expands from web development into mobile app development with React Native.
              </p>
              <a
                href='/project-brief'
                className='button-pop mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-(--tertiary-color) px-5 py-3 text-sm font-bold text-(--title-color) sm:text-base'
              >
                Start a Project
              </a>
            </aside>

            <div className='grid grid-cols-1 gap-5'>
              {blogPosts.map((post) => (
                <article key={post.title} className='interactive-card rounded-lg p-5 sm:p-6'>
                  <p className='text-xs font-bold uppercase tracking-[0.16em] text-(--primary-color)'>{post.date} · {post.readTime}</p>
                  <h2 className='pt-3 text-2xl font-black leading-tight text-(--title-color)'>{post.title}</h2>
                  <p className='pt-4 text-sm font-medium leading-7 text-(--text-color) sm:text-base'>{post.excerpt}</p>

                  <div className='grid gap-3 pt-5 sm:grid-cols-3'>
                    {post.highlights.map((highlight) => (
                      <p key={highlight} className='rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-xs font-bold text-(--title-color)'>
                        {highlight}
                      </p>
                    ))}
                  </div>

                  <div className='space-y-4 pt-5 text-sm font-medium leading-7 text-(--text-color) sm:text-base'>
                    {post.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className='flex flex-wrap gap-2 pt-5'>
                    {post.tags.map((tag) => (
                      <span key={tag} className='rounded-full border border-white/10 bg-white/4 px-3 py-2 text-xs font-bold text-(--text-color)'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default BlogPage
