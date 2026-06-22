'use client'

import { motion } from 'framer-motion'
import logo from '@/assets/100miles-logo.png' // ← apna logo path yahan daalo

// ── Data ──────────────────────────────────────────────
const RINGS = [
  {
    items: [
      { label: 'Amazon',      short: 'AMZ' },
      { label: 'Noon',        short: 'NON' },
      { label: 'Shopify',     short: 'SHO' },
      { label: 'WooCommerce', short: 'WOO' },
      { label: 'Magento',     short: 'MGN' },
    ],
    radius: 100, duration: 42, reverse: false,
    pill: 'bg-yellow-400/10 border-yellow-400/35 text-yellow-200',
    ic:   'bg-yellow-400/20 text-yellow-400',
  },
  {
    items: [
      { label: 'Aramex',     short: 'ARX' },
      { label: 'DHL',        short: 'DHL' },
      { label: 'SMSA',       short: 'SMS' },
      { label: 'Shiprocket', short: 'SPR' },
      { label: 'Delhivery',  short: 'DLV' },
      { label: 'FedEx',      short: 'FDX' },
    ],
    radius: 168, duration: 68, reverse: true,
    pill: 'bg-blue-400/8 border-blue-400/30 text-blue-200',
    ic:   'bg-blue-400/18 text-blue-400',
  },
  {
    items: [
      { label: 'Meta Ads',   short: 'MTA' },
      { label: 'Google Ads', short: 'GGL' },
      { label: 'TikTok',     short: 'TIK' },
      { label: 'Zoho',       short: 'ZHO' },
      { label: 'SAP',        short: 'SAP' },
      { label: 'QuickBooks', short: 'QB'  },
      { label: 'Slack',      short: 'SLK' },
    ],
    radius: 236, duration: 100, reverse: false,
    pill: 'bg-violet-400/8 border-violet-400/28 text-violet-200',
    ic:   'bg-violet-400/18 text-violet-400',
  },
]

const STATS = [
  { n: '50+',  l: 'Connectors'  },
  { n: '2-way',l: 'Real-time sync' },
  { n: '<5s',  l: 'Sync speed'  },
  { n: 'SOC2', l: 'Secured'     },
]

// ── Ring Component ─────────────────────────────────────
function Ring({ items, radius, duration, reverse, pill, ic }: (typeof RINGS)[0]) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{ transformOrigin: 'center' }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {items.map((item, i) => {
        const angle = ((360 / items.length) * i - 90) * (Math.PI / 180)
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return (
          <div
            key={item.label}
            className="absolute top-1/2 left-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <motion.div
              style={{ transformOrigin: 'center' }}
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: 'linear' }}
            >
              <div className={`
                flex items-center gap-1.5 pl-1.5 pr-3 py-1.5
                rounded-full border whitespace-nowrap cursor-default
                text-[10px] sm:text-[11px] font-bold
                hover:scale-110 transition-transform duration-200
                ${pill}
              `}>
                <span className={`
                  w-[18px] h-[18px] rounded-[5px] flex items-center justify-center
                  text-[7.5px] font-black flex-shrink-0 ${ic}
                `}>
                  {item.short.slice(0, 3)}
                </span>
                {item.label}
              </div>
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}

// ── Main Component ─────────────────────────────────────
export function IntegrationHub() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#07070e] overflow-hidden">

      {/* Grid + glow background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 35% at 50% 28%, rgba(250,204,21,.06) 0%, transparent 70%),
            linear-gradient(rgba(250,204,21,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,204,21,.025) 1px, transparent 1px)
          `,
          backgroundSize: 'auto, 28px 28px, 28px 28px',
        }}
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[.22em] uppercase text-yellow-400 bg-yellow-400/8 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Live Integration Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Your entire stack.<br />
            <span className="text-yellow-300">One always-on hub.</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 leading-relaxed">
            Marketplaces, shipping, ads & finance — all connected,
            two-way, syncing every few seconds.
          </p>
        </motion.div>

        {/* Orbit stage */}
        <div className="relative mx-auto w-full max-w-[560px] aspect-square">

          {/* Orbit rings (SVG) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 520" fill="none">
            <circle cx="260" cy="260" r="100" stroke="rgba(250,204,21,.15)" strokeWidth=".8" strokeDasharray="3 7"/>
            <circle cx="260" cy="260" r="168" stroke="rgba(96,165,250,.12)"  strokeWidth=".8" strokeDasharray="3 7"/>
            <circle cx="260" cy="260" r="236" stroke="rgba(167,139,250,.1)"  strokeWidth=".8" strokeDasharray="3 7"/>
          </svg>

          {/* Animated rings */}
          {RINGS.map((r, i) => <Ring key={i} {...r} />)}

          {/* Center hub with logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: 'backOut', delay: 0.15 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Ping rings */}
                <span className="absolute inset-[-8px] rounded-full border border-yellow-400/50 animate-ping opacity-40" />
                <span className="absolute inset-[-8px] rounded-full border border-yellow-400/25 animate-ping opacity-25"
                  style={{ animationDelay: '0.9s' }} />

                {/* Logo circle */}
                <div className="w-[110px] h-[110px] sm:w-[124px] sm:h-[124px] rounded-full bg-[#0e0e18] border-2 border-yellow-400/45 flex items-center justify-center
                  shadow-[0_0_0_6px_rgba(250,204,21,.05),0_0_0_14px_rgba(250,204,21,.025)]">
                  <img
                    src={logo}
                    alt="100 Miles"
                    className="w-[78px] sm:w-[88px] h-auto object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {STATS.map((s) => (
            <div key={s.l} className="bg-white/[.04] border border-white/[.07] rounded-xl px-5 py-3 text-center">
              <div className="text-lg font-black text-yellow-400 leading-none">{s.n}</div>
              <div className="text-[9.5px] text-white/35 mt-1 tracking-widest uppercase">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Region trust line */}
        <div className="flex items-center gap-3 mt-6 px-4">
          <div className="flex-1 h-px bg-white/[.06]" />
          <span className="text-[10px] text-white/22 tracking-widest uppercase whitespace-nowrap">
            Trusted across UAE · KSA · India · US
          </span>
          <div className="flex-1 h-px bg-white/[.06]" />
        </div>

      </div>
    </section>
  )
}