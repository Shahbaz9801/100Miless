import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import {
  Check, Boxes, Warehouse, Truck, Megaphone, BarChart3, Wallet,
  ArrowRight, Zap, Shield, Layers, Globe, Clock, Workflow,
} from 'lucide-react'
// import { PlatformOrchestration } from '@/components/animations/PlatformOrchestration'
import heroBg from '../assets/heroes/solutions-hero.jpg'
import imgOrder from '../assets/modules/order-management.jpg'
import imgWms from '../assets/modules/wms.jpg'
import imgListings from '../assets/modules/listings.jpg'
import imgAnalytics from '../assets/modules/analytics.jpg'
import imgRecon from '../assets/modules/reconciliation.jpg'
import imgShip from '../assets/modules/shipping.jpg'

const modules = [
  {
    slug: 'order-management',
    icon: Boxes,
    image: imgOrder,
    title: 'Multichannel Order Management',
    summary:
      'One unified inbox for every marketplace, storefront and channel. Smart routing rules allocate orders to the right warehouse in seconds — no spreadsheets, no missed SLAs.',
    paragraph:
      'Whether you sell on Amazon, Noon, Shopify, WooCommerce or all of them at once, 100 Miles consolidates every order into a single intelligent workflow. Inventory holds, fraud checks and channel-specific rules run automatically so your team can focus on growth.',
    bullets: [
      'Centralize orders from 50+ marketplaces and D2C channels',
      'Rule-based routing across warehouses and 3PLs',
      'Real-time stock allocation and fraud checks',
      'Bulk cancellations, invoicing and shipping label printing',
    ],
    href: '/solutions/order-management',
  },
  {
    slug: 'wms',
    icon: Warehouse,
    image: imgWms,
    title: 'Warehouse Management (WMS)',
    summary:
      'A mobile-first warehouse engine built for fast-moving D2C and marketplace brands.',
    paragraph:
      'From inbound putaway to outbound dispatch, our WMS handles multi-warehouse, multi-zone operations with real-time visibility. Pickers, packers and managers all stay in sync on the same source of truth.',
    bullets: [
      'Multi-warehouse, multi-location stock in real time',
      'Mobile-first picking, packing and putaway flows',
      'Cycle counts, batch, expiry and serial number tracking',
      'Native 3PL integrations across the GCC, India and EU',
    ],
    href: '/solutions/wms',
  },
  {
    slug: 'listings',
    icon: Megaphone,
    image: imgListings,
    title: 'Listings & Catalog Intelligence',
    summary:
      'AI-enriched listings, channel-ready feeds and Buy Box automation that ships wins weekly.',
    paragraph:
      'Stop drowning in PIM exports. Our catalog engine enriches your product data with AI, generates marketplace-ready feeds and monitors listing health so you never lose visibility on Amazon, Noon or any major channel.',
    bullets: [
      'AI-enriched product data and channel-ready feeds',
      'Listing health monitoring with auto-suppression alerts',
      'Buy Box monitoring and re-pricing rules per marketplace',
      'Bulk translation and localization for cross-border launches',
    ],
  },
  {
    slug: 'analytics',
    icon: BarChart3,
    image: imgAnalytics,
    title: 'Analytics & Business Intelligence',
    summary:
      'Live dashboards for sales, ad spend, margin and stock — with per-SKU profitability that finally matches reality.',
    paragraph:
      'Every marketplace fee, FBA charge, ad cost and COGS line item rolls up into one true-profit view. Forecasting helps you plan inventory and ad budgets with confidence, not guesswork.',
    bullets: [
      'Unified dashboards for sales, ad spend, margin and stock',
      'Per-SKU profitability with fees, COGS and ad cost',
      'Custom reports + scheduled Slack and email digests',
      'Forecasting for inventory, ad budgets and revenue',
    ],
    href: '/solutions/analytics',
  },
  {
    slug: 'reconciliation',
    icon: Wallet,
    image: imgRecon,
    title: 'Payments & Reconciliation',
    summary:
      'Auto-match marketplace settlements with orders, returns and fees — and push it straight to your books.',
    paragraph:
      'Our reconciliation engine reads every settlement file, matches it against your orders, returns and commissions, and flags every discrepancy with full audit trails. Finance teams save days each month.',
    bullets: [
      'Auto-match settlements with orders and returns',
      'Commission, FBA, storage and ad fee breakdowns',
      'Dispute detection and chargeback workflows',
      'Exports to Tally, Zoho, QuickBooks and Xero',
    ],
    href: '/solutions/reconciliation',
  },
  {
    slug: 'shipping',
    icon: Truck,
    image: imgShip,
    title: 'Shipping & Fulfillment Suite',
    summary:
      'Multi-carrier shipping, branded tracking and RTO automation across every region you serve.',
    paragraph:
      'Rate-shop carriers in real time, print labels in bulk and give customers a branded tracking experience that drives loyalty — not support tickets.',
    bullets: [
      'Multi-carrier rate shopping and label printing',
      'Last-mile tracking with branded customer notifications',
      'Return-to-origin handling and refund automation',
      'SLA monitoring per channel and per region',
    ],
  },
]

const platformBenefits = [
  { icon: Layers, title: 'Modular by design', desc: 'Adopt one module or the full stack. Each integrates seamlessly with what you already use.' },
  { icon: Shield, title: 'Enterprise grade', desc: 'SOC2-aligned security, RBAC, audit logs and 99.9% uptime SLA.' },
  { icon: Globe, title: 'Global ready', desc: 'Multi-currency, multi-language and multi-region — out of the box.' },
  { icon: Zap, title: 'Built for speed', desc: 'Go live in weeks, not quarters. Our team migrates your data with zero downtime.' },
]

const implementationSteps = [
  { step: '01', icon: Workflow, title: 'Discovery & audit', desc: 'We map your current channels, ops and tech stack in a 60-minute working session.' },
  { step: '02', icon: Clock, title: 'Migration & setup', desc: 'Data, integrations and rules are configured by our team in 2–4 weeks.' },
  { step: '03', icon: Zap, title: 'Go-live & training', desc: 'Live training, runbooks and a dedicated CSM ensure your team adopts fast.' },
  { step: '04', icon: BarChart3, title: 'Optimize & scale', desc: 'Quarterly business reviews benchmark performance against your growth targets.' },
]

export default function SolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Ecommerce Solutions — Order, WMS, Listings & Analytics | 100 Miles</title>
        <meta name="description" content="One platform for every ecommerce workflow — multichannel orders, WMS, listings, analytics, reconciliation and shipping. Built for brands across UAE, KSA and India." />
        <link rel="canonical" href="/solutions" />
        <meta property="og:title" content="100 Miles Solutions" />
        <meta property="og:description" content="Unify orders, inventory, listings and analytics in one operating system for ecommerce." />
        <meta property="og:url" content="/solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHero
        bgImage={heroBg}
        breadcrumb="Solutions"
        eyebrow="Our Platform"
        title={<>One platform. <span className="text-yellow-300">Every workflow.</span></>}
        subtitle="From order to fulfillment, listings to reconciliation, the 100 Miles platform unifies every operation your brand needs to scale."
      />

      {/* <PlatformOrchestration /> */}

      {/* Module deep-dives — alternating image/text */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 lg:mb-20">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">Platform modules</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Built for operators. Priced for scale.</h2>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed">A closer look at every module, with the capabilities that actually move the number.</p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {modules.map((m, idx) => {
              const Icon = m.icon
              const reverse = idx % 2 === 1
              return (
                <motion.article
                  id={m.slug}
                  key={m.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="scroll-mt-28 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Image */}
                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-border elevated-shadow group">
                      <img
                        src={m.image}
                        alt={m.title}
                        loading="lazy"
                        width={1280}
                        height={896}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-yellow-300 text-[10px] font-bold tracking-[0.25em] uppercase border border-yellow-300/20">
                        Module {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-yellow-500" />
                      </div>
                      <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase">
                        {m.title.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-black text-foreground leading-tight">{m.title}</h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">{m.summary}</p>
                    <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">{m.paragraph}</p>

                    <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {m.href ? (
                        <Link to={m.href} className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-md hover:bg-yellow-300 gentle-animation text-sm">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : null}
                      <Link to="/contact" className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-5 py-2.5 rounded-md hover:bg-card gentle-animation text-sm">
                        Book a walkthrough
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why the platform */}
      <section className="py-20 lg:py-28 bg-card/40">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">Why 100 Miles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">An operating system that scales with you.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {platformBenefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-background rounded-2xl border border-border p-6 hover:-translate-y-1 hover:border-yellow-300/40 gentle-animation">
                  <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-black mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation timeline */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">Implementation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">From kickoff to go-live in weeks.</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">A repeatable, low-risk implementation framework — built from 200+ brand deployments.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
            {implementationSteps.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.step} className="relative bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-yellow-500">{s.step}</span>
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-black mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="Want to see the platform in action?"
        subtitle="Get a personalized walkthrough of every module mapped to your brand's current channels and pain points."
        primaryLabel="Request a Demo"
        primaryTo="/contact"
        secondaryLabel="See Integrations"
        secondaryTo="/integrations"
      />
    </>
  )
}
