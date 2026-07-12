import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CeramicArt from './CeramicArt.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="border-b border-line py-24 md:py-14">
      <div className="max-w-[1180px] mx-auto px-8 sm:px-4 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-9 md:gap-16 items-center">
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="block font-mono text-xs uppercase tracking-[0.12em] text-sage-deep mb-4"
          >
            Wood-fired, since 2016 · Batch no. 0342
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="font-display font-medium text-[40px] sm:text-[68px] leading-[1.02]"
          >
            Vessels made
            <br />
            by <em className="italic text-sage-deep font-normal">hand,</em> fired
            <br />
            by flame.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-5 max-w-[440px] text-ink-soft text-[16px]"
          >
            Small-batch stoneware thrown, glazed, and kiln-fired one piece at a time in our
            Vermont studio. No two pieces are identical — that's the point.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-8 flex items-center gap-4"
          >
            <Link
              to="/shop"
              className="inline-block bg-ink text-cream px-6 py-3.5 text-sm rounded tracking-wide hover:bg-sage-deep transition-colors"
            >
              Browse the catalog
            </Link>
            <Link to="/studio" className="text-sm border-b border-ink pb-0.5">
              Our process →
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[1/1.05] bg-card border border-line rounded flex items-center justify-center relative overflow-hidden">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[76%] h-[76%]"
            >
              <CeramicArt shape="kiln" className="w-full h-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 left-4 bg-cream border border-line px-3 py-2 font-mono text-[11px] rounded">
            No. 0342 — Amber Glaze Vase
          </div>
        </motion.div>
      </div>
    </section>
  )
}
