import fs from 'node:fs'
import path from 'node:path'

export const dynamic = 'force-static'

export function GET() {
  const skill = fs.readFileSync(
    path.join(process.cwd(), 'skills', 'tessera-ui', 'SKILL.md'),
    'utf8',
  )

  return new Response(skill, {
    headers: {
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}
