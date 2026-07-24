import type { HTMLAttributes } from 'react'

export type TextareasVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant1({ className, ...props }: TextareasVariant1Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Notes" className="text-black">
        <span className="text-sm font-semibold"> Notes </span>

        <textarea
          id="Notes"
          className="mt-0.5 w-full resize-none border-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm"
          rows={4}
        ></textarea>
      </label>
    </div>
  )
}
