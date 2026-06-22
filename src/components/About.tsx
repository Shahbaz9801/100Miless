'use client'

import { Globe, Zap, Brain, Target, ArrowUpRight } from 'lucide-react'

const stats = [
  { value: '4', label: 'Global Offices', sub: 'UAE · KSA · India · Ireland' },
  { value: '50+', label: 'Marketplace Integrations', sub: 'Native, real-time syncing' },
  { value: '10+', label: 'Years of Expertise', sub: 'Building ecommerce engines' },
  { value: '24/7', label: 'Customer Support', sub: 'Always-on success team' },
]

const pillars = [
  {
    icon: Brain,
    title: 'AI-Driven Intelligence',
    desc: 'Predictive analytics and automation built into every workflow, from listings to logistics.',
  },
  {
    icon: Globe,
    title: 'Truly Global',
    desc: 'Operations across UAE, Saudi Arabia, India, and Ireland, built for cross-border commerce.',
  },
  {
    icon: Zap,
    title: 'Built for Speed',
    desc: 'Engineered by ecommerce pioneers for agility and scale, without compromising on precision.',
  },
  {
    icon: Target,
    title: 'Outcome Focused',
    desc: 'Every feature ties back to measurable growth: revenue, margin, conversion, retention.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`,
          backgroundSize: '3px 3px',
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-widest uppercase">
                About 100 Miles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-6 text-foreground">
              Built by <span className="text-yellow-500">Pioneers</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-5">
              100 Miles empowers brands and sellers to accelerate growth in the digital marketplace
              with AI-driven intelligence, seamless automation, and scalable solutions. Built by
              ecommerce pioneers and trusted by leading businesses across the Middle East and beyond.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Our platform unifies marketplaces, D2C stores, and B2B into a single intelligent
              ecosystem, delivering real-time insights, seamless automation, and scalable solutions
              precisely tailored to your needs.
            </p>

            {/* Mission/Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-card clean-border rounded-2xl p-6 elevated-shadow hover:-translate-y-1 gentle-animation">
                <div className="text-xs font-bold text-yellow-500 tracking-widest uppercase mb-2">
                  Our Mission
                </div>
                <p className="text-foreground font-semibold leading-snug">
                  Simplify ecommerce complexity so brands can focus on what they do best: building products and customer love.
                </p>
              </div>
              <div className="bg-card clean-border rounded-2xl p-6 elevated-shadow hover:-translate-y-1 gentle-animation">
                <div className="text-xs font-bold text-yellow-500 tracking-widest uppercase mb-2">
                  Our Vision
                </div>
                <p className="text-foreground font-semibold leading-snug">
                  To become the operating system for global ecommerce, powered by intelligence, run by humans.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/solutions"
                className="bg-foreground text-background font-bold px-7 py-3.5 rounded-md hover:opacity-90 gentle-animation inline-flex items-center gap-2"
              >
                Our Solutions
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="clean-border text-foreground font-semibold px-7 py-3.5 rounded-md hover:bg-card gentle-animation"
              >
                Talk to Our Team
              </a>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`relative bg-card clean-border rounded-2xl p-6 elevated-shadow hover:-translate-y-1 gentle-animation overflow-hidden group ${
                    i % 2 === 0 ? 'sm:translate-y-4' : ''
                  }`}
                >
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition" />
                  <div className="relative">
                    <div className="text-4xl lg:text-5xl font-black text-yellow-500 mb-2 leading-none">
                      {s.value}
                    </div>
                    <div className="text-sm font-bold text-foreground leading-snug">{s.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Work — Path */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">
            How We Work
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3">A Journey Built for Growth</h3>
          <p className="text-base text-muted-foreground">Follow the path. Accelerate. Scale. Innovate.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Curved SVG path (desktop only) */}
          <svg
            aria-hidden="true"
            className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-40 pointer-events-none"
            viewBox="0 0 1200 160"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 80 C 200 -20, 400 180, 600 80 S 1000 -20, 1160 80"
              stroke="url(#pathGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              fill="none"
            />
            <defs>
              <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#facc15" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#facc15" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#facc15" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Vertical line for mobile */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/10 via-yellow-400/70 to-yellow-400/10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {pillars.map((p, i) => {
              const Icon = p.icon
              const offset = i % 2 === 0 ? 'lg:translate-y-[-40px]' : 'lg:translate-y-[40px]'
              return (
                <div
                  key={p.title}
                  className={`relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center pl-20 lg:pl-0 ${offset}`}
                >
                  {/* Step node */}
                  <div className="relative shrink-0 lg:mx-auto">
                    <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-xl group-hover:bg-yellow-400/60 transition" />
                    <div className="relative w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-[0_0_0_6px_rgba(250,204,21,0.15)] hover:shadow-[0_0_0_10px_rgba(250,204,21,0.25)] hover:scale-110 transition-all duration-500">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-xs font-black flex items-center justify-center">
                      0{i + 1}
                    </div>
                    {/* mobile node anchor */}
                    <div className="lg:hidden absolute left-[-44px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-400 ring-4 ring-yellow-400/20" />
                  </div>

                  <div className="lg:max-w-[240px]">
                    <h4 className="text-lg font-black text-foreground mb-2">{p.title}</h4>
                    <p className="text-muted-foreground text-[14px] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
