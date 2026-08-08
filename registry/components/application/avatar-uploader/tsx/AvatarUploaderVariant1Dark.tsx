import { useId, useRef, useState } from 'react'

export type AvatarUploaderVariant1DarkProps = {
  initialImageSrc?: string
  name?: string
  helpText?: string
  onFileSelect?: (file: File) => void
  onRemove?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Circular avatar drop-zone adapted for dark surfaces,
 * with a hover camera overlay, a real file input driving a live object-URL preview, and
 * Replace/Remove actions.
 */
export function AvatarUploaderVariant1Dark({
  initialImageSrc,
  name = 'Current profile photo',
  helpText = 'JPG, PNG or GIF. Max 5MB.',
  onFileSelect,
  onRemove,
  className,
}: AvatarUploaderVariant1DarkProps) {
  const [imageSrc, setImageSrc] = useState(initialImageSrc)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageSrc(URL.createObjectURL(file))
    onFileSelect?.(file)
  }

  const handleRemove = () => {
    setImageSrc(undefined)
    if (inputRef.current) inputRef.current.value = ''
    onRemove?.()
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ''}`}>
      <label
        htmlFor={inputId}
        className="group relative block size-24 cursor-pointer overflow-hidden rounded-full bg-gray-900 ring-1 ring-inset ring-gray-700"
      >
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="size-full object-cover" />
        ) : (
          <span className="flex size-full items-center justify-center text-xs font-medium text-gray-500">
            No photo
          </span>
        )}

        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        </span>

        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="sr-only"
        />
      </label>

      <div className="flex items-center gap-3 text-xs font-medium">
        <label htmlFor={inputId} className="cursor-pointer text-blue-400 hover:text-blue-300">
          {imageSrc ? 'Replace photo' : 'Upload photo'}
        </label>
        {imageSrc ? (
          <>
            <span className="text-gray-700">&middot;</span>
            <button type="button" onClick={handleRemove} className="text-gray-400 hover:text-gray-200">
              Remove
            </button>
          </>
        ) : null}
      </div>

      <p className="text-center text-xs text-gray-500">{helpText}</p>
    </div>
  )
}
