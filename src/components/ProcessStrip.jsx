const steps = [
  {
    label: '01 — THROWN',
    text: 'Each form is centered and pulled on the wheel from Vermont stoneware clay, then trimmed by hand once leather-hard.',
  },
  {
    label: '02 — GLAZED',
    text: 'We mix our glazes in-house from raw minerals — expect gentle variation in every batch.',
  },
  {
    label: '03 — FIRED',
    text: 'Pieces are wood-fired to cone 10, over 2,300°F, in a kiln we built ourselves in 2016.',
  },
]

export default function ProcessStrip() {
  return (
    <section className="bg-ink text-cream py-14">
      <div className="max-w-[1180px] mx-auto px-8 sm:px-4 flex flex-wrap justify-between gap-6">
        {steps.map((step) => (
          <div key={step.label} className="max-w-[260px]">
            <span className="block font-mono text-[11px] text-mustard mb-2.5">{step.label}</span>
            <p className="text-sm text-[#D8D3C6]">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
