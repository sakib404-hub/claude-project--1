import CeramicArt from './CeramicArt.jsx'

export default function CartLine({ product, qty, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="flex gap-3.5 py-4 border-b border-line">
      <div className="w-16 h-16 bg-card border border-line rounded flex items-center justify-center shrink-0">
        <CeramicArt shape={product.shape} className="w-[70%] h-[70%]" />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-sm font-medium">{product.name}</span>
        <span className="text-xs text-ink-soft mt-0.5">{product.meta}</span>

        <div className="flex items-center gap-2.5 mt-auto">
          <button
            onClick={() => onDecrement(product.id)}
            className="w-[22px] h-[22px] border border-line rounded flex items-center justify-center text-[13px]"
          >
            −
          </button>
          <span className="font-mono text-[13px] min-w-[14px] text-center">{qty}</span>
          <button
            onClick={() => onIncrement(product.id)}
            className="w-[22px] h-[22px] border border-line rounded flex items-center justify-center text-[13px]"
          >
            +
          </button>
          <span
            onClick={() => onRemove(product.id)}
            className="text-[11px] text-ink-soft underline cursor-pointer ml-auto"
          >
            Remove
          </span>
        </div>
      </div>

      <span className="font-mono text-sm self-start">${product.price * qty}</span>
    </div>
  )
}
