'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (!images || images.length === 0) return null

  return (
    <div className="space-y-6">
      {/* Main Image Container */}
      <div className="relative group aspect-square bg-secondary rounded-3xl overflow-hidden border border-border/50 shadow-sm">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-500 ease-out animate-in fade-in zoom-in-95"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={goToPrevious}
              className="p-3 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Image Counter Overlay */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails Container */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative shrink-0 w-20 h-20 rounded-2xl overflow-hidden transition-all duration-200 ${
                index === currentIndex
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <img
                src={image}
                alt={`${alt} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

