'use client'

import { ShoppingCart } from 'lucide-react'

import { useCart } from '@/hooks/use-cart'

interface ButtonAddToCartProps {
  idProduct: number
}

export function ButtonAddToCart({ idProduct }: ButtonAddToCartProps) {
  const { addItemToCart } = useCart()

  function handleAddToCart() {
    addItemToCart(idProduct)
  }
  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-lg bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
    >
      <ShoppingCart className="h-6 w-6" />
      <span>Add to cart</span>
    </button>
  )
}
