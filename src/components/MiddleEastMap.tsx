'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

/**
 * Animated Middle East network map. SVG-based, fully responsive.
 * Each country is a glowing node; animated connections pulse between
 * hubs to convey real-time orchestration across the region.
 */

type Country = { id: string; name: string; x: number; y: number; hub?: boolean }

// Coordinates are tuned for an 800x520 viewBox — rough geographic layout.
const countries: Country[] = [
  { id: 'tr', name: 'Turkey', x: 230, y: 80 },
  { id: 'sy', name: 'Syria', x: 285, y: 140 },
  { id: 'lb', name: 'Lebanon', x: 260, y: 170 },
  { id: 'jo', name: 'Jordan', x: 280, y: 200 },
  { id: 'iq', name: 'Iraq', x: 360, y: 160 },
  { id: 'ir', name: 'Iran', x: 480, y: 170 },
  { id: 'eg', name: 'Egypt', x: 215, y: 270 },
  { id: 'sa', name: 'Saudi Arabia', x: 380, y: 300, hub: true },
  { id: 'kw', name: 'Kuwait', x: 415, y: 215 },
  { id: 'bh', name: 'Bahrain', x: 455, y: 270 },
  { id: 'qa', name: 'Qatar', x: 475, y: 295 },
  { id: 'ae', name: 'UAE', x: 525, y: 315, hub: true },
  { id: 'om', name: 'Oman', x: 565, y: 360 },
  { id: 'ye', name: 'Yemen', x: 440, y: 410 },
]

const byId = Object.fromEntries(countries.map((c) => [c.id, c]))

// Trade routes between key hubs
const routes: Array<[string, string]> = [
  ['ae', 'sa'], ['ae', 'om'], ['ae', 'qa'], ['ae', 'kw'], ['ae', 'bh'],
  ['sa', 'eg'], ['sa', 'jo'], ['sa', 'kw'], ['sa', 'bh'], ['sa', 'ye'],
  ['eg', 'jo'], ['jo', 'lb'], ['iq', 'kw'], ['iq', 'sy'], ['ir', 'ae'],
  ['tr', 'sy'], ['qa', 'bh'], ['ae', 'eg'],
]

export function MiddleEastMap() {
  const lines = useMemo(
    () =>
      routes
        .map(([a, b]) => {
          const A = byId[a]; const B = byId[b]
          if (!A || !B) return null
          return { a: A, b: B, key: `${a}-${b}` }
        })
        .filter(Boolean) as Array<{ a: Country; b: Country; key: string }>,
    []
  )

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-black">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-yellow-300 tracking-[0.3em] uppercase">
              Regional Network
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
            One platform. <span className="text-yellow-300">The whole Middle East.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
            Real-time orchestration across UAE, KSA and every key market — fulfillment, ads
            and analytics moving in sync.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-3xl border border-yellow-400/15 bg-black/40 backdrop-blur-sm p-3 sm:p-6 lg:p-8 elevated-shadow">
          {/* Subtle grid */}
          <div
            className="absolute inset-3 sm:inset-6 lg:inset-8 rounded-2xl opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(250,204,21,0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(250,204,21,0.4) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            }}
          />

          <svg
            viewBox="0 0 800 520"
            className="w-full h-auto block relative"
            role="img"
            aria-label="Middle East network map"
          >
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(253,224,71,0.9)" />
                <stop offset="60%" stopColor="rgba(250,204,21,0.25)" />
                <stop offset="100%" stopColor="rgba(250,204,21,0)" />
              </radialGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(250,204,21,0)" />
                <stop offset="50%" stopColor="rgba(253,224,71,0.95)" />
                <stop offset="100%" stopColor="rgba(250,204,21,0)" />
              </linearGradient>
            </defs>

            {/* Base connection lines */}
            {lines.map((l) => (
              <line
                key={`base-${l.key}`}
                x1={l.a.x} y1={l.a.y} x2={l.b.x} y2={l.b.y}
                stroke="rgba(250,204,21,0.18)"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
            ))}

            {/* Animated draw-in lines */}
            {lines.map((l, i) => (
              <motion.line
                key={`anim-${l.key}`}
                x1={l.a.x} y1={l.a.y} x2={l.b.x} y2={l.b.y}
                stroke="rgba(253,224,71,0.55)"
                strokeWidth="1.4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: i * 0.08, ease: 'easeInOut' }}
              />
            ))}

            {/* Pulse packets traveling on each route */}
            {lines.map((l, i) => (
              <motion.circle
                key={`pulse-${l.key}`}
                r="3"
                fill="rgba(253,224,71,1)"
                initial={{ cx: l.a.x, cy: l.a.y, opacity: 0 }}
                animate={{
                  cx: [l.a.x, l.b.x, l.a.x],
                  cy: [l.a.y, l.b.y, l.a.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: 'easeInOut',
                }}
                style={{ filter: 'drop-shadow(0 0 6px rgba(253,224,71,0.9))' }}
              />
            ))}

            {/* Country nodes */}
            {countries.map((c, i) => (
              <g key={c.id}>
                {/* Glow halo */}
                <circle cx={c.x} cy={c.y} r={c.hub ? 24 : 16} fill="url(#nodeGlow)" />
                {/* Ping ring */}
                <motion.circle
                  cx={c.x} cy={c.y}
                  r={c.hub ? 10 : 7}
                  fill="none"
                  stroke="rgba(253,224,71,0.6)"
                  strokeWidth="1"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                  style={{ transformOrigin: `${c.x}px ${c.y}px` }}
                />
                {/* Core dot */}
                <circle
                  cx={c.x} cy={c.y}
                  r={c.hub ? 5 : 3.5}
                  fill={c.hub ? '#fde047' : '#facc15'}
                  stroke="#000"
                  strokeWidth="1.2"
                />
                {/* Label */}
                <text
                  x={c.x}
                  y={c.y - (c.hub ? 14 : 11)}
                  textAnchor="middle"
                  fontSize={c.hub ? 12 : 10}
                  fontWeight={c.hub ? 800 : 600}
                  fill={c.hub ? '#fde047' : 'rgba(255,255,255,0.78)'}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.04em' }}
                >
                  {c.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-white/60 font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 ring-2 ring-yellow-300/30" />
              Active hub
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              Connected market
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-yellow-300/70" />
              Live data route
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
