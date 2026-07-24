import type { HTMLAttributes } from 'react'

export type ProgressBarsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant2({ className, ...props }: ProgressBarsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div
        role="progressbar"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby="UpdatingLabel"
      >
        <div className="flex justify-between gap-4">
          <span id="UpdatingLabel" className="text-sm font-medium text-gray-900">
            Updating
          </span>

          <span className="text-sm font-medium text-gray-900">25%</span>
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
          <div className="h-full rounded-full bg-blue-600" style={{ width: '25%' }}></div>
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby="DownloadingLabel"
      >
        <div className="flex justify-between gap-4">
          <span id="DownloadingLabel" className="text-sm font-medium text-gray-900">
            Downloading
          </span>

          <span className="text-sm font-medium text-gray-900">100%</span>
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
          <div className="h-full rounded-full bg-green-600" style={{ width: '100%' }}></div>
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby="LoadingLabel"
      >
        <div className="flex justify-between gap-4">
          <span id="LoadingLabel" className="text-sm font-medium text-gray-900">
            Loading
          </span>

          <span className="text-sm font-medium text-gray-900">50%</span>
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
          <div className="h-full rounded-full bg-gray-600" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  )
}
