import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import ProcessStrip from '../components/ProcessStrip.jsx'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Home() {
  const { cart, addToCart } = useCart()
  const featured = products.slice(0, 4)

  return (
    <>
      <Hero />
      <ProductGrid products={featured} cart={cart} onAdd={addToCart} title="Featured pieces" />
      <div className="max-w-[1180px] mx-auto px-8 sm:px-4 -mt-10 pb-4">
        <Link to="/shop" className="text-sm border-b border-ink pb-0.5">
          View the full catalog →
        </Link>
      </div>
      <ProcessStrip />
    </>
  )
}
