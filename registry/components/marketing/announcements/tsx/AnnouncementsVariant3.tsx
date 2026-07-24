import type { HTMLAttributes } from 'react'

export type AnnouncementsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AnnouncementsVariant3({ className, ...props }: AnnouncementsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="fixed inset-x-0 bottom-0 z-auto border-t border-gray-200 bg-gray-100 px-4 py-2 text-gray-900">
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
