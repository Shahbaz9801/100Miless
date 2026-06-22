'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, HelpCircle } from 'lucide-react'

export type FAQItem = { q: string; a: string }

const defaultFaqs: FAQItem[] = [
  {
    q: 'What exactly does 100 Miles do for an e-commerce brand?',
    a: "We are an end-to-end growth partner. We handle marketplace operations (Amazon, Noon, Shopify, WooCommerce), warehouse and fulfillment, listings and catalog, performance marketing, analytics, and reconciliation, all under one roof. You get a single team accountable for every metric.",
  },
  {
    q: 'How quickly can we see results after onboarding?',
    a: "Most brands see operational stability within the first 30 days, and measurable revenue lift between week 6 and week 12. The exact curve depends on your category, current channel mix, and starting baseline, we share a forecast in your kickoff plan.",
  },
  {
    q: 'Do you work with new brands or only established ones?',
    a: "Both. We have launch playbooks for D2C founders going live for the first time, and scale playbooks for established brands ready to expand into new marketplaces, geographies, or categories. The engagement is shaped around your stage, not ours.",
  },
  {
    q: 'Which marketplaces and platforms do you support?',
    a: "Amazon (UAE, KSA, IN, US, UK, EU), Noon, Shopify, WooCommerce, Magento, eBay, Walmart, Flipkart, and most major regional players. If you sell on it, we have most likely operated on it.",
  },
  {
    q: 'How is pricing structured?',
    a: "We offer fixed retainers, performance-linked fees, or hybrid models depending on scope. There are no hidden fees, no setup tax, and no long lock-ins. You will receive a transparent proposal after the discovery call.",
  },
  {
    q: 'Will I have visibility into what is being done day-to-day?',
    a: "Yes. Every brand gets a dedicated account lead, a shared Slack or WhatsApp channel, a live analytics dashboard, and a weekly performance review. You will always know where things stand, no chasing required.",
  },
  {
    q: 'What happens if I am not happy with the results?',
    a: "We work on rolling agreements, not annual lock-ins. If we are not delivering against the plan we agreed on, you can pause or exit with 30 days notice, no penalties. Our retention is built on results, not contracts.",
  },
]

interface FAQProps {
  items?: FAQItem[]
  title?: React.ReactNode
  subtitle?: string
  /** Tailwind background class for the section wrapper */
  bgClassName?: string
}

export function FAQ({
  items = defaultFaqs,
  title = (<>Frequently Asked <span className="text-yellow-500">Questions</span></>),
  subtitle = 'Everything you need to know before you talk to us, answered honestly.',
  bgClassName = 'bg-secondary',
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className={`relative py-20 lg:py-32 overflow-hidden ${bgClassName}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-[0.25em] uppercase">
              Got Questions?
            </span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight mb-5">
            {title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-background border-yellow-400/60 shadow-[0_20px_50px_-20px_rgba(250,204,21,0.25)]'
                    : 'bg-background/70 border-border hover:border-yellow-400/40 hover:bg-background'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-black transition-colors ${
                      isOpen ? 'bg-yellow-400 text-black' : 'bg-yellow-400/15 text-yellow-600 dark:text-yellow-400 group-hover:bg-yellow-400/25'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-sm sm:text-base lg:text-lg font-bold text-foreground leading-snug">
                    {f.q}
                  </span>
                  <Plus
                    className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-7 pb-6 pl-[4.5rem] sm:pl-[5.25rem] text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 lg:mt-20 max-w-3xl mx-auto">
          <div className="rounded-3xl bg-background clean-border elevated-shadow p-8 sm:p-10 text-center">
            <div className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-yellow-400/15 items-center justify-center mb-5">
              <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-500" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-3">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg mx-auto">
              Talk to a senior strategist, no sales script, no obligation. We will answer everything in plain language.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-yellow-400 text-black font-black text-sm sm:text-base hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-xl gentle-animation"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
