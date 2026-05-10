import { BlogCard } from '@/components/BlogCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { blogs } from '@/data/blogs'
import { categories, products } from '@/data/products'
import { services } from '@/data/services'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => {
    const title = 'Chill Wave | Precision Engineering for Thermal Excellence'
    const description =
      'Industrial refrigeration, cold storage, and climate engineering solutions by S.B.M. Climate Engineering.'
    const urlPath = '/'
    const image = '/images/hero-bg.webp'

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: urlPath },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ],
      links: [{ rel: 'canonical', href: urlPath }],
    }
  },
  component: Home,
})

function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4)
  const topCategories = categories.slice(0, 5)
  const allProducts = products.slice(0, 8)
  const featuredBlogs = blogs.filter((b) => b.featured).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.webp"
              alt="Industrial refrigeration system"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70 z-10" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  Thermal Precision
                </span>
                <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  Industrial Cooling
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 text-balance leading-tight tracking-tighter">
                Engineering <br />
                <span className="text-primary">Climate Mastery</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
                Precision refrigeration and thermal engineering solutions, built
                to power the world's most demanding industrial environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-extrabold text-xl hover:bg-opacity-90 transition-all active:scale-95 shadow-xl"
                >
                  View Our Products
                </Link>
                <Link
                  to="/quote"
                  className="px-12 py-5 bg-white text-black rounded-full font-extrabold text-xl hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom curve/gradient */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-background to-transparent z-20" />
        </section>

        {/* Global Partners Section */}
        <section className="bg-white py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8">
              Trusted by Industry Leaders & Global Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {[
                {
                  name: 'Tecumseh',
                  url: '/trusted-partners/tecumseh.webp',
                },
                {
                  name: 'Embraco',
                  url: '/trusted-partners/embraco.webp',
                },
                {
                  name: 'Dry All',
                  url: '/trusted-partners/dry-all.webp',
                },
                {
                  name: 'Sub-Zero',
                  url: '/trusted-partners/sub-zero.webp',
                },
                {
                  name: 'Östberg',
                  url: '/trusted-partners/ostberg.webp',
                },
                {
                  name: 'Danfoss',
                  url: '/trusted-partners/danfoss.webp',
                },
                {
                  name: 'Copeland',
                  url: '/trusted-partners/copeland.webp',
                },
                {
                  name: 'Hicool',
                  url: '/trusted-partners/hicool.webp',
                },
              ].map((brand) => (
                <img
                  key={brand.name}
                  src={brand.url}
                  alt={brand.name}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our most innovative climate engineering solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {featuredProducts.map((product) => {
              const specs = []
              if (product.series) {
                specs.push({
                  label: 'Variants',
                  value: `${product.series.length} Series`,
                })
              } else if (product.products) {
                specs.push({
                  label: 'Models',
                  value: `${product.products.length} Units`,
                })
              }

              if (product.refrigerant)
                specs.push({ label: 'Refrigerant', value: product.refrigerant })

              return (
                <ProductCard
                  key={product.id}
                  slug={product.slug}
                  name={product.name}
                  category={product.category}
                  image={product.image}
                  description={product.description}
                  model={product.model}
                  specs={specs}
                />
              )
            })}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition"
            >
              View All Products
            </Link>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="bg-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete support from consultation to implementation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop by Category Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our comprehensive product range
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                // hrtoef={`/products?category=${category.id}`}
                to="/products"
                search={{ category: category.id }}
              >
                <div className="bg-secondary p-6 rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition cursor-pointer">
                  <p className="font-bold text-foreground hover:text-primary-foreground">
                    {category.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-block px-8 py-3 text-primary font-bold hover:text-opacity-80 transition"
            >
              View All Categories
            </Link>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="bg-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                Popular Products
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {allProducts.map((product) => {
                const specs = []
                if (product.series) {
                  specs.push({
                    label: 'Variants',
                    value: `${product.series.length} Series`,
                  })
                } else if (product.products) {
                  specs.push({
                    label: 'Models',
                    value: `${product.products.length} Units`,
                  })
                }

                if (product.refrigerant)
                  specs.push({
                    label: 'Refrigerant',
                    value: product.refrigerant,
                  })

                return (
                  <ProductCard
                    key={product.id}
                    slug={product.slug}
                    name={product.name}
                    category={product.category}
                    image={product.image}
                    description={product.description}
                    model={product.model}
                    specs={specs}
                  />
                )
              })}
            </div>
            <div className="text-center">
              <Link
                to="/products"
                className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about refrigeration technology and industrial
              cooling best practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredBlogs.map((blog) => (
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
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition"
            >
              Read All Articles
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Master Your Climate?
            </h2>
            <p className="text-lg mb-8 text-balance">
              Let our expert climate engineers help you choose the perfect
              refrigeration solutions for your industrial or commercial
              operation.
            </p>
            <Link
              to="/quote"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-bold hover:bg-secondary transition"
            >
              Get Your Free Quote Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
