export type FlightRouteCardVariant1DarkProps = {
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
export function FlightRouteCardDark({
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
}: FlightRouteCardVariant1DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded bg-gray-100 text-[10px] font-bold text-gray-900">{airlineCode}</span>
          <span className="text-xs text-gray-400">
            {airlineName} &middot; {flightNumber}
          </span>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-300">{stopsLabel}</span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="text-center">
          <p className="text-lg font-semibold text-white">{originCode}</p>
          <p className="text-xs text-gray-400">{originTime}</p>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <p className="text-xs text-gray-500">{duration}</p>
          <div className="relative mt-1 h-px w-full bg-gray-700">
            <svg aria-hidden="true" className="absolute -top-1.5 right-0 size-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" transform="rotate(90 12 12)" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-white">{destinationCode}</p>
          <p className="text-xs text-gray-400">{destinationTime}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-800 pt-3">
        <p className="text-xs text-gray-400">
          {originCityLabel} &rarr; {destinationCityLabel}
        </p>
        <p className="text-sm font-semibold text-white">{price}</p>
      </div>
    </div>
  )
}
