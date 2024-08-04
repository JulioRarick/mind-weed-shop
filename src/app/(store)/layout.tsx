import { ReactNode } from 'react'

import { Header } from '@/components/header'

interface LayoutStoreProps {
  children: ReactNode
}

export default function LayoutStore({ children }: LayoutStoreProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}
