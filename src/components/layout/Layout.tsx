'use client'

import { useEffect, useMemo } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from '../Footer'
import { WhatsAppFloat } from '../WhatsAppFloat'
import { AnimatedBackground, type BgVariant } from '../AnimatedBackground'
import { HeroVideoProvider } from '@/contexts/HeroVideoContext'

function variantForPath(path: string): BgVariant {
  if (path === '/') return 'lemniscate'
  if (path.startsWith('/about')) return 'orbits'
  if (path.startsWith('/solutions/order-management')) return 'network'
  if (path.startsWith('/solutions/wms')) return 'grid'
  if (path.startsWith('/solutions/analytics')) return 'waves'
  if (path.startsWith('/solutions/reconciliation')) return 'matrix'
  if (path.startsWith('/solutions')) return 'network'
  if (path.startsWith('/services')) return 'waves'
  if (path.startsWith('/integrations')) return 'grid'
  if (path.startsWith('/case-studies')) return 'orbits'
  if (path.startsWith('/faq')) return 'matrix'
  if (path.startsWith('/contact')) return 'network'
  return 'lemniscate'
}

export function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const variant = useMemo(() => variantForPath(location.pathname), [location.pathname])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      })
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
      if (!target) return
      const href = target.getAttribute('href')
      if (!href) return
      if (target.target === '_blank') return
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault(); navigate(href)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [navigate])

  return (
    <HeroVideoProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        <AnimatedBackground variant={variant} />
        <div className="relative z-10">
          <Header />
          <main role="main">
            <Outlet />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </div>
    </HeroVideoProvider>
  )
}
