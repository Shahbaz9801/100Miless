import { Helmet } from 'react-helmet-async'
import { PageHero } from '../components/shared/PageHero'
import { CTABand } from '../components/shared/CTABand'
import { Integrations } from '../components/Integrations'
import { IntegrationHub } from '../components/animations/IntegrationHub'
import { Plug, RefreshCw, ShieldCheck, Zap } from 'lucide-react'
import heroBg from '../assets/heroes/integrations-hero.jpg'

const how = [
  { icon: Plug, title: 'Connect in minutes', desc: 'OAuth or API key. No code, no IT tickets, no integration partners.' },
  { icon: RefreshCw, title: 'Real-time sync', desc: 'Two-way syncing for orders, inventory, prices and returns — every few seconds.' },
  { icon: ShieldCheck, title: 'Secure by default', desc: 'SOC2-aligned controls, encrypted credentials, granular role-based access.' },
  { icon: Zap, title: 'Built to scale', desc: 'Built for brands shipping 100 to 100,000+ orders a day across multiple regions.' },
]

const categories = [
  { title: 'Marketplaces', items: ['Amazon (UAE, KSA, IN, US, UK, EU)', 'Noon', 'Namshi', 'Flipkart', 'Walmart', 'eBay', 'Trendyol', 'Carrefour', 'Lulu', 'Sharaf DG'] },
  { title: 'Storefronts', items: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Salla', 'Zid', 'Custom Headless'] },
  { title: 'Advertising', items: ['Amazon Ads', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'Snapchat Ads', 'Noon Ads'] },
  { title: 'Shipping & 3PL', items: ['Aramex', 'DHL', 'FedEx', 'UPS', 'SMSA', 'Naqel', 'Delhivery', 'Shiprocket', 'ShipStation'] },
  { title: 'Accounting & ERP', items: ['Zoho Books', 'Tally', 'QuickBooks', 'Xero', 'SAP', 'Odoo', 'Microsoft Dynamics'] },
  { title: 'Communication', items: ['Slack', 'WhatsApp Business', 'Email (SMTP)', 'Webhooks', 'Zapier', 'Make'] },
]

 export default function IntegrationsPage() {
  return (
    <>
      <Helmet>
        <title>Integrations — 50+ Native Connectors | 100 Miles</title>
        <meta name="description" content="Connect 100 Miles to every marketplace, storefront, ad platform, shipping partner and ERP your brand uses. 50+ native integrations, live in minutes." />
        <link rel="canonical" href="/integrations" />
        <meta property="og:title" content="100 Miles Integrations" />
        <meta property="og:description" content="50+ native integrations across marketplaces, storefronts, ads, shipping and ERPs." />
        <meta property="og:url" content="/integrations" />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHero
        bgImage={heroBg}
        breadcrumb="Integrations"
        eyebrow="One Stack. Every Tool."
        title={<>Integrations that <span className="text-yellow-300">keep up</span> with your stack.</>}
        subtitle="50+ native connectors across marketplaces, storefronts, advertising, shipping and finance — secure, two-way, real-time."
      />

      <Integrations />
      <IntegrationHub />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">How integrations work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Plug in. Stay in sync. Sleep better.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {how.map((h) => (
              <div key={h.title} className="bg-background clean-border rounded-2xl p-6 elevated-shadow hover:-translate-y-1 gentle-animation">
                <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
                  <h.icon className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold text-yellow-500 tracking-widest uppercase mb-3">Full Directory</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Everything we natively connect with.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {categories.map((c) => (
              <div key={c.title} className="bg-card clean-border rounded-2xl p-6 elevated-shadow hover:-translate-y-1 gentle-animation">
                <h3 className="text-lg font-black text-foreground mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Need a connector you don't see?"
        subtitle="Tell us your stack — we ship custom integrations in 2–3 weeks for partner brands."
        primaryLabel="Request Integration"
        primaryTo="/contact"
        secondaryLabel="See Our Services"
        secondaryTo="/services"
      />
    </>
  )
 }
