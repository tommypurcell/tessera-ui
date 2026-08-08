export type TestimonialCardVariant1Props = {
  rating: number
  quote: string
  avatarUrl: string
  name: string
  role: string
  className?: string
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`size-4 ${filled ? 'text-amber-400' : 'text-gray-200'}`}>
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.454 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
      clipRule="evenodd"
    />
  </svg>
)

/**
 * Copy-and-own Tailwind component. Marketing testimonial card: a star
 * rating, blockquote, and reviewer avatar with name/role. Distinct from
 * Social Post Card, which shows a photo post with like/comment
 * interactions rather than a quoted customer endorsement with a rating.
 */
export function TestimonialCard({ rating, quote, avatarUrl, name, role, className }: TestimonialCardVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 ${className ?? ''}`}>
      <div className="flex items-center gap-1" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={star <= rating} />
        ))}
      </div>

      <blockquote className="mt-4 text-sm text-gray-700">&ldquo;{quote}&rdquo;</blockquote>

      <div className="mt-5 flex items-center gap-3">
        <img src={avatarUrl} alt={name} className="size-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
