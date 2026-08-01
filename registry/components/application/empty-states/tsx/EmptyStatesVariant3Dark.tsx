import type { HTMLAttributes } from 'react'

export type EmptyStatesVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function EmptyStatesVariant3Dark({ className, ...props }: EmptyStatesVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="max-w-md text-center">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mx-auto size-20 text-gray-400 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>
      
            <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">Upload your files</h2>
      
            <p className="mt-4 text-pretty text-gray-700 dark:text-gray-200">
              Drag and drop files here or click to browse your computer.
            </p>
      
            <label
              htmlFor="files"
              className="mt-6 block rounded-lg border-2 border-dashed border-gray-300 p-6 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800/50"
            >
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-500">
                Choose files
              </span>
      
              <input type="file" id="files" className="sr-only" />
            </label>
      
            <p className="mt-6 text-sm text-gray-700 dark:text-gray-200">
              Maximum file size: 10MB. Supported formats: PDF, DOCX, XLSX
            </p>
          </div>
    </div>
  )
}
