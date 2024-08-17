'use client'

import { createContext, ReactNode, useState } from 'react'

interface CartItem {
  idProduct: string
  quantity: number
}

interface CartContextDataType {
  items: CartItem[]
  addItemToCart: (idProduct: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextDataType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItemToCart(idProduct: string) {
    setCartItems((prevCartItems) => {
      const itemAlreadyInCart = prevCartItems.some(
        (item) => item.idProduct === idProduct,
      )

      if (itemAlreadyInCart) {
        return prevCartItems.map((item) =>
          item.idProduct === idProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...prevCartItems, { idProduct, quantity: 1 }]
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
