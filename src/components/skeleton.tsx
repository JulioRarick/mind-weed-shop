import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={twMerge('animate-pulse rounded-xl bg-stone-500/60', className)}
    />
  )
}
