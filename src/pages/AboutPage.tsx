import { Helmet } from 'react-helmet-async'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import { About } from '../components/About'
import { Team } from '../components/Team'
import { Awards } from '../components/Awards'
import { Globe, Heart, Rocket, Shield, Users, TrendingUp } from 'lucide-react'
import heroBg from '../assets/heroes/about-hero.jpg'

const values = [
  { icon: Rocket, title: 'Move Fast', desc: 'Brands win by shipping. We are obsessed with velocity, without breaking quality.' },
  { icon: Heart, title: 'Customer Obsessed', desc: 'Every decision starts with the brand we serve. If it does not help them grow, we kill it.' },
  { icon: Shield, title: 'Operate With Integrity', desc: 'Transparent reporting, honest forecasts, and zero hidden fees. Trust is the only moat.' },
  { icon: Users, title: 'Win As A Team', desc: 'Strategists, engineers and operators work as one pod, accountable to the same number.' },
  { icon: Globe, title: 'Think Globally', desc: 'We operate across four countries and ship for brands in 30+ markets. Local nuance is in our DNA.' },
  { icon: TrendingUp, title: 'Outcome > Output', desc: 'We measure success in revenue, margin and retention, not slides or hours billed.' },
]

const milestones = [
  { year: '2014', title: 'Founded in Dubai', desc: 'Started as a small ops team helping local sellers win on Amazon.ae.' },
  { year: '2017', title: 'Expanded across the GCC', desc: 'Opened Riyadh office. First brand crossed AED 10M in marketplace GMV.' },
  { year: '2019', title: 'Launched proprietary platform', desc: 'Built the first version of the 100 Miles operating system to unify channels.' },
  { year: '2022', title: 'Crossed 200 brand partners', desc: 'Opened India operations. Added retail media and creative studio.' },
  { year: '2024', title: 'AI-first platform release', desc: 'Re-architected the stack around AI for listings, ads and inventory intelligence.' },
  { year: '2026', title: 'Operating in 4 countries', desc: 'UAE, KSA, India and Ireland — serving brands across 30+ markets globally.' },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About 100 Miles — Built by Operators, for Operators</title>
        <meta name="description" content="100 Miles is a global ecommerce accelerator with offices in UAE, KSA, India and Ireland. Learn our story, mission and the people behind the work." />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About 100 Miles" />
        <meta property="og:description" content="A decade of building, shipping, and scaling ecommerce brands across the Middle East and beyond." />
        <meta property="og:url" content="/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHero
        bgImage={heroBg}
        breadcrumb="About"
        eyebrow="Our Story"
        title={<>Built by <span className="text-yellow-300">Operators</span>, For Operators.</>}
        subtitle="100 Miles was founded by ecommerce practitioners who got tired of fragmented tools and half-built playbooks. Today we are a global team building the operating system that helps brands ship, scale and win across every channel."
      />

      <About />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">What we stand for</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Values that shape every decision.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card clean-border rounded-2xl p-6 lg:p-7 elevated-shadow hover:-translate-y-1 gentle-animation">
                <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-lg lg:text-xl font-black text-foreground mb-2">{v.title}</h3>
                <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">A decade of building, shipping, scaling.</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400/30 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative grid sm:grid-cols-2 gap-4 sm:gap-10 items-start ${i % 2 ? 'sm:[&>*:first-child]:order-2' : ''}`}>
                  <div className={`pl-16 sm:pl-0 ${i % 2 ? 'sm:text-left' : 'sm:text-right'}`}>
                    <div className="text-2xl sm:text-3xl font-black text-yellow-500">{m.year}</div>
                    <h3 className="text-lg sm:text-xl font-black text-foreground mt-1">{m.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="hidden sm:block" />
                  <div className="absolute left-6 sm:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400 ring-4 ring-yellow-400/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Awards />
      <CTABand
        title="Want to work with us?"
        subtitle="Whether you are a brand looking for a growth partner, or an operator who wants to build with us — we would love to talk."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="See Our Work"
        secondaryTo="/case-studies"
      />
    </>
  )
}
