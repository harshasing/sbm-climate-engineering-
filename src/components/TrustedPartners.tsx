type TrustedPartnerSectionProps = {
  heading: string
  sectionClassName?: string
  containerClassName?: string
  headingClassName?: string
  logosClassName?: string
  imageClassName?: string
}

const partners = [
  { name: 'Tecumseh', url: '/trusted-partners/tecumseh.webp' },
  { name: 'Embraco', url: '/trusted-partners/embraco.webp' },
  { name: 'Dry All', url: '/trusted-partners/dry-all.webp' },
  { name: 'Sub-Zero', url: '/trusted-partners/sub-zero.webp' },
  { name: 'Östberg', url: '/trusted-partners/ostberg.webp' },
  { name: 'Danfoss', url: '/trusted-partners/danfoss.webp' },
  { name: 'Copeland', url: '/trusted-partners/copeland.webp' },
  { name: 'Hicool', url: '/trusted-partners/hicool.webp' },
]

export function TrustedPartnersSection({
  heading,
  sectionClassName = '',
  containerClassName = '',
  headingClassName = '',
  logosClassName = '',
  imageClassName = '',
}: TrustedPartnerSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h2 className={headingClassName}>{heading}</h2>
        <div className={logosClassName}>
          {partners.map((brand) => (
            <img
              key={brand.name}
              src={brand.url}
              alt={brand.name}
              className={`${imageClassName} ${
                brand.name === 'Embraco' ? 'bg-zinc-900/80 p-2 rounded-md' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
