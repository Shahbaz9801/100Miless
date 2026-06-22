import { Helmet } from 'react-helmet-async'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import { CaseStudies } from '../components/CaseStudies'
import { Testimonials } from '../components/Testimonials'
import heroBg from '../assets/heroes/case-studies-hero.jpg'

const highlights = [
  { value: '+312%', label: 'Avg. revenue growth across featured brands' },
  { value: '6.2x', label: 'Best monthly revenue multiple delivered' },
  { value: '−38%', label: 'Avg. reduction in customer acquisition cost' },
  { value: '90 days', label: 'Median time to first measurable scale win' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies — Real Brands, Real Growth | 100 Miles</title>
        <meta name="description" content="See how 100 Miles helped beauty, fashion and wellness brands across UAE, GCC and India scale revenue, expand channels and reduce CAC with AI-driven operations." />
        <link rel="canonical" href="/case-studies" />
        <meta property="og:title" content="100 Miles Case Studies" />
        <meta property="og:description" content="Real brands, real numbers — the proof of work behind 100 Miles." />
        <meta property="og:url" content="/case-studies" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHero
        bgImage={heroBg}
        breadcrumb="Case Studies"
        eyebrow="Proof of Work"
        title={<>Real brands. <span className="text-yellow-300">Real numbers.</span> Real growth.</>}
        subtitle="A look at brands we have partnered with across beauty, fashion and wellness — what we built, what we shipped, and what it moved."
      />

      <section className="py-12 lg:py-16 bg-card/30">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {highlights.map((h) => (
              <div key={h.label} className="text-center bg-background clean-border rounded-2xl p-6 elevated-shadow">
                <div className="text-3xl lg:text-4xl font-black text-yellow-500 leading-none">{h.value}</div>
                <div className="text-xs lg:text-sm text-muted-foreground mt-2 leading-snug">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />
      <Testimonials />
      <CTABand
        title="Want to be our next case study?"
        subtitle="Tell us about your brand and where you want to be in 12 months. We will tell you exactly how to get there."
        primaryLabel="Start the Conversation"
        primaryTo="/contact"
        secondaryLabel="Read FAQs"
        secondaryTo="/faq"
      />
    </>
  )
}
