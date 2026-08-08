import { useState } from 'react'

export type CarouselSlide = {
  src: string
  alt: string
}

export type CarouselVariant1DarkProps = {
  slides?: CarouselSlide[]
  /** Index of the slide shown initially. */
  initialIndex?: number
  label?: string
  className?: string
}

const DEFAULT_SLIDES: CarouselSlide[] = [
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=448&fit=crop', alt: 'Forest path in morning light' },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=448&fit=crop', alt: 'Mountain lake at sunrise' },
  { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=448&fit=crop', alt: 'Desert dunes at dusk' },
]

/**
 * Copy-and-own Tailwind component. Single-image-at-a-time carousel with previous/next
 * controls and dot indicators, adapted for dark surfaces.
 */
export function CarouselVariant1Dark({
  slides = DEFAULT_SLIDES,
  initialIndex = 0,
  label = 'Featured photos',
  className,
}: CarouselVariant1DarkProps) {
  const [index, setIndex] = useState(initialIndex)

  const goToPrevious = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
  const goToNext = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))

  const slide = slides[index]

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={`relative overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}
    >
      <div className="relative h-56 w-full">
        <img
          src={slide.src}
          alt={`Slide ${index + 1} of ${slides.length}: ${slide.alt}`}
          className="h-full w-full object-cover"
        />
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex size-8 items-center justify-center rounded-full bg-gray-950/80 text-gray-200 shadow-md hover:bg-gray-900"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex size-8 items-center justify-center rounded-full bg-gray-950/80 text-gray-200 shadow-md hover:bg-gray-900"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div
        role="tablist"
        aria-label="Slide navigation"
        className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5"
      >
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={i === index ? 'h-1.5 w-4 rounded-full bg-white' : 'size-1.5 rounded-full bg-white/40'}
          />
        ))}
      </div>
    </div>
  )
}
