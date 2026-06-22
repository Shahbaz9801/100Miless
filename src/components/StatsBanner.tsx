'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Stat = { value: number; suffix?: string; prefix?: string; label: string; sub?: string }

const stats: Stat[] = [
  { value: 200, suffix: '+', label: 'Brands Scaled', sub: 'Across UAE, KSA, India & EU' },
  { value: 50, suffix: '+', label: 'Native Integrations', sub: 'Marketplaces, ads, shipping, ERPs' },
  { value: 312, suffix: '%', label: 'Avg. Revenue Growth', sub: 'Within first 12 months' },
  { value: 2.4, suffix: 'B', prefix: '$', label: 'GMV Processed', sub: 'Across our brand network' },
]

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    const duration = 1800
    const startTime = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - startTime) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(stat.value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, stat.value])
  const display = stat.value >= 100 || Number.isInteger(stat.value)
    ? Math.round(n).toLocaleString()
    : n.toFixed(1)
  return (
    <span className="tabular-nums">
      {stat.prefix}{display}{stat.suffix}
    </span>
  )
}

export function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a14 60%)' }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(250,204,21,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(250,204,21,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
        }}
      />
      {/* Soft glows */}
      <div className="absolute top-0 left-1/3 w-[36rem] h-[36rem] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-yellow-300 tracking-[0.3em] uppercase">By the numbers</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
            A decade of <span className="text-yellow-300">measurable wins.</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/70 leading-relaxed">
            Every number on this page is sourced from real brand reporting — no marketing math.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-yellow-300/30 hover:bg-white/[0.06] gentle-animation group"
            >
              <div className="text-4xl lg:text-5xl font-black text-yellow-300 leading-none">
                <Counter stat={s} start={inView} />
              </div>
              <div className="mt-3 text-sm lg:text-base font-bold text-white">{s.label}</div>
              {s.sub && <div className="mt-1 text-xs lg:text-sm text-white/60 leading-snug">{s.sub}</div>}
              <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
