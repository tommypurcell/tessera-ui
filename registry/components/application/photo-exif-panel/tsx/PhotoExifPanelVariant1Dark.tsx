export type PhotoExifPanelVariant1DarkProps = {
  histogramPoints: string
  histogramLabel: string
  camera: string
  lens: string
  focalLength: string
  aperture: string
  shutterSpeed: string
  iso: string
  dimensions: string
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Photography EXIF
 * metadata panel: a luminance histogram (SVG polygon) above camera/lens/
 * exposure metadata rows.
 */
export function PhotoExifPanel({
  histogramPoints,
  histogramLabel,
  camera,
  lens,
  focalLength,
  aperture,
  shutterSpeed,
  iso,
  dimensions,
  className,
}: PhotoExifPanelVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <p className="text-sm font-semibold text-gray-100">Image details</p>

      <svg viewBox="0 0 200 48" preserveAspectRatio="none" role="img" aria-label={histogramLabel} className="mt-3 h-12 w-full">
        <polygon points={histogramPoints} className="fill-gray-700" />
      </svg>

      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <dt className="text-gray-500">Camera</dt>
          <dd className="font-medium text-gray-100">{camera}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <dt className="text-gray-500">Lens</dt>
          <dd className="font-medium text-gray-100">{lens}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <dt className="text-gray-500">Focal length</dt>
          <dd className="font-medium text-gray-100">{focalLength}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <dt className="text-gray-500">Aperture</dt>
          <dd className="font-medium text-gray-100">{aperture}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <dt className="text-gray-500">Shutter speed</dt>
          <dd className="font-medium text-gray-100">{shutterSpeed}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <dt className="text-gray-500">ISO</dt>
          <dd className="font-medium text-gray-100">{iso}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-500">Dimensions</dt>
          <dd className="font-medium text-gray-100">{dimensions}</dd>
        </div>
      </dl>
    </div>
  )
}
