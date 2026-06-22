'use client'

import logo from '../assets/100miles-logo.jpg'

const company = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/services', label: 'Services' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/contact', label: 'Contact' },
]

const resources = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/faq', label: 'FAQ' },
  { href: '/solutions/order-management', label: 'Order Management' },
  { href: '/solutions/wms', label: 'WMS' },
  { href: '/solutions/analytics', label: 'Analytics & BI' },
  { href: '/solutions/reconciliation', label: 'Payments & Recon' },
]

const locations = [
  'Dubai, UAE',
  'Riyadh, Saudi Arabia',
  'New Delhi, India',
  'Dublin, Ireland',
]

export function Footer() {
  return (
    <footer className="relative py-16 lg:py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* Logo Section */}
          <div className="md:col-span-4">
            <img
              src={logo}
              alt="100 Miles Logo"
              className="h-16 w-auto mb-5 rounded-lg"
            />

            <p className="text-background/70 leading-relaxed mb-6 max-w-md">
              100 Miles empowers brands and sellers to accelerate growth in
              the digital marketplace with AI-driven intelligence, seamless
              automation, and scalable solutions.
            </p>

            <div className="flex items-center space-x-5">
              <a
                href="https://linkedin.com/company/100miles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://facebook.com/100miles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>

              <a
                href="https://x.com/100miles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                X
              </a>

              <a
                href="https://instagram.com/100miles.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-black text-lg mb-5">Quick Links</h4>

            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-yellow-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h4 className="font-black text-lg mb-5">Resources</h4>

            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-yellow-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-black text-lg mb-5">Get In Touch</h4>

            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <span className="block text-background/50 text-xs uppercase mb-1">
                  Email
                </span>
                <a href="mailto:brands@100miles.com">
                  brands@100miles.com
                </a>
              </li>

              <li>
                <span className="block text-background/50 text-xs uppercase mb-1">
                  Phone
                </span>
                <a href="tel:+971525014194">
                  +971 52 501 4194
                </a>
              </li>

              <li>
                <span className="block text-background/50 text-xs uppercase mb-1">
                  Head Office
                </span>
                X5MC+V7H, Dubai Investment Park 1, Dubai, UAE
              </li>

              <li>
                <span className="block text-background/50 text-xs uppercase mb-1">
                  Locations
                </span>
                {locations.join(' • ')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/70">
            © {new Date().getFullYear()} 100 Miles. All rights reserved.
          </div>

          <div className="text-sm text-background/70">
            Built for sellers across the Middle East and beyond.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer