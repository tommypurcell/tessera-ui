export type DatingProfileCardVariant1Props = {
  name: string
  age: number
  occupation: string
  distanceLabel: string
  bio: string
  interests: string[]
  photoGradientClassName?: string
  onPass?: () => void
  onLike?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Dating profile card — full-bleed photo with a
 * bottom gradient scrim carrying name/age/bio/interests, plus real Pass/Like actions
 * below the card, distinct from the neutral thumbnail-and-white-card layout of
 * card-stack.
 */
export function DatingProfileCardVariant1({
  name,
  age,
  occupation,
  distanceLabel,
  bio,
  interests,
  photoGradientClassName = 'from-rose-300 via-orange-300 to-amber-200',
  onPass,
  onLike,
  className,
}: DatingProfileCardVariant1Props) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className ?? ''}`}>
      <div className={`relative h-[26rem] w-72 overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg shadow-gray-900/20 ${photoGradientClassName}`}>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-16 text-white">
          <div className="flex items-baseline gap-1.5">
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className="text-sm text-white/80">{age}</span>
          </div>
          <p className="mt-0.5 text-xs text-white/70">
            {occupation} &middot; {distanceLabel}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/90">{bio}</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-3 right-3 rounded-full bg-black/40 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">Swipe to decide</div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={`Pass on ${name}`}
          onClick={onPass}
          className="inline-flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-red-500 shadow-sm transition-colors hover:bg-red-50"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <button
          type="button"
          aria-label={`Like ${name}`}
          onClick={onLike}
          className="inline-flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-rose-500 shadow-sm transition-colors hover:bg-rose-50"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path
              fillRule="evenodd"
              d="M11.645 20.91a.75.75 0 0 1-.65-.375C9.24 17.845 5.5 14.7 5.5 10.75a5.25 5.25 0 0 1 9.5-3.077 5.25 5.25 0 0 1 9.5 3.077c0 3.95-3.74 7.095-5.495 9.785a.75.75 0 0 1-.65.375h-6.71Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
