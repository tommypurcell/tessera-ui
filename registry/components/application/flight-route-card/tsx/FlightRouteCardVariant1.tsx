export type FlightRouteCardVariant1Props = {
  airlineCode: string
  airlineName: string
  flightNumber: string
  stopsLabel: string
  originCode: string
  originTime: string
  originCityLabel: string
  destinationCode: string
  destinationTime: string
  destinationCityLabel: string
  duration: string
  price: string
}

/**
 * Copy-and-own Tailwind component. Flight search result card showing airline,
 * flight number, stop count, origin/destination codes and times with a duration
 * line between them, the route in full city names, and the fare.
 */
export function FlightRouteCard({
  airlineCode,
  airlineName,
  flightNumber,
  stopsLabel,
  originCode,
  originTime,
  originCityLabel,
  destinationCode,
  destinationTime,
  destinationCityLabel,
  duration,
  price,
}: FlightRouteCardVariant1Props) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white">{airlineCode}</span>
          <span className="text-xs text-gray-500">
            {airlineName} &middot; {flightNumber}
          </span>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">{stopsLabel}</span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900">{originCode}</p>
          <p className="text-xs text-gray-500">{originTime}</p>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <p className="text-xs text-gray-400">{duration}</p>
          <div className="relative mt-1 h-px w-full bg-gray-300">
            <svg aria-hidden="true" className="absolute -top-1.5 right-0 size-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" transform="rotate(90 12 12)" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900">{destinationCode}</p>
          <p className="text-xs text-gray-500">{destinationTime}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-500">
          {originCityLabel} &rarr; {destinationCityLabel}
        </p>
        <p className="text-sm font-semibold text-gray-900">{price}</p>
      </div>
    </div>
  )
}
