import { Helmet } from 'react-helmet-async'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import { Contact } from '../components/Contact'
import { Clock, MessageCircle, Globe } from 'lucide-react'
import heroBg from '../assets/heroes/contact-hero.jpg'

const helpers = [
  { icon: Clock, title: 'Response within 24h', desc: 'Every inbound message gets a reply within one business day.' },
  { icon: MessageCircle, title: 'No sales script', desc: 'You will talk to a senior strategist, not a junior SDR.' },
  { icon: Globe, title: '4 offices, 1 team', desc: 'Coverage across UAE, KSA, India and Ireland — local language, local nuance.' },
]

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact 100 Miles — Talk to a Senior Ecommerce Strategist</title>
        <meta name="description" content="Tell us about your brand and we will respond within one business day with a tailored next step. Offices in Dubai, Riyadh, New Delhi and Dublin." />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact 100 Miles" />
        <meta property="og:description" content="Free strategy session with a senior ecommerce strategist. Response within 24h." />
        <meta property="og:url" content="/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHero
        bgImage={heroBg}
        breadcrumb="Contact"
        eyebrow="Let's talk"
        title={<>Tell us about your brand. <span className="text-yellow-300">We'll do the rest.</span></>}
        subtitle="Fill in the form below or reach out directly — a senior strategist will respond within one business day with a tailored next step."
      />

      <section className="py-12 lg:py-14 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {helpers.map((h) => (
              <div key={h.title} className="bg-card clean-border rounded-2xl p-5 lg:p-6 elevated-shadow">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-3">
                  <h.icon className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-base lg:text-lg font-black text-foreground mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <CTABand
        title="Have a quick question first?"
        subtitle="Most pricing, onboarding and integration questions are answered on our FAQ page — give it a quick scan."
        primaryLabel="Read FAQs"
        primaryTo="/faq"
        secondaryLabel="See Case Studies"
        secondaryTo="/case-studies"
      />
    </>
  )
}
