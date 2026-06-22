'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const items = [
  'Listing Management',
  'Inventory & Warehouse Management',
  'Campaign Management',
  'Order Fulfillment',
  'Feedback Management',
  'Product Registration and Legality Check',
]

export function WhatWeDo() {
  return (
    <section 
      id="what-we-do" 
      className="relative z-10 py-20 sm:py-28 lg:py-36 bg-[#050505] overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-zinc-900"
    >
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-yellow-500/[0.03] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-zinc-800/[0.1] blur-[100px] rounded-full pointer-events-none" />

      {/* Premium Ambient Grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Our Core Services
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">We Do</span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-xl">
              At 100 Miles, we offer a comprehensive solution to facilitate your brand's
              entry and success in the UAE and global marketplaces.
            </p>
            
            <div className="pt-4">
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black px-7 py-3.5 rounded-xl text-sm sm:text-base hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Animated Bullet Points */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-zinc-900/80 border-y border-zinc-900/80">
              {items.map((item, index) => (
                <li 
                  key={index} 
                  className="group flex items-center justify-between py-5 sm:py-6 relative overflow-hidden transition-all duration-300"
                >
                  {/* Left-side subtle accent indicator line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
                  
                  <div className="flex items-center gap-4 sm:gap-6 pl-0 group-hover:pl-4 transition-all duration-300">
                    {/* Premium Circle Check Icon */}
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-yellow-400 group-hover:border-yellow-400/30 group-hover:bg-yellow-400/5 transition-all duration-300 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    
                    {/* List Content */}
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-zinc-300 group-hover:text-white transition-colors duration-200 tracking-wide">
                      {item}
                    </span>
                  </div>

                  {/* Right side arrow disclosure icon that slides in on hover */}
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pr-2">
                    <ArrowRight className="w-5 h-5 text-yellow-400" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}