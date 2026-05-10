import { Link } from '@tanstack/react-router'

interface ProductCardProps {
  slug: string
  name: string
  category: string
  image?: string
  images?: string[]
  description: string
  model?: string
  specs?: { label: string; value: string }[]
}

export function ProductCard({
  slug,
  name,
  category,
  image,
  images,
  description,
}: ProductCardProps) {
  const primaryImage = images?.[0] || image || '/logo.webp'

  return (
    <Link to="/products/$slug" params={{ slug }} className="group block">
      <div className="flex flex-col space-y-6 transition-all duration-500">
        {/* Hero Image Container */}
        <div className="relative aspect-square overflow-hidden bg-[#F5F5F7] rounded-3xl">
          <img
            src={primaryImage}
            alt={name}
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Minimal Info */}
        <div className="space-y-2 px-2">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              {category}
            </span>
          </div>
          
          <h3 className="text-xl font-medium text-zinc-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <p className="text-sm text-zinc-500 line-clamp-2 font-normal leading-relaxed max-w-[90%]">
            {description}
          </p>

          <div className="pt-4 flex items-center text-xs font-bold text-zinc-900 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            View Details
            <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
