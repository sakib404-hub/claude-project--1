import { motion } from 'framer-motion'
import ProductCard from './ProductCard.jsx'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

export default function ProductGrid({ products, cart, onAdd, title = 'The catalog' }) {
  return (
    <section className="py-20">
      <div className="max-w-[1180px] mx-auto px-8 sm:px-4">
        <div className="flex items-end justify-between mb-11 border-b border-line pb-5">
          <h2 className="font-display text-[32px]">{title}</h2>
          <span className="font-mono text-xs text-ink-soft">{products.length} pieces available</span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line"
        >
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              qtyInCart={cart[product.id] || 0}
              onAdd={onAdd}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
