import SolutionDetail from '../SolutionDetail'
import heroBg from '@/assets/heroes/solutions-hero.jpg'
import image from '@/assets/modules/reconciliation.jpg'
import { Wallet, FileCheck, AlertTriangle, Calculator, Repeat, BookOpen } from 'lucide-react'

export default function ReconciliationPage() {
  return (
    <SolutionDetail
      slug="reconciliation"
      eyebrow="Payments & Reconciliation"
      title="Payments & Reconciliation"
      heroBg={heroBg}
      image={image}
      metaDesc="Auto-match marketplace settlements with orders, returns and fees. Dispute detection, chargeback workflows and one-click exports to Tally, Zoho, QuickBooks and Xero."
      intro="Auto-match marketplace settlements with orders, returns and fees — and push it straight to your books."
      paragraphs={[
        'Marketplaces are not always right. Commissions, FBA fees, storage fees, ad cost recoveries and return adjustments — each one is a potential leak. Our reconciliation engine reads every settlement file, matches it against your orders and returns, and surfaces every discrepancy with a full audit trail.',
        'Finance teams save days each month, recover lost revenue from disputed transactions and close books faster — with everything pushed cleanly into Tally, Zoho, QuickBooks or Xero.',
      ]}
      bullets={[
        'Auto-match settlements with orders and returns',
        'Commission, FBA, storage and ad fee breakdowns',
        'Dispute detection with one-click claims',
        'Chargeback and refund workflows',
        'Exports to Tally, Zoho, QuickBooks and Xero',
        'Audit-ready reports for finance and tax teams',
      ]}
      features={[
        { icon: FileCheck, title: 'Auto-matching', desc: 'Every settlement matched to source orders and returns.' },
        { icon: AlertTriangle, title: 'Discrepancy alerts', desc: 'Flags missing payouts, wrong commissions, hidden fees.' },
        { icon: Calculator, title: 'Fee analytics', desc: 'See exactly what each marketplace is taking from you.' },
        { icon: Repeat, title: 'Dispute workflow', desc: 'Track disputes from filing to recovery in one place.' },
        { icon: BookOpen, title: 'Accounting sync', desc: 'One-click exports to Tally, Zoho, QuickBooks, Xero.' },
        { icon: Wallet, title: 'Cash flow view', desc: 'Forecast incoming payouts across every marketplace.' },
      ]}
      outcomes={[
        { value: '−5 days', label: 'Faster book close' },
        { value: '+2.3%', label: 'Recovered revenue' },
        { value: '100%', label: 'Audit trail coverage' },
      ]}
    />
  )
}
