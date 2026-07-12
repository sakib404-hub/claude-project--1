import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-[1180px] mx-auto px-8 sm:px-4 py-32 text-center">
      <span className="font-mono text-xs text-sage-deep block mb-4">404</span>
      <h1 className="font-display text-4xl mb-6">This piece isn't on the shelf.</h1>
      <Link to="/shop" className="text-sm border-b border-ink pb-0.5">
        Back to the catalog →
      </Link>
    </div>
  )
}
