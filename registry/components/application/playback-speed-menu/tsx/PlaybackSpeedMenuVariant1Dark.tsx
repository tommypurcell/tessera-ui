import { useState } from 'react'

export type PlaybackSpeedOption = { value: number; label: string }
export type QualityOption = string

const SPEED_OPTIONS: PlaybackSpeedOption[] = [
  { value: 0.5, label: '0.5x' },
  { value: 1, label: 'Normal' },
  { value: 1.5, label: '1.5x' },
  { value: 2, label: '2x' },
]

const QUALITY_OPTIONS: QualityOption[] = ['Auto (1080p)', '1080p', '720p', '480p']

function CheckIcon({ visible }: { visible: boolean }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      className={`size-3.5 text-blue-400 ${visible ? '' : 'invisible'}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

export type PlaybackSpeedMenuVariant1DarkProps = {
  initialSpeed?: number
  initialQuality?: QualityOption
  onSpeedChange?: (speed: number) => void
  onQualityChange?: (quality: QualityOption) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the playback speed menu.
 */
export function PlaybackSpeedMenuVariant1Dark({
  initialSpeed = 1,
  initialQuality = 'Auto (1080p)',
  onSpeedChange,
  onQualityChange,
  className,
}: PlaybackSpeedMenuVariant1DarkProps) {
  const [speed, setSpeed] = useState(initialSpeed)
  const [quality, setQuality] = useState<QualityOption>(initialQuality)
  const [panel, setPanel] = useState<'main' | 'quality'>('main')

  function selectSpeed(value: number) {
    setSpeed(value)
    onSpeedChange?.(value)
  }

  function selectQuality(value: QualityOption) {
    setQuality(value)
    onQualityChange?.(value)
    setPanel('main')
  }

  return (
    <div className={`relative inline-block ${className ?? ''}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded="true"
        className="inline-flex items-center gap-1.5 rounded-md border border-gray-700 bg-gray-950 px-3 py-1.5 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-900"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.379.137.752.43.992l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a7.688 7.688 0 0 1 0-.255c.007-.379-.138-.752-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        Settings
      </button>

      {panel === 'main' ? (
        <div role="menu" aria-label="Playback settings" className="absolute top-10 left-0 z-10 w-52 overflow-hidden rounded-lg border border-gray-800 bg-gray-950 py-1 shadow-lg">
          <p className="px-3 pt-1.5 pb-1 text-xs font-semibold text-gray-500">Playback speed</p>

          {SPEED_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={speed === option.value}
              onClick={() => selectSpeed(option.value)}
              className="flex w-full items-center justify-between px-3 py-1.5 text-sm text-gray-200 hover:bg-gray-900"
            >
              {option.label}
              <CheckIcon visible={speed === option.value} />
            </button>
          ))}

          <div className="my-1 border-t border-gray-800" />

          <button
            type="button"
            onClick={() => setPanel('quality')}
            className="flex w-full items-center justify-between px-3 py-1.5 text-sm text-gray-200 hover:bg-gray-900"
          >
            Quality
            <span className="flex items-center gap-1 text-gray-500">
              {quality}
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </div>
      ) : (
        <div role="menu" aria-label="Quality options" className="absolute top-10 left-0 z-10 w-52 overflow-hidden rounded-lg border border-gray-800 bg-gray-950 py-1 shadow-lg">
          <button
            type="button"
            onClick={() => setPanel('main')}
            className="flex w-full items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-900"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Quality
          </button>
          <div className="my-1 border-t border-gray-800" />

          {QUALITY_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              role="menuitemradio"
              aria-checked={quality === option}
              onClick={() => selectQuality(option)}
              className="flex w-full items-center justify-between px-3 py-1.5 text-sm text-gray-200 hover:bg-gray-900"
            >
              {option}
              <CheckIcon visible={quality === option} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
