import { useState } from 'react'

export type PollOption = {
  id: string
  label: string
  votes: number
}

export type PollVoteCardVariant1DarkProps = {
  question: string
  options: PollOption[]
  onVote?: (optionId: string) => void
}

/**
 * Copy-and-own Tailwind component. Poll card adapted for dark surfaces —
 * switches from a click-to-vote list to a percentage-bar results view,
 * with percentages and the winning-option highlight computed from real
 * vote counts.
 */
export function PollVoteCardDark({ question, options, onVote }: PollVoteCardVariant1DarkProps) {
  const [votedId, setVotedId] = useState<string | null>(null)

  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0) + (votedId ? 1 : 0)
  const maxVotes = Math.max(...options.map((o) => o.votes + (o.id === votedId ? 1 : 0)), 1)

  function vote(optionId: string) {
    setVotedId(optionId)
    onVote?.(optionId)
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <h2 className="text-sm font-medium text-gray-100">{question}</h2>

      <div role={votedId ? undefined : 'radiogroup'} aria-label={votedId ? undefined : question} className="flex flex-col gap-2">
        {options.map((option) => {
          const effectiveVotes = option.votes + (option.id === votedId ? 1 : 0)
          const pct = totalVotes === 0 ? 0 : Math.round((effectiveVotes / totalVotes) * 100)
          const isWinner = votedId !== null && effectiveVotes === maxVotes

          if (!votedId) {
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked="false"
                onClick={() => vote(option.id)}
                className="rounded-md border border-gray-700 px-3 py-2 text-left text-sm text-gray-300 transition-colors hover:border-blue-500 hover:bg-blue-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900"
              >
                {option.label}
              </button>
            )
          }

          return (
            <div key={option.id} className="relative overflow-hidden rounded-md border border-gray-800">
              <div
                className={`absolute inset-y-0 left-0 ${isWinner ? 'bg-blue-500/20' : 'bg-gray-800'}`}
                style={{ width: `${pct}%` }}
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between px-3 py-2 text-sm">
                <span className={isWinner ? 'font-medium text-gray-100' : 'text-gray-300'}>{option.label}</span>
                <span className={isWinner ? 'font-semibold text-gray-100' : 'text-gray-400'}>{pct}%</span>
              </div>
            </div>
          )
        })}
      </div>

      {votedId ? <p className="text-xs text-gray-500">{totalVotes.toLocaleString()} votes</p> : null}
    </div>
  )
}
