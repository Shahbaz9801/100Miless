'use client'

import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

interface CTABandProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTABand({
  title = 'Ready to unlock your next phase of growth?',
  subtitle = 'Book a free strategy session with our ecommerce experts. No pitch decks, just a clear roadmap to scale your brand profitably.',
  primaryLabel = 'Book a Free Strategy Call',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Solutions',
  secondaryTo = '/solutions',
}: CTABandProps) {
  return (
    <section className="relative py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-yellow-300/15 elevated-shadow bg-[#0c0c14] px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
          {/* Corner dotted pattern — top-right */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(250,204,21,0.6) 1.2px, transparent 1.4px)',
              backgroundSize: '14px 14px',
              maskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)',
            }}
          />
          {/* Corner diagonal lines — bottom-left */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(250,204,21,0.45) 0 1px, transparent 1px 12px)',
              maskImage: 'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-300/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span className="text-[11px] sm:text-xs font-semibold text-yellow-200 tracking-[0.2em] uppercase">
                Let's Build Together
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              {title}
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to={primaryTo}
                className="group inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-md hover:bg-yellow-300 hover:-translate-y-0.5 gentle-animation text-sm sm:text-base"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-md hover:bg-white/10 hover:border-yellow-300 hover:-translate-y-0.5 gentle-animation text-sm sm:text-base"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
