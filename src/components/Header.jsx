import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

const navItem = ({ isActive }) =>
  `link-underline py-1 transition-opacity ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`

export default function Header() {
  const { cartCount, setCartOpen } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-putty/90 backdrop-blur-md border-b border-line">
      <div className="max-w-[1180px] mx-auto px-8 sm:px-4 h-[76px] flex items-center justify-between">
        <Link to="/" className="font-display text-[22px] font-semibold flex items-baseline gap-1.5">
          Kiln <span className="text-mustard">&amp;</span> Co.
        </Link>

        <nav className="hidden md:flex gap-8 text-sm tracking-wide">
          <NavLink to="/shop" className={navItem}>Shop</NavLink>
          <NavLink to="/studio" className={navItem}>Studio</NavLink>
          <NavLink to="/care" className={navItem}>Care</NavLink>
        </nav>

        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => setCartOpen(true)}
          className="flex items-center gap-2 text-sm border border-ink px-4 py-2.5 rounded hover:bg-ink hover:text-cream transition-colors"
        >
          <span>Cart</span>
          <motion.span
            key={cartCount}
            initial={{ scale: 1.4 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            className="font-mono text-xs"
          >
            ({cartCount})
          </motion.span>
        </motion.button>
      </div>
    </header>
  )
}
