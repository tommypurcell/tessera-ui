const starPath =
  'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L10 18.354l-4.647 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z'

export type ApplicantCardVariant1Props = {
  initials: string
  name: string
  roleApplied: string
  rating: number
  resumeLabel?: string
  resumeHref?: string
  stageLabel: string
}

/**
 * Copy-and-own Tailwind component. Hiring-pipeline applicant card with
 * initials avatar, name, role applied for, a 5-star interviewer rating, a
 * resume link, and a pipeline-stage badge.
 */
export function ApplicantCard({ initials, name, roleApplied, rating, resumeLabel = 'Resume.pdf', resumeHref = '#', stageLabel }: ApplicantCardVariant1Props) {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">{initials}</span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">Applied for {roleApplied}</p>

          <div className="mt-1.5 flex items-center gap-0.5" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, index) => (
              <svg key={index} aria-hidden="true" className={`size-3.5 ${index < rating ? 'text-amber-400' : 'text-gray-200'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <a href={resumeHref} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 hover:underline">
          <svg aria-hidden="true" className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-1.519-2.121L12 16.5m1.481-1.371L15 13.5m-1.519 2.121L12 13.5m6.75 6.75H5.25a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 5.25 3h5.379a1.5 1.5 0 0 1 1.06.44l4.622 4.62a1.5 1.5 0 0 1 .44 1.061v9.629a2.25 2.25 0 0 1-2.25 2.25Z"
            />
          </svg>
          {resumeLabel}
        </a>
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">{stageLabel}</span>
      </div>
    </div>
  )
}
