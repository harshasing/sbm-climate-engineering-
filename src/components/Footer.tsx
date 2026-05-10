import { company } from '@/data/products'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/logo.webp"
                alt={`${company.brand} Logo`}
                className="h-20 w-auto "
              />
            </div>
            <p className="text-sm text-gray-300">
              Leading refrigeration and thermal engineering solutions for
              commercial excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-xs opacity-50">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/products" className="hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-primary transition">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-xs opacity-50">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Climate Consulting</li>
              <li>Cold Room Design</li>
              <li>Industrial Installation</li>
              <li>24/7 Technical Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-xs opacity-50">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase opacity-50">Email</span>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-primary transition"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase opacity-50">Phone</span>
                <span className="font-medium text-white">
                  {company.phone[0]}
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase opacity-50">
                  Address
                </span>
                <span className="leading-tight">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span className="font-bold text-gray-400">CHILLWAVES.COM.NP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
