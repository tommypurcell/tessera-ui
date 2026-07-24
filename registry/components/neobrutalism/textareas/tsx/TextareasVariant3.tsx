import type { HTMLAttributes } from 'react'

export type TextareasVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant3({ className, ...props }: TextareasVariant3Props) {
  return (
    <div className={className} {...props}>
      <div>
        <label htmlFor="Notes" className="text-black">
          <span className="text-sm font-semibold"> Notes </span>

          <textarea
            id="Notes"
            className="mt-0.5 w-full resize-none border-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm"
            rows={4}
          ></textarea>
        </label>

        <div className="mt-3 flex items-center justify-end gap-3">
          <button
            type="button"
            className="border-2 px-3 py-1.5 text-sm font-semibold text-black shadow-[2px_2px_0_0] shadow-black hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0"
          >
            Clear
          </button>

          <button
            type="button"
            className="border-2 bg-yellow-200 px-3 py-1.5 text-sm font-semibold text-black shadow-[2px_2px_0_0] shadow-black hover:bg-yellow-400 focus:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
