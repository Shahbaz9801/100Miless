import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import { Check, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SolutionDetailProps {
  slug: string
  title: string
  eyebrow: string
  heroBg: string
  image: string
  metaDesc: string
  intro: string
  paragraphs: string[]
  features: { icon: LucideIcon; title: string; desc: string }[]
  outcomes: { value: string; label: string }[]
  bullets: string[]
}

export default function SolutionDetail(p: SolutionDetailProps) {
  return (
    <>
      <Helmet>
        <title>{p.title} | 100 Miles</title>
        <meta name="description" content={p.metaDesc} />
        <link rel="canonical" href={`/solutions/${p.slug}`} />
        <meta property="og:title" content={`${p.title} — 100 Miles`} />
        <meta property="og:description" content={p.metaDesc} />
      </Helmet>

      <PageHero
        bgImage={p.heroBg}
        breadcrumb={`Solutions / ${p.title}`}
        eyebrow={p.eyebrow}
        title={<>{p.title}</>}
        subtitle={p.intro}
      />

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-base text-muted-foreground leading-relaxed">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase">Overview</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-tight">Designed for brands that move fast.</h2>
            {p.paragraphs.map((para, i) => (<p key={i}>{para}</p>))}
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/85 bg-card border border-border rounded-xl p-4">
                  <Check className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border elevated-shadow">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {p.outcomes.map((o) => (
                <div key={o.label} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-lg lg:text-xl font-black text-yellow-500">{o.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{o.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 lg:py-24 bg-card/40">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">Everything you need, none of what you don't.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-background rounded-2xl border border-border p-6 hover:-translate-y-1 hover:border-yellow-300/40 gentle-animation">
                  <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-black mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10">
            <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-bold text-yellow-600 dark:text-yellow-400 hover:text-yellow-500">
              Back to all solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title={`Ready to roll out ${p.title}?`}
        subtitle="Book a free working session with our specialists. We'll map this module to your channels and pain points."
        primaryLabel="Book a Free Demo"
        primaryTo="/contact"
        secondaryLabel="Explore Other Solutions"
        secondaryTo="/solutions"
      />
    </>
  )
}
