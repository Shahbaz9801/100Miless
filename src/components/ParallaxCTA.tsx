'use client'

import { ArrowUpRight } from 'lucide-react'
import parallaxBg from '../assets/parallax-ai.png'

export function ParallaxCTA() {
  return (
    <section
      id="innovate"
      aria-label="Innovative Strategic Growth Focused"
      className="relative h-[80vh] min-h-[520px] lg:min-h-[640px] w-full overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${parallaxBg})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Light overlay so the background image stays clearly visible */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: '3px 3px',
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-yellow-200/90 tracking-[0.3em] uppercase">
            Powered by 100 Miles
          </span>
          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.05] text-white mb-6 tracking-tight">
          Innovative. <span className="text-yellow-300">Strategic.</span> Growth Focused.
        </h2>
        <p className="text-base lg:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Intelligence and execution, fused into one platform that moves your brand forward, faster.
        </p>

        <a
          href="/solutions"
          className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black px-8 py-4 rounded-md hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-xl gentle-animation text-base lg:text-lg"
        >
          Our Solutions
          <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
