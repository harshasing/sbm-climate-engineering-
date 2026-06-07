import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { categories, products, superCategories } from '@/data/products'
import { Suspense } from 'react'

const productSearchSchema = z.object({
  superCategory: z.string().optional(),
  category: z.string().optional(),
  page: z.number().catch(1).optional(),
  q: z.string().optional(),
})

export const Route = createFileRoute('/products/')({
  head: () => {
    const title = 'Products | Chill Wave'
    const description =
      'Browse evaporators, condensing units, condensers, ventilation systems, and industrial climate solutions.'
    const urlPath = '/products'
    const image = '/products/dd-series-evaporator.webp'

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
  validateSearch: (search) => productSearchSchema.parse(search),
  component: RouteComponent,
})

 function ProductsContent() {
  const { superCategory: selectedSuperCategory, category: selectedCategory, page = 1, q: searchItem } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const pageSize = 12

  const filteredProducts = products.filter((p) => {
    const matchesSuperCategory = selectedSuperCategory
      ? categories.find((c) => c.id === p.categoryId)?.superCategoryId === selectedSuperCategory
      : true
    const matchesCategory = selectedCategory ? p.categoryId === selectedCategory : true
    const matchesSearch = searchItem
      ? p.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        p.description.toLowerCase().includes(searchItem.toLowerCase()) ||
        (p.model && p.model.toLowerCase().includes(searchItem.toLowerCase()))
      : true
    return matchesSuperCategory && matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredProducts.length / pageSize)
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize,
  )

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Minimal Header */}
        <section className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl font-light text-zinc-900 tracking-tight mb-2">
                Our Products
              </h1>
              <p className="text-sm text-zinc-400 max-w-lg">
                Technical precision and engineering excellence.
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search products..."
                defaultValue={searchItem}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const value = (e.target as HTMLInputElement).value
                    navigate({
                      search: (prev: any) => ({ ...prev, q: value || undefined, page: 1 }),
                    })
                  }
                }}
                className="w-full bg-zinc-50 border-none rounded-2xl px-6 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Minimal Filter */}
        <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-sm border-y border-zinc-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Super Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3 pb-4">
              <Link
                to="/products"
                search={{ superCategory: undefined, category: undefined, page: 1 }}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  !selectedSuperCategory && !selectedCategory
                    ? 'bg-zinc-950 text-white shadow-md'
                    : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'
                }`}
              >
                All Products
              </Link>
              {superCategories.map((sc) => (
                <Link
                  key={sc.id}
                  to="/products"
                  search={{ superCategory: sc.id, category: undefined, page: 1 }}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedSuperCategory === sc.id && !selectedCategory
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-zinc-50 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'
                  }`}
                >
                  {sc.name}
                </Link>
              ))}
            </div>

            {/* Specific Subcategory Filters */}
            <div className="flex flex-wrap items-center gap-2 mt-2 pt-4 border-t border-zinc-100">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mr-2">
                Sub-Filters:
              </span>
              {(selectedSuperCategory 
                ? categories.filter(c => c.superCategoryId === selectedSuperCategory)
                : categories
              ).map((cat) => (
                <Link
                  key={cat.id}
                  to="/products"
                  search={{ 
                    superCategory: cat.superCategoryId, 
                    category: cat.id, 
                    page: 1 
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border ${
                    selectedCategory === cat.id
                      ? 'bg-zinc-950 border-zinc-950 text-white'
                      : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
              {selectedCategory && (
                <Link
                  to="/products"
                  search={{ 
                    superCategory: selectedSuperCategory, 
                    category: undefined, 
                    page: 1 
                  }}
                  className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors pl-2"
                >
                  Clear filter
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {paginatedProducts.map((product) => {
                const specs = []
                if (product.series) {
                  specs.push({ label: 'Variants', value: `${product.series.length} Series` })
                } else if (product.products) {
                  specs.push({ label: 'Models', value: `${product.products.length} Units` })
                }
                
                if (product.refrigerant) specs.push({ label: 'Refrigerant', value: product.refrigerant })

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
          ) : (
            <div className="text-center py-32">
              <p className="text-sm text-zinc-400">No results found.</p>
            </div>
          )}

          {/* Minimal Pagination */}
          {totalPages > 1 && (
            <div className="mt-32 flex justify-center items-center gap-8">
              <Link
                to="/products"
                search={(prev: any) => ({ ...prev, page: Math.max(1, (prev.page || 1) - 1) })}
                disabled={page === 1}
                className={`text-xs font-bold uppercase tracking-widest ${
                  page === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:text-primary'
                }`}
              >
                Prev
              </Link>
              
              <div className="flex gap-4">
                {[...Array(totalPages)].map((_, i) => (
                  <Link
                    key={i}
                    to="/products"
                    search={(prev: any) => ({ ...prev, page: i + 1 })}
                    className={`text-xs font-bold ${
                      page === i + 1 ? 'text-primary underline underline-offset-8' : 'text-zinc-300 hover:text-zinc-500'
                    }`}
                  >
                    {i + 1}
                  </Link>
                ))}
              </div>

              <Link
                to="/products"
                search={(prev: any) => ({ ...prev, page: Math.min(totalPages, (prev.page || 1) + 1) })}
                disabled={page === totalPages}
                className={`text-xs font-bold uppercase tracking-widest ${
                  page === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:text-primary'
                }`}
              >
                Next
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

function RouteComponent() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <div className="min-h-screen flex items-center justify-center">
            <p>Loading products...</p>
          </div>
          <Footer />
        </>
      }
    >
      <ProductsContent />
    </Suspense>
  )
}
