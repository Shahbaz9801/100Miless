import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import OrderManagementPage from './pages/solutions/OrderManagementPage'
import WmsPage from './pages/solutions/WmsPage'
import AnalyticsPage from './pages/solutions/AnalyticsPage'
import ReconciliationPage from './pages/solutions/ReconciliationPage'
import ServicesPage from './pages/ServicesPage'
import IntegrationsPage from './pages/IntegrationsPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/order-management" element={<OrderManagementPage />} />
          <Route path="/solutions/wms" element={<WmsPage />} />
          <Route path="/solutions/analytics" element={<AnalyticsPage />} />
          <Route path="/solutions/reconciliation" element={<ReconciliationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
