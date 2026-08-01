import type { HTMLAttributes } from 'react'

export type ProgressBarsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant3({ className, ...props }: ProgressBarsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="DownloadLabel"
          >
            <p id="DownloadLabel" className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              Download
            </p>
      
            <div className="mt-2 h-1 w-full bg-gray-200">
              <div className="h-full bg-blue-600" style={{width: '25%'}}></div>
            </div>
      
            <p className="mt-2 text-xs text-gray-700">1.2 of 3.8 MB</p>
          </div>
      
          <div
            role="progressbar"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="FileConversionLabel"
          >
            <p id="FileConversionLabel" className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              File Conversion
            </p>
      
            <div className="mt-2 h-1 w-full bg-gray-200">
              <div className="h-full bg-blue-600" style={{width: '75%'}}></div>
            </div>
      
            <p className="mt-2 text-xs text-gray-700">3/4 files done</p>
          </div>
      
          <div
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="FileSyncLabel"
          >
            <p id="FileSyncLabel" className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              File Sync
            </p>
      
            <div className="mt-2 h-1 w-full bg-gray-200">
              <div className="h-full bg-green-600" style={{width: '100%'}}></div>
            </div>
      
            <p className="mt-2 text-xs text-gray-700">Completed</p>
          </div>
    </div>
  )
}
