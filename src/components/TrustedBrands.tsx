'use client'

import a2c from '../assets/brands/a2c.png'
import cat from '../assets/brands/cat.png'
import mcp from '../assets/brands/mcp.png'
import miniml from '../assets/brands/miniml.png'
import oneill from '../assets/brands/oneill.png'
import pinkstuff from '../assets/brands/pinkstuff.png'
import sotsu from '../assets/brands/sotsu.png'
import wishcare from '../assets/brands/wishcare.png'

const brands = [
  { name: 'A2C', logo: a2c },
  { name: 'Caterpillar', logo: cat },
  { name: 'My Carry Potty', logo: mcp },
  { name: 'Miniml', logo: miniml },
  { name: "O'Neill", logo: oneill },
  { name: 'The Pink Stuff', logo: pinkstuff },
  { name: 'Sotsu', logo: sotsu },
  { name: 'WishCare', logo: wishcare },
]

export function TrustedBrands() {
  const loop = [...brands, ...brands]

  return (
    <section
      id="trusted-brands"
      aria-label="Trusted by leading global brands"
      className="relative py-12 lg:py-16 overflow-hidden bg-background"
    >
      {/* Soft top + bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 mb-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground tracking-[0.25em] uppercase">
              Trusted by global brands
            </span>
          </div>
          <span className="text-xs text-muted-foreground/80">
            From emerging disruptors to established icons.
          </span>
        </div>
      </div>

      {/* Marquee — compact, clean */}
      <div
        className="relative w-full overflow-hidden z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="flex gap-12 sm:gap-16 lg:gap-20 marquee-track w-max items-center py-2">
          {loop.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              title={b.name}
              className="group shrink-0 flex items-center justify-center h-[44px] sm:h-[52px] lg:h-[60px]"
            >
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="max-h-[40px] sm:max-h-[48px] lg:max-h-[56px] w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
