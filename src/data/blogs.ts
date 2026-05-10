export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  author: string
  image: string
  featured: boolean
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    slug: 'the-future-of-industrial-cold-storage',
    title: 'The Future of Industrial Cold Storage',
    excerpt:
      'Discover how advanced thermal engineering is transforming food preservation in Nepal',
    content:
      'Industrial cold storage is the backbone of the modern food supply chain. By leveraging high-efficiency evaporators and precise temperature control systems, businesses can now extend the shelf life of produce while significantly reducing energy overheads.',
    category: 'Engineering',
    date: '2024-05-01',
    author: 'E.R. Harsh Singh',
    image: '/blogs/the-future-of-industrial-cold-storage.webp',
    featured: true,
  },
  {
    id: '2',
    slug: 'optimizing-thermal-insulation-efficiency',
    title: 'Optimizing Thermal Insulation Efficiency',
    excerpt:
      'Learn how to choose the right insulation materials for your industrial facility',
    content:
      "Sustainability in refrigeration begins with superior insulation. Proper thermal barriers not only maintain consistent temperatures but also reduce the load on compressors, leading to lower maintenance costs and a smaller carbon footprint.",
    category: 'Innovation',
    date: '2024-04-28',
    author: 'S.B.M. Technical Team',
    image: '/blogs/optimizing-thermal-insulation-efficiency.webp',
    featured: true,
  },
  {
    id: '3',
    slug: 'precision-cooling-in-pharmaceuticals',
    title: 'Precision Cooling in Pharmaceuticals',
    excerpt: 'The critical role of stable temperature control in medicine storage',
    content:
      "Pharmaceutical preservation requires absolute precision. Our DJ and DD series evaporators provide the stable, low-temperature environments necessary for vaccine and medicine storage, ensuring life-saving products remain effective.",
    category: 'Pharma',
    date: '2024-04-25',
    author: 'Engineering Dept',
    image: '/blogs/the-future-of-industrial-cold-storage.webp',
    featured: false,
  },
]
