import { Helmet } from 'react-helmet-async'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import { Services } from '../components/Services'
import { WhyUs } from '../components/WhyUs'
import { ServiceFlow } from '../components/animations/ServiceFlow'
import { CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/heroes/services-hero.jpg'

const process = [
  { step: '01', title: 'Discovery & Audit', desc: 'A 60-minute deep dive into your channels, ops, ad spend and tech stack. We deliver a written audit within 5 business days.' },
  { step: '02', title: 'Strategy & Roadmap', desc: 'A 90-day plan with prioritized initiatives, owners, milestones and a forecasted impact on revenue and margin.' },
  { step: '03', title: 'Launch & Activation', desc: 'Our pod runs onboarding, integrations and the first wave of optimization in parallel — you start seeing wins in weeks, not quarters.' },
  { step: '04', title: 'Optimize & Scale', desc: 'Weekly performance reviews, monthly business reviews, and continuous experimentation across channels, listings and ads.' },
]

const deliverables = [
  { title: 'Marketplace Growth', items: ['Listing audit & rewrite', 'Buy Box & Brand Store setup', 'Sponsored Ads strategy', 'Inventory & FBA planning', 'Weekly performance reports'] },
  { title: 'Retail Media & Ads', items: ['Cross-channel campaign planning', 'Meta, Google, TikTok execution', 'Creative variants & A/B tests', 'Attribution & ROAS dashboards', 'Bid & budget automation'] },
  { title: 'Brand & Creative', items: ['Positioning & messaging', 'Visual identity & guidelines', 'Channel-ready creative library', 'Lifestyle & product photography', 'UGC & influencer toolkits'] },
  { title: 'Analytics Consulting', items: ['Custom KPI dashboards', 'SKU-level profitability', 'Cohort & retention reports', 'Forecasting models', 'Monthly insight memos'] },
]

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Marketplace, Retail Media, Creative & Analytics | 100 Miles</title>
        <meta name="description" content="A senior pod for marketplace growth, retail media, brand creative and analytics — working as an extension of your team to move the number that matters." />
        <link rel="canonical" href="/services" />
        <meta property="og:title" content="100 Miles Services" />
        <meta property="og:description" content="Expert-led ecommerce services for brands ready to scale." />
        <meta property="og:url" content="/services" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHero
        bgImage={heroBg}
        breadcrumb="Services"
        eyebrow="Expert-Led Pods"
        title={<>Services that <span className="text-yellow-300">move the number.</span></>}
        subtitle="A senior pod of operators, marketers and engineers becomes an extension of your team — owning channels, campaigns and the metrics that matter."
      />

      <Services />
      <ServiceFlow />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">How we work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">A 4-step engagement, built around outcomes.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {process.map((p) => (
              <div key={p.step} className="relative bg-background clean-border rounded-2xl p-6 lg:p-7 elevated-shadow hover:-translate-y-1 gentle-animation">
                <div className="text-5xl font-black text-yellow-400/20 leading-none mb-3">{p.step}</div>
                <h3 className="text-lg lg:text-xl font-black text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">What you get</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Deliverables you can hold us to.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl">
            {deliverables.map((d) => (
              <div key={d.title} className="bg-card clean-border rounded-2xl p-6 lg:p-7 elevated-shadow">
                <h3 className="text-xl font-black text-foreground mb-4">{d.title}</h3>
                <ul className="space-y-2.5">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm lg:text-[15px] text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-1 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />

      <CTABand
        title="Need a pod that owns the number?"
        subtitle="Tell us your goal and current channel mix — we'll send a tailored proposal within 48 hours."
        primaryLabel="Get Your Proposal"
        primaryTo="/contact"
        secondaryLabel="Explore Integrations"
        secondaryTo="/integrations"
      />
    </>
  )
}
