import type { ReactNode } from 'react'

export type QrCodeCardVariant1DarkProps = {
  title: string
  value: string
  qrCode?: ReactNode
  onDownload?: () => void
  onCopyLink?: () => void
  className?: string
}

const placeholderPath =
  'M0 0h7v7H0zM9 0h1v1H9zM11 0h3v1h-3zM16 0h1v2h-1zM18 0h1v1h-1zM22 0h7v7h-7zM1 1h5v5H1zM12 1h1v1h-1zM14 1h1v1h-1zM19 1h2v1h-2zM23 1h5v5h-5zM10 2h1v1h-1zM13 2h1v1h-1zM17 2h1v3h-1zM24 2h3v3h-3zM9 3h1v3h-1zM12 3h1v1h-1zM15 3h1v1h-1zM19 3h1v1h-1zM11 4h1v1h-1zM14 4h1v2h-1zM19 4h2v1h-2zM0 9h1v2h-1zM2 9h2v1h-2zM6 9h1v1h-1zM9 9h4v1h-4zM15 9h2v2h-2zM18 9h1v1h-1zM20 9h1v3h-1zM22 9h1v1h-1zM24 9h1v1h-1zM26 9h2v2h-2zM1 10h1v3h-1zM4 10h2v1h-2zM8 10h1v3h-1zM10 10h1v4h-1zM12 10h1v1h-1zM14 10h1v2h-1zM17 10h1v1h-1zM23 10h1v3h-1zM25 10h1v1h-1zM0 11h1v1h-1zM3 11h1v2h-1zM6 11h2v1h-2zM11 11h1v3h-1zM13 11h1v1h-1zM15 11h1v1h-1zM18 11h2v1h-2zM21 11h2v1h-2zM26 11h2v1h-2zM2 12h1v1h-1zM5 12h1v2h-1zM9 12h1v1h-1zM16 12h1v2h-1zM19 12h1v2h-1zM22 12h1v1h-1zM24 12h1v3h-1zM26 12h1v3h-1zM0 13h1v1h-1zM4 13h1v1h-1zM7 13h1v2h-1zM12 13h1v3h-1zM15 13h1v1h-1zM18 13h1v1h-1zM21 13h1v2h-1zM28 13h1v3h-1zM1 14h2v1h-2zM6 14h1v1h-1zM9 14h1v2h-1zM17 14h1v3h-1zM20 14h1v1h-1zM23 14h1v1h-1zM25 14h1v3h-1zM27 14h1v2h-1zM0 15h1v3h-1zM3 15h1v1h-1zM8 15h1v1h-1zM10 15h1v2h-1zM13 15h2v1h-2zM19 15h1v3h-1zM22 15h1v3h-1zM2 16h1v3h-1zM5 16h2v1h-2zM11 16h1v2h-1zM14 16h1v3h-1zM16 16h1v1h-1zM18 16h1v3h-1zM24 16h1v1h-1zM26 16h2v1h-2zM4 17h1v1h-1zM7 17h1v3h-1zM9 17h1v1h-1zM12 17h1v2h-1zM20 17h2v1h-2zM23 17h1v2h-1zM25 17h1v3h-1zM28 17h1v3h-1zM1 18h1v3h-1zM3 18h1v2h-1zM6 18h1v1h-1zM10 18h1v2h-1zM13 18h1v1h-1zM16 18h1v2h-1zM21 18h1v3h-1zM27 18h1v1h-1zM0 21h7v7H0zM8 21h1v1h-1zM11 21h2v1h-2zM15 21h1v2h-1zM17 21h2v2h-2zM20 21h1v1h-1zM22 21h1v2h-1zM24 21h4v1h-4zM1 22h5v5H1zM9 22h1v3h-1zM13 22h1v3h-1zM16 22h1v1h-1zM19 22h1v3h-1zM23 22h2v1h-2zM26 22h1v3h-1zM10 23h1v1h-1zM12 23h1v1h-1zM14 23h1v1h-1zM17 23h1v1h-1zM21 23h1v1h-1zM24 23h1v3h-1zM28 23h1v1h-1zM11 24h1v1h-1zM15 24h2v1h-2zM18 24h1v2h-1zM22 24h1v3h-1zM25 24h1v1h-1zM27 24h1v2h-1zM9 25h1v3h-1zM12 25h1v2h-1zM16 25h1v1h-1zM20 25h2v1h-2zM10 26h1v1h-1zM14 26h1v2h-1zM17 26h1v2h-1zM21 26h1v2h-1zM25 26h2v1h-2zM11 27h1v1h-1zM15 27h1v1h-1zM19 27h1v1h-1zM23 27h1v1h-1zM26 27h1v1h-1zM28 27h1v1h-1z'

/**
 * Copy-and-own Tailwind component (dark surface). Card presenting a generated QR
 * code with a caption, the encoded value as visible text, and Download/Copy link
 * actions. The QR itself always renders on a white tile for scannability.
 */
export function QrCodeCard({ title, value, qrCode, onDownload, onCopyLink, className }: QrCodeCardVariant1DarkProps) {
  return (
    <div className={`w-full rounded-xl border border-gray-800 bg-gray-900 p-5 text-center ${className ?? ''}`}>
      <div
        className="mx-auto flex h-40 w-40 items-center justify-center rounded-lg border border-gray-800 bg-white p-2"
        role="img"
        aria-label={`QR code linking to ${value}`}
      >
        {qrCode ?? (
          <svg viewBox="0 0 29 29" className="h-full w-full text-gray-900" fill="currentColor" shapeRendering="crispEdges">
            <path d={placeholderPath} />
          </svg>
        )}
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-100">{title}</h3>
      <p className="mt-1 truncate text-xs text-gray-400">{value}</p>

      <div className="mt-4 flex gap-2">
        <button type="button" onClick={onDownload} className="flex-1 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800">
          Download
        </button>
        <button type="button" onClick={onCopyLink} className="flex-1 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800">
          Copy link
        </button>
      </div>
    </div>
  )
}
