import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'

interface LayoutStoreProps {
  children: ReactNode
}

export default function LayoutStore({ children }: LayoutStoreProps) {
  return (
    <CartProvider>
      <main className="mx-auto grid min-h-screen w-full max-w-screen-2xl grid-rows-page gap-5 p-8">
        <Header />
        {children}
      </main>
    </CartProvider>
  )
}
