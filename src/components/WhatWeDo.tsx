'use client'

// import bgImage from '../assets/whatwedo-bg.jpg'

const items = [
  'Listing Management',
  'Inventory & Warehouse Management',
  'Campaign Management',
  'Order Fulfillment',
  'Feedback Management',
  'Product Registration and Legality Check',
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-12 sm:py-16 lg:py-24 px-3 sm:px-5 lg:px-8">
      <div className="relative overflow-hidden bg-[#0a0a0a] rounded-tr-[120px] rounded-br-[120px] sm:rounded-tr-[200px] sm:rounded-br-[200px] lg:rounded-tr-[300px] lg:rounded-br-[300px] py-14 sm:py-20 lg:py-28">
        {/* Right-side background image with light blur */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none"
        >
          <img
            alt=""
            className="w-full h-full object-cover opacity-40 blur-[2px]"
            loading="lazy"
            width={1280}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent lg:via-[#0a0a0a]/50" />
        </div>

        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
            backgroundSize: '3px 3px',
          }}
        />

        <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 sm:mb-5 leading-tight">
              What We Do
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed mb-6">
              At 100 Miles, we offer a comprehensive solution to facilitate your brand's
              entry and success in the UAE and global marketplaces.
            </p>
            <ul className="space-y-2.5 mb-8">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-white">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-300 shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide">{it}</span>
                </li>
              ))}
            </ul>
            <a
              href="/solutions"
              className="inline-block bg-yellow-400 text-black font-black px-6 sm:px-8 py-3 rounded-md text-sm sm:text-base hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-xl gentle-animation"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
