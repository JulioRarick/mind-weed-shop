import { ReactNode } from 'react'

import { Header } from '@/components/header'

interface LayoutStoreProps {
  children: ReactNode
}

export default function LayoutStore({ children }: LayoutStoreProps) {
  return (
    <main className="grid-rows-page mx-auto grid min-h-screen w-full max-w-screen-2xl gap-5 p-8">
      <Header />
      {children}
    </main>
  )
}
