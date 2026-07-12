import ProductGrid from '../components/ProductGrid.jsx'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Shop() {
  const { cart, addToCart } = useCart()

  return (
    <div className="pt-6">
      <ProductGrid products={products} cart={cart} onAdd={addToCart} title="The catalog" />
    </div>
  )
}
