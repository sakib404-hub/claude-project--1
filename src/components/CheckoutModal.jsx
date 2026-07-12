import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

export default function CheckoutModal() {
  const { isModalOpen, orderNo, closeModalAndReset } = useCart()

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-ink/50 z-[80] flex items-center justify-center p-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream max-w-[420px] w-full p-9 rounded text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 14 }}
              className="w-[58px] h-[58px] rounded-full border-[1.5px] border-sage-deep flex items-center justify-center mx-auto mb-5 text-sage-deep text-[26px]"
            >
              ✓
            </motion.div>
            <h3 className="font-display text-[22px] mb-2.5">Order fired &amp; sent</h3>
            <p className="text-sm text-ink-soft mb-6">
              Thanks for supporting the studio. A confirmation would normally land in your
              inbox shortly.
            </p>
            <div className="font-mono text-[13px] bg-card px-3.5 py-2.5 rounded inline-block mb-6">
              {orderNo}
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={closeModalAndReset}
              className="w-full py-3.5 bg-ink text-cream rounded text-sm hover:bg-sage-deep transition-colors"
            >
              Back to shop
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
