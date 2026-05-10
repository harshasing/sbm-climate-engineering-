import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/opportunity')({
  head: () => {
    const title = 'Opportunity | Chill Wave'
    const description =
      'Build your career and business opportunities with Chill Wave climate engineering solutions.'
    const urlPath = '/opportunity'
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
      ],
      links: [{ rel: 'canonical', href: urlPath }],
    }
  },
  component: OpportunityPage,
})

function OpportunityPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-zinc-950 py-24 md:py-32 border-b border-white/10">
          <div className="absolute inset-0">
            <div className="absolute -top-1/3 -left-1/4 w-full h-[140%] rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute top-1/3 -right-1/4 w-[80%] h-[120%] rounded-full bg-white/5 blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Grow With Us
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 text-balance">
              Opportunity
            </h1>
            <p className="max-w-3xl text-xl text-zinc-300 leading-relaxed">
              Join our network of engineers, partners, and project teams to deliver high-performance cooling solutions across industrial and commercial sectors.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Career Openings',
                desc: 'Work with experienced professionals in refrigeration design, system installation, and technical support.',
              },
              {
                title: 'Channel Partnerships',
                desc: 'Collaborate as a distribution or implementation partner and expand your market with trusted products.',
              },
              {
                title: 'Project Collaboration',
                desc: 'Partner with our engineering team on end-to-end climate solutions for complex facilities.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-white p-8 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold text-foreground mb-3">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Let&apos;s Build Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us how you want to collaborate, and our team will reach out with next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacts"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition"
              >
                Contact Team
              </Link>
              <Link
                to="/quote"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition"
              >
                Request Project Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
