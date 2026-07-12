import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-8">
      <div className="max-w-[1180px] mx-auto px-8 sm:px-4">
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          <div className="max-w-[280px]">
            <h3 className="font-display text-xl mb-3">Kiln &amp; Co.</h3>
            <p className="text-[13px] text-ink-soft">
              A small wood-fired studio in Rutland, Vermont, making tableware and vessels
              for daily use.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wide mb-3.5">Shop</h4>
            <Link to="/shop" className="block text-sm text-ink-soft hover:text-ink py-1">All pieces</Link>
            <Link to="/shop" className="block text-sm text-ink-soft hover:text-ink py-1">Tableware</Link>
            <Link to="/shop" className="block text-sm text-ink-soft hover:text-ink py-1">Vases</Link>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wide mb-3.5">Studio</h4>
            <Link to="/studio" className="block text-sm text-ink-soft hover:text-ink py-1">Our process</Link>
            <Link to="/care" className="block text-sm text-ink-soft hover:text-ink py-1">Care guide</Link>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wide mb-3.5">Visit</h4>
            <span className="block text-sm text-ink-soft py-1">Rutland, VT</span>
            <span className="block text-sm text-ink-soft py-1">By appointment</span>
          </div>
        </div>

        <div className="flex justify-between pt-5 border-t border-line text-xs text-ink-soft font-mono">
          <span>© 2026 Kiln &amp; Co. Studio</span>
          <span>Demo storefront</span>
        </div>
      </div>
    </footer>
  )
}
