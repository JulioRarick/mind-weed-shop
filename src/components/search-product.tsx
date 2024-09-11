'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchProduct() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const searchQuery = searchParams.get('q')
  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const searchQuery = data.q

    if (!searchQuery) {
      return null
    }

    router.push(`/search?q=${searchQuery}`)
  }

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex w-80 items-center gap-3 rounded-md bg-stone-200 px-5 py-3 ring-stone-400"
    >
      <Search className="h-5 w-5 text-stone-500" />
      <input
        name="q"
        defaultValue={searchQuery ?? ''}
        type="text"
        placeholder="Search products..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-stone-500"
      />
    </form>
  )
}
