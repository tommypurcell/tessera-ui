export type NftCardVariant1DarkProps = {
  imageUrl: string
  imageAlt: string
  tokenId: string
  collectionName: string
  collectionAvatarUrl: string
  collectionVerified?: boolean
  title: string
  priceEth: number
  priceUsd: number
  onBid?: () => void
  className?: string
}

const formatUsd = (n: number) => `$${n.toLocaleString()}`

/**
 * Copy-and-own Tailwind component (dark surface). NFT marketplace card:
 * artwork, collection identity with verified badge, title, current bid in
 * ETH with a USD equivalent, and a bid action.
 */
export function NftCard({
  imageUrl,
  imageAlt,
  tokenId,
  collectionName,
  collectionAvatarUrl,
  collectionVerified = true,
  title,
  priceEth,
  priceUsd,
  onBid,
  className,
}: NftCardVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-sm ${className ?? ''}`}>
      <div className="relative">
        <img src={imageUrl} alt={imageAlt} className="aspect-square w-full object-cover" />
        <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
          #{tokenId}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1.5">
          <img src={collectionAvatarUrl} alt="" className="size-4 rounded-full" />
          <span className="text-xs text-gray-400">{collectionName}</span>
          {collectionVerified ? (
            <svg aria-label="Verified collection" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5 text-sky-400">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          ) : null}
        </div>

        <h3 className="mt-1 text-sm font-medium text-gray-100">{title}</h3>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-gray-500">Current bid</p>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-gray-100">{priceEth} ETH</span>
              <span className="text-xs text-gray-500">{formatUsd(priceUsd)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onBid}
            className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-white"
          >
            Place bid
          </button>
        </div>
      </div>
    </div>
  )
}
