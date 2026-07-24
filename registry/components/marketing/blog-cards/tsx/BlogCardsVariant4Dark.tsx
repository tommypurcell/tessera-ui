import type { HTMLAttributes } from 'react'

export type BlogCardsVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BlogCardsVariant4Dark({ className, ...props }: BlogCardsVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <article className="rounded-[10px] border border-gray-200 bg-white px-4 pt-12 pb-4 dark:border-gray-700 dark:bg-gray-900">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
          10th Oct 2022
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            How to center an element using JavaScript and jQuery
          </h3>
        </a>

        <div className="mt-4 flex flex-wrap gap-1">
          <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600 dark:bg-purple-600 dark:text-purple-100">
            Snippet
          </span>

          <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600 dark:bg-purple-600 dark:text-purple-100">
            JavaScript
          </span>
        </div>
      </article>
    </div>
  )
}
