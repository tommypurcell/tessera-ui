import type { HTMLAttributes } from 'react'

export type TextareasVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant1Dark({ className, ...props }: TextareasVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Notes" className="text-black dark:text-white">
        <span className="text-sm font-semibold"> Notes </span>

        <textarea
          id="Notes"
          className="mt-0.5 w-full resize-none border-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-yellow-600"
          rows={4}
        ></textarea>
      </label>
    </div>
  )
}
