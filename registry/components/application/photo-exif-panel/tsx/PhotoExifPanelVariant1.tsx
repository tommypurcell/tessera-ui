export type PhotoExifPanelVariant1Props = {
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
 * Copy-and-own Tailwind component. Photography EXIF metadata panel: a
 * luminance histogram (SVG polygon) above camera/lens/exposure metadata
 * rows. Distinct from a generic Media component, which displays the image
 * itself, rather than its embedded capture metadata and tonal distribution.
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
}: PhotoExifPanelVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <p className="text-sm font-semibold text-gray-900">Image details</p>

      <svg viewBox="0 0 200 48" preserveAspectRatio="none" role="img" aria-label={histogramLabel} className="mt-3 h-12 w-full">
        <polygon points={histogramPoints} className="fill-gray-200" />
      </svg>

      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <dt className="text-gray-400">Camera</dt>
          <dd className="font-medium text-gray-900">{camera}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <dt className="text-gray-400">Lens</dt>
          <dd className="font-medium text-gray-900">{lens}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <dt className="text-gray-400">Focal length</dt>
          <dd className="font-medium text-gray-900">{focalLength}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <dt className="text-gray-400">Aperture</dt>
          <dd className="font-medium text-gray-900">{aperture}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <dt className="text-gray-400">Shutter speed</dt>
          <dd className="font-medium text-gray-900">{shutterSpeed}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <dt className="text-gray-400">ISO</dt>
          <dd className="font-medium text-gray-900">{iso}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-400">Dimensions</dt>
          <dd className="font-medium text-gray-900">{dimensions}</dd>
        </div>
      </dl>
    </div>
  )
}
