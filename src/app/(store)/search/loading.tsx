'use client'

import { useSearchParams } from 'next/navigation'

import { Skeleton } from '@/components/skeleton'

export default function LoadingSearch() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Results for: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
      </div>
    </div>
  )
}
