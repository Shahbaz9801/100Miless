import { Helmet } from 'react-helmet-async'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import { FAQ, type FAQItem } from '../components/FAQ'
import heroBg from '../assets/heroes/faq-hero.jpg'

const general: FAQItem[] = [
  { q: 'What exactly does 100 Miles do for an e-commerce brand?', a: 'We are an end-to-end growth partner — marketplace operations, warehouse and fulfillment, listings, performance marketing, analytics and reconciliation, all under one roof.' },
  { q: 'How quickly can we see results after onboarding?', a: 'Most brands see operational stability within 30 days and measurable revenue lift between week 6 and week 12. Your kickoff plan includes a tailored forecast.' },
  { q: 'Which marketplaces and platforms do you support?', a: 'Amazon (UAE, KSA, IN, US, UK, EU), Noon, Shopify, WooCommerce, Magento, eBay, Walmart, Flipkart and most major regional players.' },
  { q: 'Do you work with new brands or only established ones?', a: 'Both. We have launch playbooks for first-time D2C founders and scale playbooks for brands expanding into new geographies or channels.' },
  { q: 'How is pricing structured?', a: 'Fixed retainers, performance-linked fees, or hybrid models depending on scope. No hidden fees, no setup tax, no long lock-ins.' },
  { q: 'What happens if results miss the plan?', a: 'We work on rolling agreements. If we are not delivering against the plan, you can pause or exit with 30 days notice — no penalties.' },
]

const about: FAQItem[] = [
  { q: 'Where are 100 Miles offices located?', a: 'We operate from Dubai (HQ), Riyadh, New Delhi and Dublin — serving brands across 30+ markets.' },
  { q: 'How big is the team?', a: '120+ operators, strategists, engineers and creatives across our four offices.' },
  { q: 'Who founded 100 Miles?', a: 'A team of ecommerce practitioners who scaled brands inside Amazon, Noon and large GCC retailers before starting the company in 2014.' },
  { q: 'What categories do you specialize in?', a: 'Beauty, fashion, wellness, home and lifestyle — though our operating system supports any DTC or marketplace category.' },
  { q: 'Are you hiring?', a: 'Often. Open roles across product, engineering, retail media and ops are listed on our careers page.' },
  { q: 'Do you take equity instead of fees?', a: 'For a select group of high-conviction brands, yes — we offer hybrid retainer + equity engagements.' },
]

const platform: FAQItem[] = [
  { q: 'How long does it take to go live on the platform?', a: 'Most brands are live on order, inventory and listings modules within 14 days. Full multi-warehouse and reconciliation rollouts typically complete in 30–45 days.' },
  { q: 'Can we use only one module — say WMS — without the rest?', a: 'Yes. Every module is independently usable. You can start with WMS or Listings and add modules as you grow.' },
  { q: 'Do you support multi-currency and multi-region operations?', a: 'Yes. The platform supports AED, SAR, INR, USD, EUR, GBP and more, with per-region price lists, tax rules and warehouses.' },
  { q: 'Will my existing data migrate cleanly?', a: 'Our onboarding team handles SKU, order and customer migrations from Shopify, WooCommerce, Magento, Excel and most legacy ERPs.' },
  { q: 'Is there an API for custom workflows?', a: 'Yes. REST and webhook APIs are available for every module — orders, inventory, listings, returns and reconciliation events.' },
]

const services: FAQItem[] = [
  { q: 'What does a typical engagement look like?', a: 'A dedicated pod (strategist, channel manager, creative, analyst) works as an extension of your team with weekly stand-ups, shared dashboards and a 90-day rolling roadmap.' },
  { q: 'Can you run paid ads as well as marketplace ops?', a: 'Yes. Retail media (Amazon, Noon, TikTok, Meta, Google) and marketplace operations are run by the same pod so spend and listings stay aligned.' },
  { q: 'Do you have minimum revenue requirements?', a: 'No hard minimum, but services are best suited to brands doing AED 1M+ annually or ones with funded launches lined up.' },
  { q: 'How do you handle creative production?', a: 'Our in-house brand studio ships channel-ready visuals, lifestyle shoots, UGC briefs and ad variants weekly — all governed by your brand guidelines.' },
]

const integrations: FAQItem[] = [
  { q: 'How quickly can you add a new integration?', a: 'Most marketplaces, shipping and ERP integrations go live in 24–72 hours. Custom or headless integrations typically take 2–3 weeks.' },
  { q: 'Is my data safe and isolated from other brands?', a: 'Yes. Every brand sits in an isolated tenant. Credentials are encrypted at rest, access is role-based, and infrastructure follows SOC2-aligned controls.' },
  { q: 'Do you charge per integration?', a: 'No. Every native integration is included in your platform plan — no per-connector surcharges.' },
]

const caseStudies: FAQItem[] = [
  { q: 'Are the numbers in your case studies independently verified?', a: 'Yes — every metric is sourced from the brand\'s marketplace seller central, ad platforms or Shopify analytics and reviewed jointly before publication.' },
  { q: 'Can I speak with a reference customer?', a: 'After the discovery call we are happy to introduce you to a brand in a similar category and stage as yours.' },
  { q: 'Why are some brand names redacted?', a: 'Several brands operate under NDA, especially those in competitive categories — we share numbers and approach without revealing identity.' },
  { q: 'How long did each engagement take to show results?', a: 'Operational stability typically lands in 30 days; the headline revenue lifts shown were measured between 90 and 180 days.' },
]

const contact: FAQItem[] = [
  { q: 'What happens after I submit the form?', a: 'A senior strategist reviews your brief and replies within one business day with a tailored next step — usually a 30-minute discovery call.' },
  { q: 'Is the discovery call really free?', a: 'Yes. The discovery call, written audit and proposal are all free. You only pay once we sign a scoped engagement.' },
  { q: 'Do you sign NDAs before discovery calls?', a: 'Absolutely. We can countersign your NDA, or send ours within an hour of request.' },
  { q: 'How fast can we get a proposal?', a: 'Most proposals are delivered within 48 hours of the discovery call.' },
]

const sections = [
  { id: 'general', label: 'General', items: general, title: <>General <span className="text-yellow-500">Questions</span></> },
  { id: 'about', label: 'About 100 Miles', items: about, title: <>About <span className="text-yellow-500">100 Miles</span></> },
  { id: 'platform', label: 'Platform & Solutions', items: platform, title: <>Platform <span className="text-yellow-500">& Solutions</span></> },
  { id: 'services', label: 'Services', items: services, title: <>Services <span className="text-yellow-500">Questions</span></> },
  { id: 'integrations', label: 'Integrations', items: integrations, title: <>Integration <span className="text-yellow-500">Questions</span></> },
  { id: 'case-studies', label: 'Case Studies', items: caseStudies, title: <>Case Study <span className="text-yellow-500">Questions</span></> },
  { id: 'contact', label: 'Contact & Onboarding', items: contact, title: <>Contact <span className="text-yellow-500">& Onboarding</span></> },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...general, ...about, ...platform, ...services, ...integrations, ...caseStudies, ...contact].map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>FAQ — Everything You Want to Ask 100 Miles</title>
        <meta name="description" content="Answers about 100 Miles services, platform modules, integrations, pricing, onboarding and case studies — all in one place." />
        <link rel="canonical" href="/faq" />
        <meta property="og:title" content="100 Miles FAQ" />
        <meta property="og:description" content="Every question brands ask, answered honestly." />
        <meta property="og:url" content="/faq" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <PageHero
        bgImage={heroBg}
        breadcrumb="FAQ"
        eyebrow="Knowledge Base"
        title={<>Everything you want to <span className="text-yellow-300">ask us.</span></>}
        subtitle="A single place for every question brands ask us — from pricing and onboarding to platform internals and case studies."
      />

      {/* Sticky in-page nav */}
      <section className="sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-xl border-y border-border">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <nav className="flex gap-3 sm:gap-5 overflow-x-auto py-3 scrollbar-none">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 text-xs sm:text-sm font-bold tracking-wide uppercase text-muted-foreground hover:text-yellow-500 gentle-animation px-3 py-1.5 rounded-full border border-border hover:border-yellow-400"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {sections.map((s, i) => (
        <div key={s.id} id={s.id} className="scroll-mt-36">
          <FAQ
            items={s.items}
            title={s.title}
            subtitle=""
            bgClassName={i % 2 ? 'bg-secondary' : 'bg-background'}
          />
        </div>
      ))}

      <CTABand
        title="Still have questions?"
        subtitle="Talk to a senior strategist — we reply within one business day."
        primaryLabel="Talk to Us"
        primaryTo="/contact"
        secondaryLabel="See Case Studies"
        secondaryTo="/case-studies"
      />
    </>
  )
}
