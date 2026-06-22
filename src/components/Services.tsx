'use client'

import { useState, useEffect } from 'react'
import { Target, TrendingUp, Sparkles, LineChart, Bot, Palette, ArrowUpRight } from 'lucide-react'

const services = [
  {
    no: '01',
    icon: Target,
    title: 'Marketplace Growth & Optimization',
    headline: 'Win the Buy Box. Expand Your Reach.',
    desc: 'End-to-end marketplace services including listing strategy, fulfillment insights, Buy Box monitoring, and category expansion on Amazon, Noon, Flipkart, Ajio, and more.',
  },
  {
    no: '02',
    icon: TrendingUp,
    title: 'Retail Media & eCommerce Advertising',
    headline: 'Accelerate Results Across Every Channel.',
    desc: 'High-performance campaigns on Google, Meta, TikTok, and beyond. We optimize ad spend, automate campaigns, and deliver measurable improvements in attribution and ROAS.',
  },
  {
    no: '03',
    icon: Palette,
    title: 'Brand Strategy & Creative Content',
    headline: 'Elevate Your Brand. Engage Your Audience.',
    desc: 'From positioning to visual identity to channel-ready creative, we build brands that lead, not follow.',
  },
  {
    no: '04',
    icon: LineChart,
    title: 'Analytics & Performance Consulting',
    headline: 'Data You Can Actually Act On.',
    desc: 'Custom dashboards, attribution modeling, and growth audits to surface the levers that move revenue.',
  },
  {
    no: '05',
    icon: Bot,
    title: 'AI Powered Ad & Listing Creative',
    headline: 'Create Winning Content on Autopilot.',
    desc: 'AI generated copy and creative assets, auto-tailored for every marketplace and ad platform, so you stand out and convert faster.',
  },
  {
    no: '06',
    icon: Sparkles,
    title: 'D2C & Marketplace Launch',
    headline: 'Go Live Faster. Scale Smarter.',
    desc: 'Full-stack launch support: store setup, integrations, listings, ads, and ops, all under one roof.',
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Pattern background: blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />
      {/* Soft yellow blob */}
      <div className="absolute top-20 -right-40 w-[34rem] h-[34rem] bg-yellow-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-widest uppercase">
              Expert Led Services
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 text-foreground transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-yellow-500">Expert-Led</span> Services
          </h2>

          <p
            className={`text-base lg:text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Unlock new opportunities, accelerate conversions, and build a brand that leads,
            powered by 100 Miles.
          </p>
        </div>

        {/* List style services */}
        <div className="max-w-6xl mx-auto border-t border-border">
          {services.map((s, i) => {
            const Icon = s.icon
            const isActive = hovered === i
            return (
              <a
                key={s.title}
                href="/contact"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative grid grid-cols-12 gap-4 lg:gap-8 items-center px-4 lg:px-6 py-7 lg:py-10 border-b border-border rounded-2xl hover:rounded-2xl gentle-animation overflow-hidden"
              >
                {/* Hover yellow fill */}
                <span
                  className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400 rounded-2xl transition-colors duration-500 -z-0"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
                <span className="col-span-2 sm:col-span-1 relative z-10 text-sm font-mono font-bold text-muted-foreground group-hover:text-black transition">
                  {s.no}
                </span>
                <div className="col-span-10 sm:col-span-5 relative z-10 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-yellow-400/15 group-hover:bg-black/10 flex items-center justify-center shrink-0 transition">
                    <Icon className="w-5 h-5 text-yellow-500 group-hover:text-black transition" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-2xl font-black text-foreground group-hover:text-black leading-tight transition">
                      {s.title}
                    </h3>
                    <p className="text-xs lg:text-sm font-bold text-yellow-600 group-hover:text-black/80 tracking-wide mt-1 uppercase transition">
                      {s.headline}
                    </p>
                  </div>
                </div>
                <p className="hidden sm:block col-span-5 relative z-10 text-sm lg:text-base text-muted-foreground group-hover:text-black/85 leading-relaxed transition">
                  {s.desc}
                </p>
                <div className="col-span-12 sm:col-span-1 relative z-10 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center mt-14 lg:mt-16">
          <a
            href="/contact"
            className="inline-block bg-foreground text-background font-bold px-8 py-4 rounded-md hover:bg-yellow-400 hover:text-black hover:-translate-y-0.5 hover:shadow-lg gentle-animation"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
