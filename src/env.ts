import { z } from 'zod'

const envValidationSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parsedEnv = envValidationSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables.',
    parsedEnv.error.flatten().fieldErrors,
  )
  throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data
