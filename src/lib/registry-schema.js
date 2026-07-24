import { z } from 'zod'

const componentVariantSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(20),
  source: z.object({
    html: z.string().min(1),
    tsx: z.string().min(1),
  }),
  appearance: z.enum(['light', 'dark']),
  states: z.array(z.string()).min(1),
  accessibility: z.array(z.string()).min(1),
})

export const componentRegistrySchema = z.object({
  schemaVersion: z.literal(1),
  name: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(20),
  category: z.string().min(1),
  frameworks: z.array(z.enum(['html', 'react'])).min(1),
  styling: z.literal('tailwind'),
  tags: z.array(z.string()).min(3),
  useWhen: z.array(z.string()).min(1),
  avoidWhen: z.array(z.string()).min(1),
  dependencies: z.array(z.string()),
  responsiveBehavior: z.string().min(20),
  accessibility: z.array(z.string()).min(2),
  compatibleWith: z.array(z.string()),
  source: z.object({
    repositories: z.array(z.object({ name: z.string(), url: z.string().url(), commit: z.string().min(7) })).min(1),
    license: z.string().min(1),
    notice: z.string().min(1),
    modifications: z.string().min(1),
  }).optional(),
  variants: z.array(componentVariantSchema).min(1),
})
