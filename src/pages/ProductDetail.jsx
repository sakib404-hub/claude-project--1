import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import CeramicArt from '../components/CeramicArt.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const { cart, addToCart } = useCart()
  const product = products.find((p) => p.id === Number(id))

  if (!product) return <Navigate to="/shop" replace />

  const qty = cart[product.id] || 0
  const index = products.findIndex((p) => p.id === product.id)

  return (
    <div className="max-w-[1180px] mx-auto px-8 sm:px-4 py-16">
      <Link to="/shop" className="text-sm text-ink-soft hover:text-ink inline-block mb-10">
        ← Back to catalog
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-square bg-card border border-line rounded flex items-center justify-center"
        >
          <CeramicArt shape={product.shape} className="w-[62%] h-[62%]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] text-sage-deep mb-3 block">
            No. {String(index + 1).padStart(2, '0')}
          </span>
          <h1 className="font-display text-[38px] leading-tight mb-2">{product.name}</h1>
          <p className="text-ink-soft text-sm mb-6">{product.meta}</p>
          <p className="text-[15px] text-ink-soft max-w-[420px] mb-8">
            Thrown from Vermont stoneware and finished in our in-house glaze. Fired to cone
            10 in a wood kiln, so tone and texture vary gently from piece to piece — the
            piece you receive is the one shown here, not a stock photo.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-2xl">${product.price}</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product.id)}
              className={`text-sm tracking-wide border px-6 py-3 rounded transition-colors ${
                qty > 0
                  ? 'bg-sage-deep text-cream border-sage-deep'
                  : 'border-ink hover:bg-ink hover:text-cream'
              }`}
            >
              {qty > 0 ? `Added to cart (${qty})` : 'Add to cart'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
