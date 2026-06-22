import SolutionDetail from '../SolutionDetail'
import heroBg from '@/assets/heroes/solutions-hero.jpg'
import image from '@/assets/modules/analytics.jpg'
import { BarChart3, LineChart, PieChart, TrendingUp, Bell, FileDown } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <SolutionDetail
      slug="analytics"
      eyebrow="Analytics & BI"
      title="Analytics & Business Intelligence"
      heroBg={heroBg}
      image={image}
      metaDesc="Unified dashboards for sales, ad spend, margin and stock. True per-SKU profitability with all marketplace fees, COGS and ad cost — plus forecasting for inventory, revenue and ad budgets."
      intro="Live dashboards for sales, ad spend, margin and stock — with per-SKU profitability that finally matches reality."
      paragraphs={[
        'Every marketplace fee, FBA charge, ad cost and COGS line item rolls up into one true-profit view. No more chasing exports across Amazon Seller Central, Noon and Shopify just to know what you actually made.',
        'Forecasting helps you plan inventory and ad budgets with confidence. Scheduled digests push the metrics your team needs straight into Slack and email — every morning.',
      ]}
      bullets={[
        'Unified dashboards across every marketplace and D2C',
        'Per-SKU profitability with fees, COGS and ad cost',
        'Custom reports and saved views per team',
        'Scheduled Slack and email digests',
        'Forecasting for inventory and ad budgets',
        'Export to BI tools (Looker, Metabase, Power BI)',
      ]}
      features={[
        { icon: BarChart3, title: 'Sales dashboards', desc: 'Channel, region and SKU-level revenue in real time.' },
        { icon: PieChart, title: 'True profitability', desc: 'Marketplace fees, COGS and ad cost on every SKU.' },
        { icon: LineChart, title: 'Forecasting', desc: 'Stock, ad spend and revenue forecasts you can act on.' },
        { icon: TrendingUp, title: 'Ad ROAS tracking', desc: 'Cross-channel ROAS and ACOS in one place.' },
        { icon: Bell, title: 'Anomaly alerts', desc: 'Get pinged when KPIs move beyond your guardrails.' },
        { icon: FileDown, title: 'BI exports', desc: 'Push raw data to your warehouse — Snowflake, BigQuery, S3.' },
      ]}
      outcomes={[
        { value: '+38%', label: 'Ad spend efficiency' },
        { value: '−60%', label: 'Time spent on reports' },
        { value: '100%', label: 'Cross-channel visibility' },
      ]}
    />
  )
}
