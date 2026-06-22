'use client'

import { useEffect, useState } from 'react'
import warehouse from '../assets/why-warehouse-light.jpg'
import analytics from '../assets/why-analytics-light.jpg'
import global from '../assets/why-global-light.jpg'
import fulfillment from '../assets/why-fulfillment-light.jpg'
import team from '../assets/why-team-light.jpg'

const slides = [
  {
    image: warehouse,
    eyebrow: 'Operations at Scale',
    title: 'Warehouses That Never Sleep',
    desc: 'Automated picking, packing, and dispatch across multi-region warehouses with real-time stock visibility.',
  },
  {
    image: analytics,
    eyebrow: 'Intelligent Decisions',
    title: 'Data Turned Into Revenue',
    desc: 'Live dashboards for sales, ad spend, profitability and stock. Spot trends before competitors do.',
  },
  {
    image: global,
    eyebrow: 'Built Globally',
    title: 'One Platform. Every Market.',
    desc: 'Sell across UAE, Saudi, India, Europe and beyond from a single intelligent control plane.',
  },
  {
    image: fulfillment,
    eyebrow: 'Fulfillment, Solved',
    title: 'Packages That Move On Time.',
    desc: 'Multi-carrier shipping, automated label generation, and real-time delivery tracking from one console.',
  },
  {
    image: team,
    eyebrow: 'Human Expertise',
    title: 'A Team That Works Like Yours.',
    desc: 'Strategists, marketers and ops specialists who treat your brand growth as their daily mission.',
  },
]

export function WhyUs() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="why-us" className="relative pt-0 pb-12 lg:pb-20 bg-background">
      <div className="w-full">
        <div className="relative w-full aspect-[16/12] sm:aspect-[16/9] lg:aspect-[16/7] overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: active === i ? 1 : 0 }}
              aria-hidden={active !== i}
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-20 max-w-4xl">
                <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-yellow-300 tracking-[0.3em] uppercase mb-3 lg:mb-4">
                  {s.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.05] mb-3 lg:mb-5">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-xl text-white/90 leading-relaxed max-w-xl">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-5 right-5 lg:bottom-8 lg:right-8 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === i ? 'w-10 bg-yellow-300' : 'w-5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
