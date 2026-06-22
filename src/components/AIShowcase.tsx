'use client'

import { motion } from 'framer-motion'
import { Sparkles, Brain, Zap, Globe2, BarChart3, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Brain, title: 'AI Intelligence', desc: 'Self-learning models tuned to your catalog and marketplaces.' },
  { icon: Zap, title: 'Realtime Sync', desc: 'Listings, inventory and prices update across channels in seconds.' },
  { icon: Globe2, title: 'Global Reach', desc: 'Sell across UAE, KSA, India, Ireland and 50+ marketplaces.' },
  { icon: BarChart3, title: 'Decision Analytics', desc: 'Unified BI dashboards that turn data into next-best actions.' },
  { icon: ShieldCheck, title: 'Reconciled Finance', desc: 'Auto-matched marketplace settlements, no spreadsheets.' },
  { icon: Sparkles, title: 'Creative Engine', desc: 'On-brand ad creative & A+ content generated at scale.' },
]

export function AIShowcase() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Animated rings backdrop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-yellow-400/10 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[460px] h-[460px] rounded-full border border-yellow-400/15 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-yellow-400/20 animate-[spin_25s_linear_infinite]" />
        <div className="absolute w-3 h-3 rounded-full bg-yellow-300 shadow-[0_0_40px_8px_rgba(253,224,71,0.4)]" />
      </div>

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-yellow-300 text-xs sm:text-sm font-mono uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Intelligence Layer
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Built on a <span className="text-yellow-400">Living AI Core</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Six interconnected systems working together — so your team can focus on growth, not glue work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-5 sm:p-6 bg-white/[0.04] backdrop-blur-md border border-yellow-400/15 hover:border-yellow-300/50 hover:bg-yellow-400/[0.06] gentle-animation overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-yellow-300/10 blur-3xl opacity-0 group-hover:opacity-100 gentle-animation" />
                <div className="relative">
                  <div className="inline-flex w-11 h-11 sm:w-12 sm:h-12 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-300 mb-4 group-hover:bg-yellow-400 group-hover:text-black gentle-animation">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-black text-base sm:text-lg mb-1.5">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
