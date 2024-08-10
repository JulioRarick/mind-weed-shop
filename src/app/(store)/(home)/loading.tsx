import { Skeleton } from '@/components/skeleton'

export default function LoadingHome() {
  return (
    <main className="grid-rows-6 grid h-full grid-cols-9 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[730px]" />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </main>
  )
}
