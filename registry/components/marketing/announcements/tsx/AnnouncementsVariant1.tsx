import type { HTMLAttributes } from 'react'

export type AnnouncementsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AnnouncementsVariant1({ className, ...props }: AnnouncementsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-gray-900">
        <p className="text-center font-medium">
          Lorem, ipsum dolor
          <a href="#" className="inline-block underline">
            {' '}
            sit amet consectetur{' '}
          </a>
        </p>
      </div>
    </div>
  )
}
