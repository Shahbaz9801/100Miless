'use client'

import { ShoppingBag, Store, ShoppingCart, Package, Sparkles, Megaphone } from 'lucide-react'

const integrations = [
  {
    icon: ShoppingBag,
    name: 'Shopify',
    headline: 'REAL-TIME SYNC FOR SHOPIFY STORES',
    desc: 'Keep orders, returns, and inventory perfectly aligned with instant two-way syncing.',
  },
  {
    icon: Package,
    name: 'Amazon',
    headline: 'AUTOMATE YOUR AMAZON GROWTH',
    desc: 'Manage listings, prices, and stock automatically, always competitive, always up-to-date.',
  },
  {
    icon: ShoppingCart,
    name: 'eBay',
    headline: 'CENTRALIZED CONTROL FOR EBAY',
    desc: 'Consolidate eBay orders and inventory in one dashboard for streamlined fulfillment.',
  },
  {
    icon: Store,
    name: 'WooCommerce',
    headline: 'SEAMLESS WOOCOMMERCE OPERATIONS',
    desc: 'Sync your catalog and gain full visibility into fulfillment for smoother workflows.',
  },
  {
    icon: Sparkles,
    name: 'Noon & Namshi',
    headline: 'NATIVE GCC MARKETPLACE SUPPORT',
    desc: 'Direct integrations with the leading Middle East marketplaces, listings, orders, payouts.',
  },
  {
    icon: Megaphone,
    name: 'Google · Meta · TikTok',
    headline: 'SMARTER AD PERFORMANCE',
    desc: 'Connect campaigns with conversion tracking and real-time inventory data.',
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32 overflow-hidden"
             style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #141414 100%)' }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
             backgroundSize: '3px 3px',
           }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-yellow-200/80 tracking-widest uppercase">
              Integrations
            </span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 text-white">
            Unify Your Commerce. <span className="text-yellow-300">One Integration at a Time.</span>
          </h2>
          <p className="text-base lg:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Connect every channel. Simplify every workflow. 50+ native integrations and growing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {integrations.map((it) => {
            const Icon = it.icon
            return (
              <article
                key={it.name}
                className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/[0.07] hover:border-yellow-300/30 hover:-translate-y-1 gentle-animation"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-400/15 border border-yellow-300/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-yellow-300" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">{it.name}</h3>
                <p className="text-xs font-bold text-yellow-300/90 tracking-widest mb-3">
                  {it.headline}
                </p>
                <p className="text-white/70 leading-relaxed text-[15px]">{it.desc}</p>
              </article>
            )
          })}
        </div>

        <div className="text-center mt-14">
          <p className="text-white/60 text-sm mb-5">
            Ready to streamline operations and unlock seamless growth?
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 rounded-md hover:bg-yellow-300 gentle-animation"
          >
            Book a Free Demo
          </a>
        </div>
      </div>
    </section>
  )
}
