'use client'

import { ArrowRight, Sparkles, Zap, Globe, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { icon: Clock, v: '24h', l: 'Avg. response time' },
  { icon: Globe, v: '50+', l: 'Marketplaces' },
  { icon: Zap, v: '4', l: 'Global offices' },
]

export function CTASection() {
  return (
    <section aria-label="Get started with 100 Miles" className="relative py-20 lg:py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-yellow-300/15 elevated-shadow bg-[#0c0c14]">
          {/* Layered curved SVG backdrop */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="ctaCurve1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#facc15" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ctaCurve2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#facc15" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M -50 420 C 200 320, 450 540, 700 380 S 1100 240, 1300 360" stroke="url(#ctaCurve1)" strokeWidth="1.2" fill="none" />
            <path d="M -50 480 C 250 380, 500 580, 750 420 S 1150 300, 1300 420" stroke="url(#ctaCurve1)" strokeWidth="1" fill="none" />
            <path d="M -50 540 C 300 440, 550 620, 800 460 S 1200 360, 1300 480" stroke="url(#ctaCurve2)" strokeWidth="0.8" fill="none" />
            <path d="M -50 200 C 250 100, 500 260, 750 180 S 1150 80, 1300 220" stroke="url(#ctaCurve2)" strokeWidth="0.8" fill="none" />
          </svg>

          {/* Top-right dotted corner */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(250,204,21,0.6) 1.2px, transparent 1.4px)',
              backgroundSize: '14px 14px',
              maskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)',
            }}
          />
          {/* Bottom-left diagonal corner */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(250,204,21,0.45) 0 1px, transparent 1px 12px)',
              maskImage: 'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
            }}
          />
          {/* Soft yellow glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />


          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-300/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span className="text-[11px] sm:text-xs font-semibold text-yellow-200 tracking-[0.25em] uppercase">
                  Ready When You Are
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] text-white">
                Let's Build Your Next <span className="text-yellow-300">100 Miles</span> of Growth.
              </h2>
              <p className="mt-5 text-base lg:text-lg text-white/80 max-w-2xl leading-relaxed">
                Book a free strategy session with our ecommerce experts. No pitch decks, no fluff —
                just a clear roadmap to scale your brand profitably.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-7 py-3.5 rounded-md hover:bg-yellow-300 hover:-translate-y-0.5 gentle-animation"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/10 hover:border-yellow-300 hover:-translate-y-0.5 gentle-animation backdrop-blur-sm"
                >
                  Explore Services & Integrations
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
                {stats.map((s) => (
                  <div key={s.l} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-yellow-400/15 border border-yellow-300/20 flex items-center justify-center shrink-0">
                      <s.icon className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div>
                      <div className="text-xl lg:text-2xl font-black text-yellow-300 leading-none">{s.v}</div>
                      <div className="text-[11px] sm:text-xs text-white/60 mt-1.5 leading-tight">{s.l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
