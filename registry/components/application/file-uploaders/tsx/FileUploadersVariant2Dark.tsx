import { useId, useState, type DragEvent, type HTMLAttributes } from 'react'

export type FileUploadersVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> & {
  /** Selected files. Pass this to run the uploader as a controlled component. */
  value?: File[]
  /** Called with the full updated file list whenever files are picked or dropped. */
  onChange?: (files: File[]) => void
  /** Allows more than one file at a time. Defaults to true. */
  multiple?: boolean
}

/**
 * Copy-and-own Tailwind component. Real drag-and-drop and file-picker wiring —
 * pass `value`/`onChange` to run it as a controlled component.
 */
export function FileUploadersVariant2Dark({
  className,
  value,
  onChange,
  multiple = true,
  ...props
}: FileUploadersVariant2DarkProps) {
  const inputId = useId()
  const [isDraggingOver, setIsDraggingOver] = useState(false)

  function emit(fileList: FileList | null) {
    if (!fileList || !onChange) {
      return
    }
    onChange(Array.from(fileList))
  }

  function handleDragOver(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setIsDraggingOver(true)
  }

  function handleDragLeave() {
    setIsDraggingOver(false)
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setIsDraggingOver(false)
    emit(event.dataTransfer.files)
  }

  return (
    <div className={className} {...props}>
      <label
        htmlFor={inputId}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex flex-col items-center rounded border bg-white p-4 text-gray-900 shadow-sm sm:p-6 dark:bg-gray-900 dark:text-white ${
          isDraggingOver ? 'border-gray-500 dark:border-gray-400' : 'border-gray-300 dark:border-gray-700'
        }`}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
          />
        </svg>

        <span className="mt-4 font-medium dark:text-white"> Upload your file(s) </span>

        <span className="mt-2 inline-block rounded border border-gray-200 bg-gray-50 px-3 py-1.5 text-center text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
          Browse files
        </span>

        <input
          multiple={multiple}
          type="file"
          id={inputId}
          className="sr-only"
          onChange={(event) => emit(event.target.files)}
        />
      </label>

      {value && value.length > 0 ? (
        <ul className="mt-3 flex flex-col gap-1">
          {value.map((file) => (
            <li key={file.name} className="text-sm text-gray-400">
              {file.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
