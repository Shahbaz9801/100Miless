'use client'

import { motion } from 'framer-motion'
import { Menu, X, Volume2, VolumeX } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/100miles-logo.jpg'
import { useHeroVideo } from '@/contexts/HeroVideoContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/services', label: 'Services' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { muted, toggleMuted, hasVideo } = useHeroVideo()

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50)

    handler()

    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const solid = !isHome || isScrolled

  const MuteBtn = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleMuted}
      aria-label={muted ? 'Unmute hero video' : 'Mute hero video'}
      title={muted ? 'Unmute video' : 'Mute video'}
      className={`inline-flex items-center justify-center rounded-full border border-yellow-400/40 bg-black/40 text-yellow-300 hover:text-black hover:bg-yellow-400 gentle-animation ${className}`}
    >
      {muted ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  )

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div
          className={`w-full px-4 sm:px-6 lg:px-12 py-2.5 sm:py-3 transition-all duration-300 ease-out ${
            solid
              ? 'bg-black/85 backdrop-blur-xl border-b border-yellow-400/15'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <Link
              to="/"
              className="flex items-center cursor-pointer shrink-0"
            >
              <img
                src={logo}
                alt="100 Miles logo"
                className="h-9 sm:h-11 lg:h-12 w-auto rounded-md"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-white hover:text-yellow-300 font-medium gentle-animation text-sm tracking-wide uppercase ${
                      isActive ? 'text-yellow-300' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {hasVideo && <MuteBtn className="w-9 h-9" />}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {hasVideo && <MuteBtn className="lg:hidden w-9 h-9" />}

              <Link
                to="/contact"
                className="hidden sm:block bg-yellow-400 text-black font-bold px-4 lg:px-6 py-2.5 lg:py-3 rounded-md hover:bg-yellow-300 gentle-animation text-xs lg:text-sm tracking-wide"
              >
                Book a Consultation
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden glass-effect p-2.5 rounded-full text-white hover:bg-white/20 gentle-animation z-[120] relative"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial={false}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
        }}
        className="lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-yellow-400/15 z-[90] pt-20 px-6"
      >
        <div className="flex flex-col space-y-2 text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 hover:text-yellow-300 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg tracking-wide ${
                  isActive ? 'text-yellow-300 bg-white/5' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {hasVideo && (
            <button
              onClick={toggleMuted}
              className="flex items-center gap-3 px-4 py-3 hover:text-yellow-300 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg tracking-wide text-left"
            >
              {muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}

              {muted ? 'Unmute Video' : 'Mute Video'}
            </button>
          )}
        </div>

        <Link
          to="/contact"
          className="block text-center bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 gentle-animation mt-6"
        >
          Book a Consultation
        </Link>
      </motion.div>
    </>
  )
}

export default Header