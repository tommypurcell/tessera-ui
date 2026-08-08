export type GuestCheckInCardVariant1DarkProps = {
  guestName: string
  avatarUrl: string
  reservationId: string
  status: string
  room: string
  checkIn: string
  checkOut: string
  onCheckIn?: () => void
  onCheckOut?: () => void
}

/**
 * Copy-and-own Tailwind component. Hotel guest check-in card with the
 * guest's avatar, reservation id, room/check-in/check-out stats, and
 * Check in / Check out actions.
 */
export function GuestCheckInCardDark({ guestName, avatarUrl, reservationId, status, room, checkIn, checkOut, onCheckIn, onCheckOut }: GuestCheckInCardVariant1DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={avatarUrl} alt="" className="size-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold text-white">{guestName}</p>
            <p className="text-xs text-gray-400">Reservation #{reservationId}</p>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-400">{status}</span>
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-gray-800 pt-4 text-sm">
        <div>
          <dt className="text-xs text-gray-400">Room</dt>
          <dd className="mt-0.5 font-semibold text-white">{room}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-400">Check-in</dt>
          <dd className="mt-0.5 font-semibold text-white">{checkIn}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-400">Check-out</dt>
          <dd className="mt-0.5 font-semibold text-white">{checkOut}</dd>
        </div>
      </dl>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" onClick={onCheckIn} className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
          Check in
        </button>
        <button type="button" onClick={onCheckOut} className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800">
          Check out
        </button>
      </div>
    </div>
  )
}
