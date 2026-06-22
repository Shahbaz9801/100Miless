'use client'

import { motion } from 'framer-motion'
import { Users, Target, Rocket, TrendingUp } from 'lucide-react'

const phases = [
  { icon: Users, label: 'Audit', detail: 'Senior pod plugs into your team' },
  { icon: Target, label: 'Strategy', detail: '90-day roadmap with owned metrics' },
  { icon: Rocket, label: 'Launch', detail: 'Channels live, campaigns running' },
  { icon: TrendingUp, label: 'Scale', detail: 'Weekly experiments compound wins' },
]

/**
 * A horizontal animated pipeline showing how a 100 Miles service pod
 * moves a brand from audit → scale. Energy flows left-to-right along
 * an illuminated track that powers each milestone in sequence.
 */
export function ServiceFlow() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-yellow-300 tracking-[0.3em] uppercase mb-3">
            Pod Engagement Loop
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
            A pod that moves <span className="text-yellow-300">at the speed of your roadmap.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Energy track */}
          <div className="hidden md:block absolute left-[8%] right-[8%] top-[44px] h-[3px] rounded-full bg-yellow-400/10 overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
              animate={{ x: ['-100%', '400%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{ filter: 'drop-shadow(0 0 8px rgba(253,224,71,0.8))' }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
            {phases.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-yellow-300/30 blur-xl"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                    <div className="relative w-[88px] h-[88px] rounded-full bg-black border-2 border-yellow-400/40 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-yellow-300" />
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-yellow-300 text-black text-[10px] font-black flex items-center justify-center">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                  <div className="font-black text-white text-base sm:text-lg">{p.label}</div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed max-w-[160px]">
                    {p.detail}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
