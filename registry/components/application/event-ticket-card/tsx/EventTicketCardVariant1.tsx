import type { ReactNode } from 'react'

export type EventTicketCardVariant1Props = {
  category: string
  eventName: string
  dateTimeVenue: string
  section: string
  ticketNumber: string
  qrCode?: ReactNode
  className?: string
}

const placeholderPath =
  'M0 0h7v7H0zM9 0h1v1H9zM11 0h3v1h-3zM16 0h1v2h-1zM18 0h1v1h-1zM22 0h7v7h-7zM1 1h5v5H1zM12 1h1v1h-1zM14 1h1v1h-1zM19 1h2v1h-2zM23 1h5v5h-5zM10 2h1v1h-1zM13 2h1v1h-1zM17 2h1v3h-1zM24 2h3v3h-3zM9 3h1v3h-1zM12 3h1v1h-1zM15 3h1v1h-1zM19 3h1v1h-1zM11 4h1v1h-1zM14 4h1v2h-1zM19 4h2v1h-2zM0 9h1v2h-1zM2 9h2v1h-2zM6 9h1v1h-1zM9 9h4v1h-4zM15 9h2v2h-2zM18 9h1v1h-1zM20 9h1v3h-1zM22 9h1v1h-1zM24 9h1v1h-1zM26 9h2v2h-2zM1 10h1v3h-1zM4 10h2v1h-2zM8 10h1v3h-1zM10 10h1v4h-1zM12 10h1v1h-1zM14 10h1v2h-1zM17 10h1v1h-1zM23 10h1v3h-1zM25 10h1v1h-1zM0 11h1v1h-1zM3 11h1v2h-1zM6 11h2v1h-2zM11 11h1v3h-1zM13 11h1v1h-1zM15 11h1v1h-1zM18 11h2v1h-2zM21 11h2v1h-2zM26 11h2v1h-2zM2 12h1v1h-1zM5 12h1v2h-1zM9 12h1v1h-1zM16 12h1v2h-1zM19 12h1v2h-1zM22 12h1v1h-1zM24 12h1v3h-1zM26 12h1v3h-1zM0 13h1v1h-1zM4 13h1v1h-1zM7 13h1v2h-1zM12 13h1v3h-1zM15 13h1v1h-1zM18 13h1v1h-1zM21 13h1v2h-1zM1 14h2v1h-2zM6 14h1v1h-1zM9 14h1v2h-1zM17 14h1v3h-1zM20 14h1v1h-1zM23 14h1v1h-1z'

/**
 * Copy-and-own Tailwind component. Event ticket card: a main stub with event
 * name, date/time/venue, section, and ticket number, plus a perforated (dashed
 * border + notch cutouts) side stub holding a scannable QR code. Distinct from
 * QR Code Card, which is a generic share/invite card, not a ticket-shaped
 * layout with seat/section metadata.
 */
export function EventTicketCard({ category, eventName, dateTimeVenue, section, ticketNumber, qrCode, className }: EventTicketCardVariant1Props) {
  return (
    <div className={`flex w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      <div className="flex-1 p-5">
        <p className="text-xs font-medium tracking-wide text-indigo-600 uppercase">{category}</p>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">{eventName}</h3>
        <p className="mt-1 text-sm text-gray-500">{dateTimeVenue}</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-medium tracking-wide text-gray-400 uppercase">Section</p>
            <p className="text-sm font-semibold text-gray-900">{section}</p>
          </div>
          <div>
            <p className="text-[10px] font-medium tracking-wide text-gray-400 uppercase">Ticket</p>
            <p className="text-sm font-semibold text-gray-900">{ticketNumber}</p>
          </div>
        </div>
      </div>

      <div className="relative flex w-28 shrink-0 flex-col items-center justify-center gap-2 border-l border-dashed border-gray-300 bg-gray-50 p-4">
        <span className="absolute -top-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-white" aria-hidden="true" />
        <span className="absolute -bottom-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-white" aria-hidden="true" />
        {qrCode ?? (
          <svg
            viewBox="0 0 29 29"
            className="h-16 w-16 text-gray-900"
            fill="currentColor"
            shapeRendering="crispEdges"
            role="img"
            aria-label="QR code for ticket entry"
          >
            <path d={placeholderPath} />
          </svg>
        )}
        <p className="text-[9px] font-medium tracking-wide text-gray-400 uppercase">Scan at entry</p>
      </div>
    </div>
  )
}
