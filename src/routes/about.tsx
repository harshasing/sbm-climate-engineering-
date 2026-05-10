import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TrustedPartnersSection } from '@/components/TrustedPartners'
import { categories, company } from '@/data/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => {
    const title = 'About Chill Wave | S.B.M. Climate Engineering'
    const description =
      'Learn about Chill Wave, our engineering identity, and trusted global refrigeration partners.'
    const urlPath = '/about'
    const image = '/logo.webp'

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: urlPath },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ],
      links: [{ rel: 'canonical', href: urlPath }],
    }
  },
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-zinc-950 py-24 md:py-32 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-full h-[150%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute top-1/4 -right-1/4 w-[80%] h-[120%] bg-red-500/5 blur-[100px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                The Future of Cooling
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
                {company.brand}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 mb-10 text-balance leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {company.tagline}
              </p>
              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <a
                  href="/products"
                  className="px-8 py-4 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95"
                >
                  Explore Engineering
                </a>
                <a
                  href="/quote"
                  className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all"
                >
                  Get Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Legacy Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                  Our Identity
                </h2>
                <h3 className="text-4xl font-bold text-zinc-950 mb-8">
                  Engineered by S.B.M. Climate Engineering
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {company.brand} is the premier refrigeration brand of{' '}
                  {company.name}. With a legacy built on technical precision and
                  climate mastery, we bridge the gap between complex engineering
                  and reliable commercial cooling.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Operating from our headquarters in {company.address}, we have
                  established ourselves as the leading authority in Nepal&apos;s
                  climate engineering sector, delivering high-performance
                  solutions for cold storage, industrial freezing, and precise
                  temperature control.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                  <div>
                    <p className="text-4xl font-bold text-primary mb-1">100%</p>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                      Precision Tested
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-1">24/7</p>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                      Engineering Support
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl p-6">
                  <div className="relative w-full h-full rounded-2xl bg-white/70">
                    <img
                      src="/products/dd-series-evaporator.webp"
                      alt="DD Series Evaporator"
                      className="absolute top-2 left-2 w-[62%] h-[62%] object-cover rounded-xl shadow-lg"
                    />
                    <img
                      src="/products/fnh-series-condenser.webp"
                      alt="FNH Series Condenser"
                      className="absolute bottom-2 right-2 w-[62%] h-[62%] object-cover rounded-xl shadow-lg"
                    />
                    <img
                      src="/products/l-type-a-box-type-condensing-units-side-air-blow.webp"
                      alt="L Type A Condensing Unit"
                      className="absolute top-1/2 left-1/2 w-[46%] h-[46%] -translate-x-1/2 -translate-y-1/2 object-cover rounded-xl shadow-xl border border-slate-100"
                    />
                    <img
                      src="/products/fnu-series-condenser-cabinet-type.webp"
                      alt="FNU Series Condenser"
                      className="absolute top-4 right-6 w-[36%] h-[36%] object-cover rounded-xl shadow-lg border border-slate-100"
                    />
                    <img
                      src="/products/fnv-series-condenser.webp"
                      alt="FNV Series Condenser"
                      className="absolute bottom-5 left-6 w-[34%] h-[34%] object-cover rounded-xl shadow-lg border border-slate-100"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-44 h-20 bg-transparent rounded-2xl shadow-xl overflow-hidden hidden lg:block">
                  <img
                    src="/logo.webp"
                    alt="Chill Wave"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Pillars */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-zinc-950 mb-4">
                Core Innovation Pillars
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Our commitment to excellence is reflected in every component we
                design and every system we install.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Thermal Efficiency',
                  desc: 'Optimizing heat transfer with advanced fin spacing and high-quality coil materials for maximum cooling output with minimum energy consumption.',
                },
                {
                  title: 'Climate Durability',
                  desc: 'Engineered to perform in Nepal&apos;s diverse environment, from humid lowlands to high-altitude storage facilities.',
                },
                {
                  title: 'Modular Design',
                  desc: 'Flexible configurations across our DL, DD, and DJ series ensuring the perfect fit for any room size or temperature requirement.',
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group"
                >
                  <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary/5 transition-colors"></div>
                  <h4 className="text-xl font-bold text-zinc-950 mb-4">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Mastery Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-zinc-950 mb-6">
                  Our Engineering Portfolio
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We specialize in high-capacity refrigeration components
                  designed for heavy-duty industrial and commercial
                  applications.
                </p>
                <ul className="space-y-4">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className="flex items-center gap-3 font-semibold text-primary"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {cat.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {categories.slice(0, 4).map((cat) => (
                  <div
                    key={cat.id}
                    className="p-8 rounded-3xl bg-primary text-white hover:bg-primary/90 transition-colors cursor-default"
                  >
                    <h4 className="text-2xl font-bold mb-3">{cat.name}</h4>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {('description' in (cat.subcategories?.[0] || {})
                        ? (cat.subcategories?.[0] as any).description
                        : '') ||
                        'High-performance components for precise climate control.'}
                    </p>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60">
                      {cat.subcategories?.length || 0} Sub-Series Available
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Partners Section */}
        <TrustedPartnersSection
          heading="Our Trusted Global Partners"
          sectionClassName="bg-zinc-50 py-20 border-y border-zinc-200"
          containerClassName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          headingClassName="text-2xl font-bold text-zinc-400 uppercase tracking-widest mb-12"
          logosClassName="flex flex-wrap justify-center items-center gap-12 opacity-80"
          imageClassName="h-10 md:h-12 w-auto object-contain transition-all duration-300"
        />

        {/* Contact CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 transform translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience the Wave of Innovation
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg">
              Consult with our climate engineers today to find the perfect
              refrigeration solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white mb-12">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                  Direct Line
                </p>
                <p className="text-xl font-bold">{company.phone[0]}</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-1">
                  Engineering Email
                </p>
                <p className="text-xl font-bold">{company.email}</p>
              </div>
            </div>
            <a
              href="/quote"
              className="inline-block px-12 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20"
            >
              Request Technical Proposal
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
