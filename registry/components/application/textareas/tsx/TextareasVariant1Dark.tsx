import type { HTMLAttributes } from 'react'

export type TextareasVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant1Dark({ className, ...props }: TextareasVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Notes">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Notes </span>

        <textarea
          id="Notes"
          className="mt-0.5 w-full resize-none rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          rows={4}
        ></textarea>
      </label>
    </div>
  )
}
