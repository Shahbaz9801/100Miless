'use client'

import { motion } from 'framer-motion'

const flow = [
  { label: 'Capture', detail: 'Orders & signals from every channel' },
  { label: 'Enrich', detail: 'AI tags, scores & predicts intent' },
  { label: 'Route', detail: 'Best warehouse, fastest carrier' },
  { label: 'Optimize', detail: 'Continuous learning on outcomes' },
]

export function AIPulse() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-yellow-300 text-xs sm:text-sm font-mono uppercase tracking-[0.25em]">
            Realtime Pulse
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Every Order, <span className="text-yellow-400">Orchestrated</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* animated line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px hidden md:block">
            <div className="relative h-full bg-yellow-400/15 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-[marquee_3s_linear_infinite]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
            {flow.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="relative mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black border-2 border-yellow-400/40 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-yellow-300 font-mono text-sm sm:text-base">0{i + 1}</span>
                  <span className="absolute inset-0 rounded-full border-2 border-yellow-300/50 animate-ping" style={{ animationDelay: `${i * 0.4}s` }} />
                </div>
                <div className="font-black text-base sm:text-lg">{step.label}</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-relaxed">{step.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
