import { Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate({
        to: '/products',
        search: { q: searchQuery, page: 1 },
      })
      setSearchQuery('')
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.webp"
              alt="Chill Wave Logo"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/about', label: 'About' },
              { to: '/blog', label: 'Blog' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-primary transition-all font-semibold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative group">
              <button
                type="button"
                className="text-foreground/80 hover:text-primary transition-all font-semibold"
              >
                More
              </button>
              <div className="absolute right-0 top-9 min-w-44 rounded-xl border border-border bg-white shadow-lg p-2 z-50 opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                <Link
                  to="/opportunity"
                  className="block px-3 py-2 rounded-md text-sm font-semibold text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  Opportunity
                </Link>
                <Link
                  to="/contacts"
                  className="block px-3 py-2 rounded-md text-sm font-semibold text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </nav>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xs mx-12"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-full px-5 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <svg
                  className="w-4 h-4 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* CTA Button */}
          <Link
            to="/quote"
            className="hidden sm:block px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 pt-2 flex flex-col gap-1 border-t border-border mt-2 animate-in fade-in slide-in-from-top-4 duration-300">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/about', label: 'About' },
              { to: '/blog', label: 'Blog' },
              { to: '/opportunity', label: 'Opportunity' },
              { to: '/contacts', label: 'Contacts' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors font-semibold py-3 px-2 rounded-md hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-opacity-90 transition shadow-lg shadow-primary/10 text-center"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
