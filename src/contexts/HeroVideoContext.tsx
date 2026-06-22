'use client'

import { createContext, useContext, useState, useRef, type ReactNode } from 'react'

type Ctx = {
  muted: boolean
  toggleMuted: () => void
  hasVideo: boolean
  setHasVideo: (v: boolean) => void
  registerVideo: (el: HTMLVideoElement | null) => void
}

const HeroVideoContext = createContext<Ctx | null>(null)

export function HeroVideoProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(true)
  const [hasVideo, setHasVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const registerVideo = (el: HTMLVideoElement | null) => {
    videoRef.current = el
  }

  const toggleMuted = () => {
    setMuted((prev) => {
      const next = !prev
      if (videoRef.current) {
        videoRef.current.muted = next
        videoRef.current.volume = next ? 0 : 0.7
        if (!next) {
          const p = videoRef.current.play()
          if (p) p.catch(() => {})
        }
      }
      return next
    })
  }

  return (
    <HeroVideoContext.Provider value={{ muted, toggleMuted, hasVideo, setHasVideo, registerVideo }}>
      {children}
    </HeroVideoContext.Provider>
  )
}

export function useHeroVideo() {
  const ctx = useContext(HeroVideoContext)
  if (!ctx) throw new Error('useHeroVideo must be used within HeroVideoProvider')
  return ctx
}
