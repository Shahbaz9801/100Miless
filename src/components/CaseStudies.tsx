'use client'

import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, ShoppingBag, Star, Target, Sparkles, CheckCircle2 } from 'lucide-react'
import beauty from '@/assets/case-studies/beauty.jpg'
import fashion from '@/assets/case-studies/fashion.jpg'
import wellness from '@/assets/case-studies/wellness.jpg'

const studies = [
  {
    image: beauty,
    tag: 'Beauty · UAE',
    title: 'Korean Beauty in the Spotlight',
    subtitle: 'A comprehensive AI-led ecommerce solution for the UAE market',
    desc: 'In a world captivated by skincare, the allure of K-Beauty holds a special place. We partnered with a leading Korean beauty house to launch and scale across Amazon.ae, Noon and a direct Shopify storefront — all in under 120 days.',
    challenge: 'Limited UAE visibility, fragmented listings across channels, and no central view of inventory or ad spend.',
    solution: [
      'Unified listings and brand store on Amazon.ae and Noon',
      'AI enriched content with Arabic localization',
      'Performance marketing across Meta, TikTok and Amazon Ads',
      'WMS integration with a Dubai-based 3PL for 24h dispatch',
    ],
    metrics: [
      { icon: TrendingUp, label: 'Revenue Growth', value: '+312%' },
      { icon: ShoppingBag, label: 'Order Volume', value: '4.8x' },
      { icon: Star, label: 'Avg. Rating', value: '4.9/5' },
    ],
  },
  {
    image: fashion,
    tag: 'Fashion · GCC',
    title: 'Scaling a Premium Fashion Label',
    subtitle: 'From one channel to seven, across the GCC, in 90 days',
    desc: 'A homegrown fashion brand approached us to break out of single-channel selling. We rebuilt their catalog architecture, plugged Amazon, Noon and Shopify into one operations stack, and engineered a content engine that converted browsers into loyalists across the GCC.',
    challenge: 'Single-channel dependency, high return rates and inconsistent brand storytelling across geographies.',
    solution: [
      'Cross-channel catalog with shared SKUs and per-market pricing',
      'Editorial content engine for product detail pages',
      'Returns analytics with size-guide automation by category',
      'Retail media playbook tailored to Ramadan and seasonal peaks',
    ],
    metrics: [
      { icon: TrendingUp, label: 'Marketplace GMV', value: '+218%' },
      { icon: ShoppingBag, label: 'Channels Live', value: '7' },
      { icon: Star, label: 'Return Rate', value: '−41%' },
    ],
  },
  {
    image: wellness,
    tag: 'Wellness · India',
    title: 'Building a D2C Wellness Brand into a Category Leader',
    subtitle: 'Top-3 in category within two quarters',
    desc: 'A founder-led supplements brand needed end-to-end ops, performance marketing and inventory intelligence. We unified fulfillment, automated reconciliation and ran AI-led ad campaigns — turning a niche label into a top-3 player in its category.',
    challenge: 'Stockouts at peak, weak repeat behavior, and unscalable manual ad ops eating into margin.',
    solution: [
      'Demand forecasting tied to ad calendar and influencer drops',
      'Reconciliation engine matching settlements with COGS and ads',
      'AI-generated creative variants tested weekly per platform',
      'Subscription program with loyalty tiers and gifting flows',
    ],
    metrics: [
      { icon: TrendingUp, label: 'Monthly Revenue', value: '6.2x' },
      { icon: ShoppingBag, label: 'Repeat Buyers', value: '47%' },
      { icon: Star, label: 'CAC Reduction', value: '−38%' },
    ],
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-20 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-[0.25em] uppercase">
              Featured Projects
            </span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-5">
            Show<span className="text-yellow-500">case</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real brands. Real numbers. Real growth, engineered end-to-end by 100 Miles.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32 max-w-7xl mx-auto">
          {studies.map((s, i) => {
            const reverse = i % 2 === 1
            return (
              <article
                key={s.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Phone visual */}
                <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-6 bg-gradient-to-tr from-yellow-400/20 via-yellow-400/5 to-transparent rounded-[3rem] blur-2xl" />
                  <div className="relative mx-auto max-w-sm">
                    <div className="relative rounded-[2.5rem] bg-foreground p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(250,204,21,0.35)] transition-all duration-500 ease-out">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
                      <div className="rounded-[2rem] overflow-hidden bg-background aspect-[3/4]">
                        <img
                          src={s.image}
                          alt={s.title}
                          width={1024}
                          height={1280}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={reverse ? 'lg:order-1' : ''}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-xs sm:text-sm font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider mb-5">
                    {s.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-yellow-600 dark:text-yellow-400 mb-4">
                    {s.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  {/* Challenge */}
                  <div className="mb-5 rounded-xl bg-card/50 clean-border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-yellow-500" />
                      <span className="text-[11px] font-black tracking-widest uppercase text-yellow-600 dark:text-yellow-400">
                        The Challenge
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6 rounded-xl bg-card/50 clean-border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <span className="text-[11px] font-black tracking-widest uppercase text-yellow-600 dark:text-yellow-400">
                        Our Solution
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {s.solution.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-7">
                    {s.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl bg-card clean-border p-3 sm:p-4 text-center hover:-translate-y-1 hover:border-yellow-400/50 gentle-animation"
                      >
                        <m.icon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mx-auto mb-2" />
                        <div className="text-lg sm:text-xl lg:text-2xl font-black text-foreground leading-none">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-yellow-400 text-black font-black text-sm sm:text-base hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-xl gentle-animation group"
                  >
                    Book a Call to Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
