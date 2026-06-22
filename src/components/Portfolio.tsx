'use client'

import { Boxes, Warehouse, Truck, Megaphone, BarChart3, Wallet, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const solutions = [
  {
    icon: Boxes,
    slug: 'order-management',
    tag: 'Order Operations',
    title: 'Multichannel Order Management',
    headline: 'ONE DASHBOARD. EVERY CHANNEL.',
    desc: 'Centralize orders from Amazon, Noon, Shopify, WooCommerce and more. Track, allocate and fulfill from a single intelligent hub.',
  },
  {
    icon: Warehouse,
    slug: 'wms',
    tag: 'Inventory',
    title: 'Warehouse Management System (WMS)',
    headline: 'INVENTORY THAT MOVES AT YOUR PACE.',
    desc: 'Real-time stock visibility across warehouses, automated picking and putaway, and zero-error dispatch workflows.',
  },
  {
    icon: Truck,
    slug: 'shipping',
    tag: 'Fulfillment',
    title: 'Shipping & Fulfillment Suite',
    headline: 'SHIP SMARTER. DELIVER FASTER.',
    desc: 'Multi-carrier rate shopping, label printing, and last-mile tracking, all unified in one workflow.',
  },
  {
    icon: Megaphone,
    slug: 'listings',
    tag: 'Listings & Catalog',
    title: 'Listing & Catalog Intelligence',
    headline: 'WIN THE BUY BOX. EVERY TIME.',
    desc: 'AI-enriched product data, marketplace-ready feeds, and listing health monitoring across every channel you sell on.',
  },
  {
    icon: BarChart3,
    slug: 'analytics',
    tag: 'Insights',
    title: 'Analytics & Business Intelligence',
    headline: 'DECISIONS, IN REAL TIME.',
    desc: 'Live dashboards for sales, ad spend, profitability, and stock, turn data into your unfair advantage.',
  },
  {
    icon: Wallet,
    slug: 'reconciliation',
    tag: 'Reconciliation',
    title: 'Payments & Reconciliation',
    headline: 'PAYOUTS THAT ADD UP. ACCURATELY.',
    desc: 'Auto-match marketplace settlements with returns, commissions, and fees. Save hours every month.',
  },
]

export function Portfolio() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
              Our Solutions
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
            Solutions That <span className="text-yellow-500">Scale</span>
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Move faster. Solve smarter. Grow without limits. Every solution is engineered for
            agility, precision, and measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {solutions.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.title}
                to={`/solutions#${s.slug}`}
                aria-label={`Learn more about ${s.title}`}
                className="group relative bg-card clean-border rounded-2xl p-7 lg:p-8 elevated-shadow hover:-translate-y-1 hover:border-yellow-400/40 gentle-animation overflow-hidden block"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-yellow-500" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-yellow-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                  {s.tag}
                </span>
                <h3 className="text-xl lg:text-2xl font-black text-foreground mt-2 mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm font-bold text-yellow-600 dark:text-yellow-400 tracking-wide mb-3">
                  {s.headline}
                </p>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 gentle-animation" />
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 bg-foreground text-background font-bold px-8 py-4 rounded-md hover:bg-yellow-400 hover:text-black hover:-translate-y-0.5 hover:shadow-lg gentle-animation"
          >
            Explore All Solutions
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
