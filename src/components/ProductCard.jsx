import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CeramicArt from './CeramicArt.jsx'

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProductCard({ product, index, qtyInCart, onAdd }) {
  const added = qtyInCart > 0

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ backgroundColor: '#F6F2E9' }}
      className="bg-putty p-6 pb-6 flex flex-col"
    >
      <span className="font-mono text-[11px] text-sage-deep mb-3.5">
        No. {String(index + 1).padStart(2, '0')}
      </span>

      <Link to={`/shop/${product.id}`} className="block">
        <motion.div
          whileHover={{ scale: 1.06, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="aspect-square flex items-center justify-center mb-4"
        >
          <CeramicArt shape={product.shape} className="w-[64%] h-[64%]" />
        </motion.div>

        <h3 className="text-lg font-medium font-display hover:text-sage-deep transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-[13px] text-ink-soft mb-4">{product.meta}</p>

      <div className="flex items-center justify-between mt-auto">
        <span className="font-mono text-[15px]">${product.price}</span>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => onAdd(product.id)}
          className={`text-xs tracking-wide border px-3.5 py-2 rounded transition-colors ${
            added
              ? 'bg-sage-deep text-cream border-sage-deep'
              : 'border-ink hover:bg-ink hover:text-cream'
          }`}
        >
          {added ? `Added (${qtyInCart})` : 'Add to cart'}
        </motion.button>
      </div>
    </motion.div>
  )
}
