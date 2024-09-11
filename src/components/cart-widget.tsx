'use client'
import { ShoppingCart } from 'lucide-react'

import { useCart } from '@/hooks/use-cart'

export function CartWidget() {
  const { items } = useCart()
  return (
    <div className="flex items-center gap-2">
      <ShoppingCart className="h-6 w-6 text-black" />
      <span className="text-sm font-semibold">Cart ({items.length})</span>
    </div>
  )
}
