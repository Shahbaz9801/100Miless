'use client'

import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  breadcrumb?: string
  bgImage?: string
}

export function PageHero({ eyebrow, title, subtitle, breadcrumb, bgImage }: PageHeroProps) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-[#0a0a14]">
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            width={1920}
            height={896}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          {/* Subtle dark overlay only for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/40 to-[#0a0a14]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/70 via-[#0a0a14]/20 to-transparent" />
        </>
      )}

      {/* Soft accent glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-5">
          <Link to="/" className="hover:text-yellow-300 gentle-animation">Home</Link>
          {breadcrumb && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{breadcrumb}</span>
            </>
          )}
        </nav>

        {eyebrow && (
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full backdrop-blur-md bg-black/30 border border-white/15">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold text-white/85 tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="text-[34px] sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
