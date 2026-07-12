import { createContext, useContext, useState, useMemo } from 'react'
import { products } from '../data/products.js'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState({}) // { [productId]: qty }
  const [isCartOpen, setCartOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [orderNo, setOrderNo] = useState('')

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({
          product: products.find((p) => p.id === Number(id)),
          qty,
        })),
    [cart]
  )

  const cartCount = cartItems.reduce((sum, { qty }) => sum + qty, 0)
  const subtotal = cartItems.reduce((sum, { product, qty }) => sum + product.price * qty, 0)

  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
    setCartOpen(true)
  }

  function incrementItem(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  function decrementItem(id) {
    setCart((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }))
  }

  function removeItem(id) {
    setCart((prev) => ({ ...prev, [id]: 0 }))
  }

  function handleCheckout() {
    const num = Math.floor(1000 + Math.random() * 9000)
    setOrderNo(`ORDER #KC-${num}`)
    setModalOpen(true)
  }

  function closeModalAndReset() {
    setModalOpen(false)
    setCartOpen(false)
    setCart({})
  }

  const value = {
    cart,
    cartItems,
    cartCount,
    subtotal,
    isCartOpen,
    isModalOpen,
    orderNo,
    setCartOpen,
    addToCart,
    incrementItem,
    decrementItem,
    removeItem,
    handleCheckout,
    closeModalAndReset,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
