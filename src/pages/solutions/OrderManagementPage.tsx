import SolutionDetail from '../SolutionDetail'
import heroBg from '@/assets/heroes/solutions-hero.jpg'
import image from '@/assets/modules/order-management.jpg'
import { Boxes, Shuffle, ShieldCheck, Bell, RefreshCw, Receipt } from 'lucide-react'

export default function OrderManagementPage() {
  return (
    <SolutionDetail
      slug="order-management"
      eyebrow="Order Operations"
      title="Multichannel Order Management"
      heroBg={heroBg}
      image={image}
      metaDesc="Centralize Amazon, Noon, Shopify and 50+ marketplace orders into one intelligent workflow. Smart routing, real-time stock holds, fraud checks and bulk fulfillment — 100 Miles OMS."
      intro="One inbox for every marketplace and storefront. Route, allocate and fulfill orders without spreadsheets."
      paragraphs={[
        'When your brand sells across Amazon, Noon, Shopify and dozens of other channels, every minute spent reconciling orders across tools is revenue lost. 100 Miles consolidates every order into a single dashboard, with smart routing rules that allocate stock, choose the right warehouse and trigger the right carrier — automatically.',
        'Built-in fraud checks, channel-specific SLAs and rule-based exceptions mean your ops team only touches the orders that genuinely need a human. The rest just ship.',
      ]}
      bullets={[
        'Centralized order inbox across 50+ marketplaces',
        'Smart routing across warehouses and 3PLs',
        'Real-time inventory holds and oversell protection',
        'Bulk cancellations, invoicing and shipping label printing',
        'Channel-specific SLA monitoring with alerts',
        'Native fraud screening on every transaction',
      ]}
      features={[
        { icon: Boxes, title: 'Unified order inbox', desc: 'Every marketplace and D2C order in one searchable, filterable view.' },
        { icon: Shuffle, title: 'Smart routing engine', desc: 'Rules-based allocation to the right warehouse based on stock, region and cost.' },
        { icon: ShieldCheck, title: 'Fraud & risk checks', desc: 'Configurable risk rules screen every order before it enters fulfillment.' },
        { icon: Bell, title: 'Real-time alerts', desc: 'Slack and email alerts for SLA breaches, oversells and exceptions.' },
        { icon: RefreshCw, title: 'Returns workflows', desc: 'Initiate, approve and reconcile returns from the same workflow.' },
        { icon: Receipt, title: 'Bulk invoicing', desc: 'Generate compliant invoices for UAE, KSA and India in seconds.' },
      ]}
      outcomes={[
        { value: '−72%', label: 'Order processing time' },
        { value: '99.8%', label: 'Order accuracy' },
        { value: '24/7', label: 'Always-on ops' },
      ]}
    />
  )
}
