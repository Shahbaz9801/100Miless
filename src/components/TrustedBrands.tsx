'use client'

import { useEffect, useRef } from 'react'
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
  const sectionRef = useRef<HTMLElement>(null)
  const loop = [...brands, ...brands]

  return (
    <section
      id="trusted-brands"
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Simple decorative line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Simple Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            Trusted by Leading Brands
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Our Partners
          </h3>
        </div>

        {/* Simple Marquee */}
        <div
          className="relative w-full overflow-hidden py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div 
            className="flex gap-12 sm:gap-16 lg:gap-20 w-max marquee-track items-center"
            style={{
              animation: 'scroll 30s linear infinite',
            }}
          >
            {loop.map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="shrink-0 flex items-center justify-center h-12 sm:h-14"
              >
                <img
                  src={b.logo}
                  alt={`${b.name} logo`}
                  className="max-h-10 sm:max-h-12 w-auto object-contain opacity-60 dark:opacity-40 hover:opacity-100 dark:hover:opacity-80 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}