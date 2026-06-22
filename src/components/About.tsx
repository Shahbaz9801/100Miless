'use client'

import { Globe, Zap, Brain, Target, ArrowUpRight, Sparkles, ChevronRight, Award, TrendingUp, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { 
    value: '4', 
    label: 'Global Offices', 
    sub: 'UAE · KSA · India · Ireland',
    icon: Globe,
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    value: '50+', 
    label: 'Marketplace Integrations', 
    sub: 'Native, real-time syncing',
    icon: Zap,
    color: 'from-yellow-500 to-orange-400'
  },
  { 
    value: '10+', 
    label: 'Years of Expertise', 
    sub: 'Building ecommerce engines',
    icon: Award,
    color: 'from-purple-500 to-pink-400'
  },
  { 
    value: '24/7', 
    label: 'Customer Support', 
    sub: 'Always-on success team',
    icon: Shield,
    color: 'from-green-500 to-emerald-400'
  },
]

const pillars = [
  {
    icon: Brain,
    title: 'AI-Driven Intelligence',
    desc: 'Predictive analytics and automation built into every workflow, from listings to logistics.',
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-500/10 to-purple-500/5'
  },
  {
    icon: Globe,
    title: 'Truly Global',
    desc: 'Operations across UAE, Saudi Arabia, India, and Ireland, built for cross-border commerce.',
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-500/10 to-blue-500/5'
  },
  {
    icon: Zap,
    title: 'Built for Speed',
    desc: 'Engineered by ecommerce pioneers for agility and scale, without compromising on precision.',
    gradient: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-400/10 to-orange-500/5'
  },
  {
    icon: Target,
    title: 'Outcome Focused',
    desc: 'Every feature ties back to measurable growth: revenue, margin, conversion, retention.',
    gradient: 'from-rose-500 to-pink-600',
    bgGradient: 'from-rose-500/10 to-pink-500/5'
  },
]

const achievements = [
  { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
  { label: 'Revenue Growth', value: '3.2x', icon: Sparkles },
  { label: 'Platform Uptime', value: '99.9%', icon: Shield },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    // z-20 layer adds stacking security so headers don't clip beneath preceding hero fragments on scroll
    <section 
      id="about" 
      ref={sectionRef}
      className="relative z-20 py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Static background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[800px] h-72 sm:h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/10 to-transparent rounded-full animate-pulse" />
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-400/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-yellow-400 tracking-widest uppercase">
              About 100 Miles
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black處理 leading-[1.15] sm:leading-[1.1] mb-6">
            Built by{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                Pioneers
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-2 sm:h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M 0 5 Q 25 10, 50 5 T 100 5" stroke="url(#underlineAboutGrad)" strokeWidth="3" fill="none" />
                <defs>
                  <linearGradient id="underlineAboutGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#facc15" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#facc15" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#facc15" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-2">
            100 Miles empowers brands and sellers to accelerate growth in the digital marketplace
            with AI-driven intelligence, seamless automation, and scalable solutions.
          </p>
        </div>

        {/* Main Info + Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 sm:mb-32">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-yellow-400/20 transition-all duration-500">
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6">
                Our platform unifies marketplaces, D2C stores, and B2B into a single intelligent
                ecosystem, delivering real-time insights, seamless automation, and scalable solutions
                precisely tailored to your needs.
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['AI-Powered', 'Real-Time Analytics', 'Global Reach', 'Scalable'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 rounded-full bg-yellow-400/5 border border-yellow-400/10 text-yellow-400 text-xs sm:text-sm font-medium hover:bg-yellow-400/10 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission/Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-yellow-400/20 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </div>
                  <span className="text-[11px] font-bold text-yellow-400 tracking-widest uppercase">Our Mission</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 font-medium leading-snug">
                  Simplify ecommerce complexity so brands can focus on what they do best: building products and customer love.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-yellow-400/20 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Target className="w-4 h-4 text-yellow-400" />
                  </div>
                  <span className="text-[11px] font-bold text-yellow-400 tracking-widest uppercase">Our Vision</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 font-medium leading-snug">
                  To become the operating system for global ecommerce, powered by intelligence, run by humans.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="/solutions"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 font-bold px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10"
              >
                <span className="relative z-10 text-sm sm:text-base">Explore Solutions</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-slate-900/80 backdrop-blur-sm border border-slate-800 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-zinc-700 hover:bg-slate-800/40 transition-all duration-300 text-sm sm:text-base"
              >
                Talk to Our Team
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-800/80 hover:border-yellow-400/20 transition-all duration-500 ${
                      i % 2 === 0 ? 'lg:translate-y-4' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-r ${s.color} p-0.5`}>
                        <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-1">
                      {s.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200 leading-tight">{s.label}</div>
                    <div className="text-[11px] text-slate-500 mt-1.5 font-medium leading-tight">{s.sub}</div>
                  </div>
                )
              })}
            </div>

            {/* Achievement Badges */}
            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {achievements.map((a) => {
                const Icon = a.icon
                return (
                  <div 
                    key={a.label}
                    className="bg-slate-900/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 text-center border border-slate-900 hover:border-slate-800 transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-yellow-400/80 mx-auto mb-1" />
                    <div className="text-sm sm:text-base font-black text-white">{a.value}</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-semibold tracking-wider">{a.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* How We Work Title Section */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/10 bg-yellow-400/5 text-[10px] sm:text-xs font-bold text-yellow-400 tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            Execution Roadmap
          </span>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3">
            A Journey Built for{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">Follow our path from integration to hyper-scale automation.</p>
        </div>

        {/* Pillars - Modern Adaptive Interactive Connected Path */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
          
          {/* Central Connecting Path Line (Desktop Horizontal, Mobile Vertical) */}
          <div className="hidden lg:block absolute left-[12%] right-[12%] top-16 h-[2px] bg-gradient-to-r from-violet-500/30 via-yellow-400/30 to-rose-500/30 pointer-events-none z-0" />
          <div className="lg:hidden absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-500/30 via-yellow-400/30 to-rose-500/30 pointer-events-none z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="flex lg:flex-col items-start lg:items-stretch gap-6 lg:gap-0 group relative"
                >
                  {/* Step Vector Node Indicator */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:border-yellow-400 group-hover:text-yellow-400 transition-all duration-300 lg:mb-6 z-10 shadow-lg shadow-black">
                    {i + 1}
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-800/80 hover:border-yellow-400/20 transition-all duration-500 hover:-translate-y-1 shadow-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-yellow-400/20 transition-all duration-500 mb-4">
                        <Icon className="w-5 h-5 text-yellow-400/90 group-hover:scale-105 transition-transform" />
                      </div>
                      
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {p.desc}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-1.5 text-yellow-400/40 group-hover:text-yellow-400 transition-colors text-xs font-semibold uppercase tracking-wider">
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
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