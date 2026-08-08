export type BuildStageStatus = 'queued' | 'running' | 'passed' | 'failed'

export type BuildStage = {
  label: string
  status: BuildStageStatus
}

export type BuildStatusRowVariant1DarkProps = {
  pipelineName: string
  stages: BuildStage[]
  duration: string
}

const stageStyles: Record<BuildStageStatus, { className: string; path: string; spin?: boolean }> = {
  queued: { className: 'bg-gray-800 text-gray-400', path: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  running: {
    className: 'bg-blue-500/10 text-blue-300',
    path: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
    spin: true,
  },
  passed: { className: 'bg-green-500/10 text-green-300', path: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  failed: { className: 'bg-red-500/10 text-red-300', path: 'M6 18L18 6M6 6l12 12' },
}

/**
 * Copy-and-own Tailwind component. CI/CD pipeline row adapted for dark
 * surfaces — each stage pill's icon and color are derived from its real
 * `status`.
 */
export function BuildStatusRowDark({ pipelineName, stages, duration }: BuildStatusRowVariant1DarkProps) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-gray-800 bg-gray-900 px-4 py-3 text-sm">
      <span className="shrink-0 font-medium text-gray-100">{pipelineName}</span>

      <div className="flex flex-1 items-center gap-1.5">
        {stages.map((stage, index) => {
          const style = stageStyles[stage.status]
          return (
            <div key={stage.label} className="flex items-center gap-1.5">
              <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${style.className}`}>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className={`size-3 ${style.spin ? 'animate-spin' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={style.path} />
                </svg>
                {stage.label}
              </span>
              {index < stages.length - 1 ? (
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3 shrink-0 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              ) : null}
            </div>
          )
        })}
      </div>

      <span className="shrink-0 text-xs text-gray-500">{duration}</span>
    </div>
  )
}
