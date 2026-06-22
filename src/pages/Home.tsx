import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/Hero'
import { TrustedBrands } from '../components/TrustedBrands'
import { About } from '../components/About'
import { WhatWeDo } from '../components/WhatWeDo'
import { Portfolio } from '../components/Portfolio'
import { StatsBanner } from '../components/StatsBanner'
import { MiddleEastMap } from '../components/MiddleEastMap'
import { WhyUs } from '../components/WhyUs'
import { Services } from '../components/Services'
import { ParallaxCTA } from '../components/ParallaxCTA'
import { Integrations } from '../components/Integrations'
import { Testimonials } from '../components/Testimonials'
import { CTASection } from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>100 Miles — AI-Driven Ecommerce Growth Platform for Brands</title>
        <meta name="description" content="100 Miles helps brands scale across Amazon, Noon, Shopify and 50+ marketplaces with AI-driven order management, WMS, retail media and end-to-end ecommerce ops." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="100 Miles — AI-Driven Ecommerce Growth Platform" />
        <meta property="og:description" content="Solutions that move you forward. Manage, scale and optimize ecommerce with AI." />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <TrustedBrands />
      <About />
      <WhatWeDo />
      <Portfolio />
      <StatsBanner />
      <MiddleEastMap />
      <WhyUs />
      <Services />
      <Integrations />
      <ParallaxCTA />
      <Testimonials />
      <CTASection />
    </>
  )
}
