'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  const phone = '971525014194'
  const text = encodeURIComponent("Hi 100 Miles team, I'd like to learn more about your services.")
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden="true" />
      <span className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:bg-[#1ebe57] transition-all duration-300">
        <svg viewBox="0 0 32 32" className="w-8 h-8 lg:w-9 lg:h-9" aria-hidden="true">
          <path fill="#fff" d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.6-1.72a12.78 12.78 0 0 0 6.2 1.59h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.71 12.71 0 0 0 16.003 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.6 10.6 0 0 1-1.62-5.66c0-5.85 4.76-10.6 10.61-10.6 2.83 0 5.5 1.1 7.5 3.11a10.55 10.55 0 0 1 3.1 7.5c0 5.86-4.76 10.55-10.67 10.55z"/>
          <path fill="#fff" d="M21.83 18.92c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.76.75.33 1.34.52 1.8.66.75.24 1.44.21 1.98.13.6-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z"/>
        </svg>
      </span>
    </a>
  )
}
