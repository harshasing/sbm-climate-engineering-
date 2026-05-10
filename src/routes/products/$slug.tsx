import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$slug')({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug)

    if (!product) {
      throw notFound()
    }

    // Get related products (same category, excluding current product)
    const relatedProducts = products
      .filter((p) => p.category === product.category && p.slug !== product.slug)
      .slice(0, 3)

    return {
      product,
      relatedProducts,
    }
  },
  head: ({ loaderData, params }) => {
    const product = loaderData?.product
    if (!product) return {}

    const title = `${product.name} | ${product.category} | Chill Wave`
    const description = product.description
    const image = (product.images && product.images[0]) || product.image || '/logo.webp'
    const urlPath = `/products/${params.slug}`

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'product' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: urlPath },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ],
      links: [{ rel: 'canonical', href: urlPath }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: product.images && product.images.length > 0 ? product.images : [image],
            category: product.category,
            brand: { '@type': 'Brand', name: 'Chill Wave' },
            url: urlPath,
          }),
        },
      ],
    }
  },
  component: RouteComponent,
})

import { ImageCarousel } from '@/components/ImageCarousel'

function RouteComponent() {
  const { product, relatedProducts } = Route.useLoaderData()

  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image || '/logo.webp']

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="opacity-50">/</span>
            <Link
              to="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-foreground font-medium truncate">
              {product.name}
            </span>
          </nav>
        </div>

        {/* Product Detail Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Image Gallery */}
            <div className="w-full">
              <ImageCarousel images={productImages} alt={product.name} />
            </div>

            {/* Product Information Summary */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  {product.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2">
                  {product.name}
                </h1>
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary uppercase tracking-widest hover:opacity-80 transition-opacity mb-8 group"
                >
                  Part of the Chill Wave™ Series
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="pt-8 border-t border-border/60">
                <Link
                  to="/quote"
                  search={{ product: product.name }}
                  className="inline-block px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:bg-opacity-95 transition-all shadow-xl shadow-primary/20 text-center"
                >
                  Request custom quote
                </Link>
              </div>
            </div>
          </div>

          {/* Full Width Technical Data Tables */}
          <div className="space-y-16">
            {product.series ? (
              product.series.map((s: any) => (
                <div key={s.id} className="space-y-6">
                  <div className="flex flex-col border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-bold text-foreground">{s.name}</h3>
                    <p className="text-muted-foreground mt-1">
                      {s.temperature_range && `Operating Range: ${s.temperature_range}`} 
                      {s.fin_spacing_mm && ` • Fin Spacing: ${s.fin_spacing_mm}mm`} 
                      {s.refrigerant && ` • Refrigerant: ${s.refrigerant}`}
                    </p>
                  </div>
                  <div className="overflow-x-auto rounded-[2rem] border border-border shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-zinc-50 text-zinc-900 font-bold border-b border-border">
                        <tr>
                          <th className="px-4 py-2">Model</th>
                          {s.products && s.products.length > 0 && Object.keys(s.products[0]).filter(k => !['model', 'id'].includes(k)).map(key => (
                            <th key={key} className="px-4 py-2 capitalize whitespace-nowrap">
                              {key.replace(/_/g, ' ')}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {s.products?.map((p: any) => (
                          <tr key={p.model} className="hover:bg-zinc-50/50 transition-colors">
                            <td className="px-4 py-2 font-mono font-bold text-primary text-xs">{p.model}</td>
                            {Object.entries(p).filter(([k]) => !['model', 'id'].includes(k)).map(([_, v]) => (
                              <td key={_} className="px-4 py-2 whitespace-nowrap font-medium text-zinc-600 text-xs">
                                {String(v)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            ) : product.products ? (
              <div className="space-y-6">
                <div className="flex flex-col border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold text-foreground">Models & Specifications</h3>
                  <p className="text-muted-foreground mt-1">Technical configuration and performance metrics</p>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-border shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-50 text-zinc-900 font-bold border-b border-border">
                      <tr>
                        <th className="px-4 py-2">Model</th>
                        {product.products.length > 0 && Object.keys(product.products[0]).filter(k => !['model', 'id'].includes(k)).map(key => (
                          <th key={key} className="px-4 py-2 capitalize whitespace-nowrap">
                            {key.replace(/_/g, ' ')}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {product.products.map((p: any) => (
                        <tr key={p.model} className="hover:bg-zinc-50/50 transition-colors">
                          <td className="px-4 py-2 font-mono font-bold text-primary text-xs">{p.model}</td>
                          {Object.entries(p).filter(([k]) => !['model', 'id'].includes(k)).map(([_, v]) => (
                            <td key={_} className="px-4 py-2 whitespace-nowrap font-medium text-zinc-600 text-xs">
                              {String(v)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </section>


        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Related Solutions</h2>
                <p className="text-muted-foreground">
                  Explore other high-performance products in the{' '}
                  {product.category} range
                </p>
              </div>
              <Link
                to="/products"
                search={{ category: product.categoryId }}
                className="hidden sm:block text-primary font-bold hover:underline"
              >
                View all in category
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  slug={p.slug}
                  name={p.name}
                  category={p.category}
                  image={p.image}
                  images={p.images}
                  description={p.description}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
