import { env } from '@/env'

interface ApiProps {
  path: string
  init?: RequestInit
}

export function api({ path, init }: ApiProps) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL

  const url = new URL(path, baseUrl)

  return fetch(url, init)
}
