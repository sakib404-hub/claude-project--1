import { motion, AnimatePresence } from 'framer-motion'
import CartLine from './CartLine.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function CartDrawer() {
  const {
    isCartOpen,
    setCartOpen,
    cartItems,
    subtotal,
    incrementItem,
    decrementItem,
    removeItem,
    handleCheckout,
  } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-ink/40 z-[60]"
          />

          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-[420px] max-w-[92vw] bg-cream z-[70] flex flex-col shadow-2xl"
          >
            <div className="px-[26px] py-6 border-b border-line flex items-center justify-between">
              <h3 className="font-display text-xl">Your cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-[22px] leading-none">
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-[26px]">
              {cartItems.length === 0 ? (
                <div className="py-16 text-center text-ink-soft text-sm">
                  Your cart is empty.
                  <br />
                  Browse the catalog to begin.
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {cartItems.map(({ product, qty }) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <CartLine
                        product={product}
                        qty={qty}
                        onIncrement={incrementItem}
                        onDecrement={decrementItem}
                        onRemove={removeItem}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            <div className="px-[26px] pt-5 pb-7 border-t border-line">
              <div className="flex justify-between text-sm mb-1.5">
                <span>Subtotal</span>
                <span className="font-mono">${subtotal}</span>
              </div>
              <div className="flex justify-between text-[13px] text-ink-soft mb-1.5">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-mono text-base mt-2.5 mb-5">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full bg-ink text-cream py-3.5 text-sm rounded tracking-wide hover:bg-sage-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Checkout
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
