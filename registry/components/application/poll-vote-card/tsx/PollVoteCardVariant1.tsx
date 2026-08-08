import { useState } from 'react'

export type PollOption = {
  id: string
  label: string
  votes: number
}

export type PollVoteCardVariant1Props = {
  question: string
  options: PollOption[]
  onVote?: (optionId: string) => void
}

/**
 * Copy-and-own Tailwind component. Poll card that switches from a
 * click-to-vote list to a percentage-bar results view — percentages and
 * the winning-option highlight are computed from real vote counts, not
 * hand-typed.
 */
export function PollVoteCard({ question, options, onVote }: PollVoteCardVariant1Props) {
  const [votedId, setVotedId] = useState<string | null>(null)

  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0) + (votedId ? 1 : 0)
  const maxVotes = Math.max(...options.map((o) => o.votes + (o.id === votedId ? 1 : 0)), 1)

  function vote(optionId: string) {
    setVotedId(optionId)
    onVote?.(optionId)
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="text-sm font-medium text-gray-900">{question}</h2>

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
                className="rounded-md border border-gray-300 px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
              >
                {option.label}
              </button>
            )
          }

          return (
            <div key={option.id} className="relative overflow-hidden rounded-md border border-gray-200">
              <div
                className={`absolute inset-y-0 left-0 ${isWinner ? 'bg-blue-100' : 'bg-gray-100'}`}
                style={{ width: `${pct}%` }}
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between px-3 py-2 text-sm">
                <span className={isWinner ? 'font-medium text-gray-900' : 'text-gray-700'}>{option.label}</span>
                <span className={isWinner ? 'font-semibold text-gray-900' : 'text-gray-500'}>{pct}%</span>
              </div>
            </div>
          )
        })}
      </div>

      {votedId ? <p className="text-xs text-gray-500">{totalVotes.toLocaleString()} votes</p> : null}
    </div>
  )
}
