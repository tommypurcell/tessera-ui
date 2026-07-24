import type { HTMLAttributes } from 'react'

export type TextareasVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant1({ className, ...props }: TextareasVariant1Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Notes">
        <span className="text-sm font-medium text-gray-700"> Notes </span>

        <textarea
          id="Notes"
          className="mt-0.5 w-full resize-none rounded border-gray-300 shadow-sm sm:text-sm"
          rows={4}
        ></textarea>
      </label>
    </div>
  )
}
