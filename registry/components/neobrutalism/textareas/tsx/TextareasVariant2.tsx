import type { HTMLAttributes } from 'react'

export type TextareasVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextareasVariant2({ className, ...props }: TextareasVariant2Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Notes" className="text-black">
        <span className="text-sm font-semibold"> Notes </span>

        <div className="relative mt-0.5 overflow-hidden border-2 border-black shadow-[4px_4px_0_0] shadow-black focus-within:ring-2 focus-within:ring-yellow-300">
          <textarea
            id="Notes"
            className="w-full resize-none border-0 bg-white focus:ring-0 sm:text-sm"
            rows={4}
          ></textarea>

          <div className="flex items-center justify-end gap-3 border-t-2 border-black p-3">
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
      </label>
    </div>
  )
}
