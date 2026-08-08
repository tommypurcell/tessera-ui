export type NutrientRow = {
  label: string
  amount: string
  dailyValueAmount: number
  dailyValueTotal: number
  indent?: boolean
}

export type NutritionFactsPanelVariant1Props = {
  servingSize: string
  calories: number
  nutrients: NutrientRow[]
}

/**
 * Copy-and-own Tailwind component. FDA-style nutrition facts panel — the
 * %DV column is computed live as dailyValueAmount / dailyValueTotal for
 * each nutrient rather than hand-typed, so it can never drift from the
 * amounts shown. Distinct from a generic table, which has no %DV
 * derivation or nutrition-label formatting conventions.
 */
export function NutritionFactsPanel({ servingSize, calories, nutrients }: NutritionFactsPanelVariant1Props) {
  return (
    <div className="w-full max-w-xs border-2 border-gray-900 bg-white p-3 font-sans text-gray-900">
      <h2 className="border-b-8 border-gray-900 pb-1 text-2xl font-black">Nutrition Facts</h2>
      <p className="border-b border-gray-900 py-1 text-sm">Serving size {servingSize}</p>

      <div className="flex items-baseline justify-between border-b-4 border-gray-900 py-1">
        <span className="text-lg font-bold">Calories</span>
        <span className="text-2xl font-black">{calories}</span>
      </div>

      <div className="border-b border-gray-400 py-0.5 text-right text-xs font-bold">% Daily Value*</div>

      <ul>
        {nutrients.map((n) => {
          const pct = Math.round((n.dailyValueAmount / n.dailyValueTotal) * 100)
          return (
            <li key={n.label} className="flex items-baseline justify-between border-b border-gray-300 py-1 text-sm">
              <span className={n.indent ? 'pl-4' : 'font-bold'}>
                {n.label} <span className="font-normal">{n.amount}</span>
              </span>
              <span className="font-bold">{pct}%</span>
            </li>
          )
        })}
      </ul>

      <p className="pt-2 text-[10px] leading-tight text-gray-600">
        * The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet.
      </p>
    </div>
  )
}
