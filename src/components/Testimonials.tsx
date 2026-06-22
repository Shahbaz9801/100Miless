'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: '100 Miles transformed how we operate across Amazon and Noon. Listings sync in real time and our team finally has one source of truth.',
    name: 'Hassan Al-Mansoori',
    role: 'Head of Ecommerce',
    company: 'Pearl & Oud Cosmetics',
  },
  {
    quote: 'Their Buy Box monitoring alone paid for the platform in the first month. Visibility on Amazon.ae went up significantly.',
    name: 'Meera Iyer',
    role: 'D2C Growth Lead',
    company: 'Verde Naturals',
  },
  {
    quote: 'The reconciliation engine saved our finance team days each month. Marketplace settlements now match without manual work.',
    name: 'Ahmed Khalil',
    role: 'CFO',
    company: 'Atlas Home Goods',
  },
  {
    quote: 'We launched in Saudi Arabia in 6 weeks instead of 6 months. The 100 Miles ops team is genuinely an extension of ours.',
    name: 'Sophia Lambert',
    role: 'Co-Founder',
    company: 'Maison Atelier',
  },
  {
    quote: 'Ad spend efficiency improved by 38% in the first quarter. Their AI-powered creative gives us variants we would never have shipped on our own.',
    name: 'Vikram Shetty',
    role: 'Marketing Director',
    company: 'Urban Forge Apparel',
  },
  {
    quote: 'From WMS to retail media, having it all in one platform with one team is a game changer for a lean brand like ours.',
    name: 'Noor Al-Sayed',
    role: 'Founder & CEO',
    company: 'Lumiere Skincare',
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure
      className="relative rounded-xl p-4 sm:p-5 flex flex-col w-[240px] sm:w-[280px] h-[220px] sm:h-[240px] shrink-0 backdrop-blur-xl bg-white/[0.06] dark:bg-white/[0.04] border border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:border-yellow-300/40 gentle-animation overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-yellow-300/10 blur-2xl pointer-events-none" />
      <div className="flex items-center gap-1 mb-2.5 text-yellow-500 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-current" />
        ))}
      </div>
      <blockquote className="text-foreground text-[12px] sm:text-[13px] leading-relaxed flex-1 relative z-10 line-clamp-5">
        "{t.quote}"
      </blockquote>
      <figcaption className="mt-3 pt-3 border-t border-white/10 relative z-10">
        <div className="font-black text-foreground text-xs sm:text-sm">{t.name}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground">
          {t.role} · <span className="text-yellow-600 dark:text-yellow-400">{t.company}</span>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  // Duplicate the list so the marquee can loop seamlessly
  const loop = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-widest uppercase">
              Testimonials
            </span>
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Loved by <span className="text-yellow-500">Brands That Lead</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from real ecommerce teams scaling with 100 Miles.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative z-10 group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex gap-5 lg:gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
