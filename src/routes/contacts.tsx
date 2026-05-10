import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { company } from '@/data/products'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts')({
  head: () => {
    const title = 'Contacts | Chill Wave'
    const description =
      'Contact Chill Wave for refrigeration products, technical consultation, and project support.'
    const urlPath = '/contacts'
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
      ],
      links: [{ rel: 'canonical', href: urlPath }],
    }
  },
  component: ContactsPage,
})

function ContactsPage() {
  const phoneList = Array.isArray(company.phone) ? company.phone : [company.phone]
  const emailList = Array.isArray(company.email) ? company.email : [company.email]

  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary border-b border-border py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-black text-foreground mb-4">Contacts</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Reach our team for product consultation, installation guidance, maintenance planning, or business inquiries.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white border border-border p-8">
              <h2 className="text-xl font-bold mb-2">Phone</h2>
              {phoneList.map((phone) => (
                <p key={phone} className="text-muted-foreground mb-1">{phone}</p>
              ))}
            </div>
            <div className="rounded-2xl bg-white border border-border p-8">
              <h2 className="text-xl font-bold mb-2">Email</h2>
              {emailList.map((email) => (
                <p key={email} className="text-muted-foreground mb-1">{email}</p>
              ))}
            </div>
            <div className="rounded-2xl bg-white border border-border p-8">
              <h2 className="text-xl font-bold mb-2">Address</h2>
              <p className="text-muted-foreground">{company.address}</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Need a Fast Response?</h2>
            <p className="text-zinc-300 text-lg mb-8">
              Send your project requirements and we&apos;ll respond with tailored recommendations.
            </p>
            <Link
              to="/quote"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition"
            >
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
