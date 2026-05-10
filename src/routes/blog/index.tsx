import { BlogCard } from '@/components/BlogCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { blogs } from '@/data/blogs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({ component: BlogPage })

function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-secondary py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Blog & Resources
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              Learn about refrigeration technology, climate engineering, and industrial
              cooling insights
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                slug={blog.slug}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.date}
                author={blog.author}
                image={blog.image}
                category={blog.category}
              />
            ))}
          </div>

          <p className="mt-8 text-center text-muted-foreground">
            Showing {blogs.length} article{blogs.length !== 1 ? 's' : ''}
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
