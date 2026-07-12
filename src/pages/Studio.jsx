import ProcessStrip from '../components/ProcessStrip.jsx'

export default function Studio() {
  return (
    <div>
      <div className="max-w-[1180px] mx-auto px-8 sm:px-4 py-16">
        <span className="block font-mono text-xs uppercase tracking-[0.12em] text-sage-deep mb-4">
          The studio
        </span>
        <h1 className="font-display text-[40px] leading-tight max-w-[600px] mb-6">
          Built in a barn, fired by hand.
        </h1>
        <p className="text-ink-soft text-[15px] max-w-[560px]">
          Kiln & Co. started in a converted dairy barn in Rutland, Vermont, in 2016. We
          built our wood-fired kiln ourselves over one long summer, and every piece we've
          made since has passed through it.
        </p>
      </div>
      <ProcessStrip />
    </div>
  )
}
