import { useState } from 'react'

export type QuoteEstimatePanelVariant1DarkProps = {
  initialCoverage?: number
  initialDeductible?: number
  initialTermMonths?: number
  onGetQuote?: (input: { coverage: number; deductible: number; termMonths: number; premium: number }) => void
  className?: string
}

function formatCurrency(value: number) {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function formatSigned(value: number) {
  const sign = value <= 0 ? '−' : '+'
  return `${sign}${formatCurrency(Math.abs(value))}`
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the quote estimate panel.
 */
export function QuoteEstimatePanelVariant1Dark({
  initialCoverage = 150000,
  initialDeductible = 1000,
  initialTermMonths = 12,
  onGetQuote,
  className,
}: QuoteEstimatePanelVariant1DarkProps) {
  const [coverage, setCoverage] = useState(initialCoverage)
  const [deductible, setDeductible] = useState(initialDeductible)
  const [termMonths, setTermMonths] = useState(initialTermMonths)

  const base = (coverage / 1000) * 0.18
  const deductibleAdj = -((deductible - 1000) / 1000) * 3
  const termAdj = ((termMonths - 12) / 6) * 4.5
  const premium = Math.max(base + deductibleAdj + termAdj, 10)

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-5 shadow-sm ${className ?? ''}`}>
      <h3 className="text-sm font-semibold text-white">Get your estimate</h3>

      <div className="mt-5 flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="qep1d-coverage" className="text-xs font-medium text-gray-400">
              Coverage amount
            </label>
            <span className="text-sm font-semibold text-white">{formatCurrency(coverage)}</span>
          </div>
          <input
            type="range"
            id="qep1d-coverage"
            min={50000}
            max={500000}
            step={10000}
            value={coverage}
            onChange={(event) => setCoverage(Number(event.target.value))}
            className="mt-2 h-1.5 w-full appearance-none rounded-full bg-gray-800 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="qep1d-deductible" className="text-xs font-medium text-gray-400">
              Deductible
            </label>
            <span className="text-sm font-semibold text-white">{formatCurrency(deductible)}</span>
          </div>
          <input
            type="range"
            id="qep1d-deductible"
            min={250}
            max={5000}
            step={250}
            value={deductible}
            onChange={(event) => setDeductible(Number(event.target.value))}
            className="mt-2 h-1.5 w-full appearance-none rounded-full bg-gray-800 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="qep1d-term" className="text-xs font-medium text-gray-400">
              Policy term
            </label>
            <span className="text-sm font-semibold text-white">{termMonths} months</span>
          </div>
          <input
            type="range"
            id="qep1d-term"
            min={6}
            max={24}
            step={6}
            value={termMonths}
            onChange={(event) => setTermMonths(Number(event.target.value))}
            className="mt-2 h-1.5 w-full appearance-none rounded-full bg-gray-800 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-blue-500/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-blue-400">Estimated monthly premium</p>
          <p className="text-xl font-bold text-blue-300">{formatCurrency(premium)}</p>
        </div>
        <dl className="mt-2 flex flex-col gap-1 border-t border-blue-500/20 pt-2 text-xs text-blue-400/80">
          <div className="flex items-center justify-between">
            <dt>Base rate</dt>
            <dd>{formatCurrency(base)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Deductible adjustment</dt>
            <dd>{formatSigned(deductibleAdj)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Term adjustment</dt>
            <dd>{formatSigned(termAdj)}</dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        onClick={() => onGetQuote?.({ coverage, deductible, termMonths, premium })}
        className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
      >
        Get full quote
      </button>
    </div>
  )
}
