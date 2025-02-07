'use client'
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface CartItem {
  _id: string
  name: string
  price: number
  imageUrl: string
  discountPercentage?: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item._id === product._id)
      if (existingItem) {
        return currentItems.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item._id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return
    setItems((currentItems) => currentItems.map((item) => (item._id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cart")
  }

  const totalPrice = items.reduce((sum, item) => {
    const price = typeof item.price === "number" && !isNaN(item.price) ? item.price : 0
    const discountedPrice = price * (1 - (item.discountPercentage || 0) / 100)
    return sum + discountedPrice * item.quantity
  }, 0)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

