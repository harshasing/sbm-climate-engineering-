import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quote')({
  component: RouteComponent,
})

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { company, categories } from '@/data/products'
import { useState } from 'react'

function RouteComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    category: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        farmSize: '',
        category: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-secondary py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Get a Quote
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              Let us help you find the perfect refrigeration and thermal engineering solution for your needs
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
              <p className="font-bold">Thank you for your submission!</p>
              <p>
                We&apos;ll be in touch within 24 hours with personalized
                recommendations.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Facility Size */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Facility Size / Storage Capacity *
              </label>
              <input
                type="text"
                name="farmSize"
                value={formData.farmSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="e.g., 500 sq ft or 10 tons"
              />
            </div>

            {/* Product Category */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Interested Product Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="Tell us about your cooling requirements and specific needs..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-opacity-90 transition text-lg"
            >
              Request Quote
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">{company.phone[0]}</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">{company.email}</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-2">Response Time</h3>
              <p className="text-muted-foreground">24 hours</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
