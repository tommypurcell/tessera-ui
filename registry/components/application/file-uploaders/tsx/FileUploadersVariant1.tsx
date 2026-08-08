import { useId, useState, type DragEvent, type HTMLAttributes } from 'react'

export type FileUploadersVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> & {
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
export function FileUploadersVariant1({
  className,
  value,
  onChange,
  multiple = true,
  ...props
}: FileUploadersVariant1Props) {
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
        className={`block rounded border p-4 text-gray-900 shadow-sm sm:p-6 ${
          isDraggingOver ? 'border-gray-500 bg-gray-50' : 'border-gray-300'
        }`}
      >
        <div className="flex items-center justify-center gap-4">
          <span className="font-medium"> Upload your file(s) </span>

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
        </div>

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
            <li key={file.name} className="text-sm text-gray-600">
              {file.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
