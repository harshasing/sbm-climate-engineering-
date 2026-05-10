import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { BlogCard } from '@/components/BlogCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { blogs } from '@/data/blogs'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const blog = blogs.find((b) => b.slug === params.slug)

    if (!blog) {
      throw notFound()
    }

    // Get related blogs (same category, excluding current blog)
    const relatedBlogs = blogs
      .filter((b) => b.category === blog.category && b.slug !== blog.slug)
      .slice(0, 3)

    return {
      blog,
      relatedBlogs,
    }
  },
  head: ({ loaderData, params }) => {
    const blog = loaderData?.blog
    if (!blog) return {}

    const title = `${blog.title} | Chill Wave Blog`
    const description = blog.excerpt
    const urlPath = `/blog/${params.slug}`

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: blog.image },
        { property: 'og:url', content: urlPath },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: blog.image },
      ],
      links: [{ rel: 'canonical', href: urlPath }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            description: blog.excerpt,
            image: [blog.image],
            datePublished: blog.date,
            author: { '@type': 'Person', name: blog.author },
            mainEntityOfPage: { '@type': 'WebPage', '@id': urlPath },
          }),
        },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { blog, relatedBlogs } = Route.useLoaderData()

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:text-opacity-80">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/blog" className="text-primary hover:text-opacity-80">
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-bold">{blog.title}</span>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-bold">{blog.category}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{blog.date}</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground text-balance">
              {blog.title}
            </h1>
            <p className="text-lg text-muted-foreground">By {blog.author}</p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 bg-secondary rounded-lg overflow-hidden mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>{blog.content}</p>
              <p>
                The implementation of modern agricultural technologies requires
                a comprehensive understanding of your specific needs and
                challenges. By partnering with experts and leveraging proven
                solutions, you can transform your farming operations for better
                outcomes.
              </p>
              <p>
                Whether you&apos;re looking to increase efficiency, reduce
                environmental impact, or improve profitability, the right
                technology solutions can make a significant difference. We
                encourage you to explore our products and services to find the
                best fit for your agricultural goals.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-secondary rounded-lg text-center">
            <p className="text-lg font-bold text-foreground mb-4">
              Ready to implement these strategies on your farm?
            </p>
            <Link
              to="/quote"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Request a Consultation
            </Link>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="bg-secondary py-16 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard
                    key={relatedBlog.id}
                    slug={relatedBlog.slug}
                    title={relatedBlog.title}
                    excerpt={relatedBlog.excerpt}
                    date={relatedBlog.date}
                    author={relatedBlog.author}
                    image={relatedBlog.image}
                    category={relatedBlog.category}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
