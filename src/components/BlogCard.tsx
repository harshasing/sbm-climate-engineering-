import { Link } from '@tanstack/react-router'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  category: string
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  author,
  image,
  category,
}: BlogCardProps) {
  return (
    <Link to="/blog/$slug" params={{ slug }}>
      <div className="group cursor-pointer">
        <div className="relative h-64 bg-secondary rounded-lg overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary font-bold">{category}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{date}</span>
          </div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
          <p className="text-sm text-muted-foreground">By {author}</p>
        </div>
      </div>
    </Link>
  )
}
