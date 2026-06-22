'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHeroVideo } from '../contexts/HeroVideoContext'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { muted, setHasVideo, registerVideo } = useHeroVideo()

  useEffect(() => {
    setHasVideo(true)
    registerVideo(videoRef.current)
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      const p = videoRef.current.play()
      if (p) p.catch(() => {})
    }
    return () => {
      setHasVideo(false)
      registerVideo(null)
    }
  }, [setHasVideo, registerVideo])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted
      videoRef.current.volume = muted ? 0 : 0.7
    }
  }, [muted])

  return (
    <header className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-label="100 Miles ecommerce platform showcase video"
      >
        <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex items-end pb-12 sm:pb-16 lg:pb-24 pointer-events-none">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left pointer-events-auto"
          >
            <span className="inline-block mb-3 sm:mb-4 text-[10px] sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-yellow-300 font-semibold uppercase">
              Simplify. Complexity.
            </span>
            <h1 className="text-[34px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white text-shadow-strong">
              <span className="block">Solutions That</span>
              <span className="block">Move You <span className="text-yellow-300">Forward</span></span>
            </h1>
            <p className="mt-3 sm:mt-5 text-sm sm:text-lg lg:text-lg xl:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-shadow-medium">
              AI-driven ecommerce intelligence to manage, scale, and optimize every part of your
              business across marketplaces, D2C stores, and B2B.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-yellow-400 text-black font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-md hover:bg-yellow-300 hover:scale-105 gentle-animation"
              >
                Contact Us
              </Link>
              <Link
                to="/solutions"
                className="glass-effect text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-md hover:bg-white/20 hover:scale-105 gentle-animation"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
