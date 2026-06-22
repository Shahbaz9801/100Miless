'use client'

import { useEffect, useRef } from 'react'

export type BgVariant = 'network' | 'lemniscate' | 'grid' | 'orbits' | 'waves' | 'matrix'

/**
 * Full-page animated canvas background. Multiple variants so each
 * route can feel distinct while staying within the yellow/black/white
 * brand palette. Pauses on hidden tabs and respects reduced-motion.
 */
export function AnimatedBackground({ variant = 'network' }: { variant?: BgVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = () => Math.min(window.devicePixelRatio || 1, 2)

    let W = 0, H = 0, cx = 0, cy = 0, t = 0, raf = 0, visible = true

    type Node = { x: number; y: number; vx: number; vy: number; r: number }
    type Star = { p: number; sp: number; s: number; o: number; sc: number }
    type Drop = { x: number; y: number; sp: number; len: number; o: number }

    let nodes: Node[] = []
    let stars: Star[] = []
    let drops: Drop[] = []

    function resize() {
      W = window.innerWidth; H = window.innerHeight
      const ratio = dpr()
      canvas!.width = W * ratio; canvas!.height = H * ratio
      canvas!.style.width = W + 'px'; canvas!.style.height = H + 'px'
      ctx!.setTransform(ratio, 0, 0, ratio, 0, 0)
      cx = W / 2; cy = H / 2

      const count = Math.min(110, Math.max(40, Math.round((W * H) / 18000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: 0.8 + Math.random() * 1.6,
      }))

      const n = W < 700 ? 70 : 140
      stars = Array.from({ length: n }, () => ({
        p: Math.random(), sp: 0.01 + Math.random() * 0.03,
        s: 0.6 + Math.random() * 1.6, o: Math.random(), sc: 0.4 + Math.random() * 1.1,
      }))

      const dn = Math.round(W / 24)
      drops = Array.from({ length: dn }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        sp: 0.6 + Math.random() * 2.2, len: 14 + Math.random() * 60,
        o: 0.15 + Math.random() * 0.5,
      }))
    }

    function lem(p: number, scale: number) {
      const a = p * Math.PI * 2
      const s = Math.min(W, H) * 0.34 * scale
      const d = 1 + Math.sin(a) * Math.sin(a)
      return { x: cx + (s * Math.cos(a)) / d, y: cy + (s * Math.sin(a) * Math.cos(a)) / d }
    }

    // ---- variant drawers ----
    function drawNetwork() {
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      }
      const maxDist = 130
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < maxDist * maxDist) {
            const alpha = (1 - Math.sqrt(d2) / maxDist) * 0.18
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(250, 204, 21, ${alpha})`
            ctx!.lineWidth = 0.6
            ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx!.beginPath()
        ctx!.fillStyle = 'rgba(253, 224, 71, 0.55)'
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx!.fill()
      }
    }

    function drawLemniscate() {
      for (const pt of stars) {
        pt.p = (pt.p + pt.sp * 0.05) % 1
        const pos = lem(pt.p, pt.sc)
        const fl = (Math.sin(t * 4 + pt.o * 9) + 1) / 2
        ctx!.beginPath()
        ctx!.fillStyle = `rgba(250, 204, 21, ${0.15 + fl * 0.5})`
        ctx!.arc(pos.x, pos.y, pt.s, 0, Math.PI * 2); ctx!.fill()
      }
      ctx!.beginPath()
      for (let i = 0; i <= 160; i++) {
        const q = lem(i / 160, 1)
        if (i === 0) ctx!.moveTo(q.x, q.y); else ctx!.lineTo(q.x, q.y)
      }
      ctx!.strokeStyle = 'rgba(255, 255, 255, 0.06)'
      ctx!.lineWidth = 1; ctx!.stroke()
    }

    function drawGrid() {
      const step = 60
      const ox = (t * 18) % step
      const oy = (t * 12) % step
      ctx!.strokeStyle = 'rgba(250, 204, 21, 0.08)'
      ctx!.lineWidth = 1
      for (let x = -step + ox; x < W + step; x += step) {
        ctx!.beginPath(); ctx!.moveTo(x, 0); ctx!.lineTo(x, H); ctx!.stroke()
      }
      for (let y = -step + oy; y < H + step; y += step) {
        ctx!.beginPath(); ctx!.moveTo(0, y); ctx!.lineTo(W, y); ctx!.stroke()
      }
      // pulsing dots at intersections
      for (let x = -step + ox; x < W + step; x += step) {
        for (let y = -step + oy; y < H + step; y += step) {
          const pulse = (Math.sin((x + y) * 0.01 + t * 2) + 1) / 2
          ctx!.beginPath()
          ctx!.fillStyle = `rgba(253, 224, 71, ${0.05 + pulse * 0.25})`
          ctx!.arc(x, y, 1.4, 0, Math.PI * 2); ctx!.fill()
        }
      }
    }

    function drawOrbits() {
      const rings = 6
      for (let i = 0; i < rings; i++) {
        const r = Math.min(W, H) * (0.12 + i * 0.08)
        ctx!.beginPath()
        ctx!.strokeStyle = `rgba(250, 204, 21, ${0.06 + (rings - i) * 0.015})`
        ctx!.lineWidth = 0.8
        ctx!.arc(cx, cy, r, 0, Math.PI * 2); ctx!.stroke()
        // satellite
        const sp = (i % 2 === 0 ? 1 : -1) * (0.3 + i * 0.12)
        const a = t * sp + i
        const x = cx + Math.cos(a) * r
        const y = cy + Math.sin(a) * r
        ctx!.beginPath()
        ctx!.fillStyle = 'rgba(253, 224, 71, 0.85)'
        ctx!.arc(x, y, 2.5, 0, Math.PI * 2); ctx!.fill()
        ctx!.beginPath()
        ctx!.fillStyle = 'rgba(253, 224, 71, 0.15)'
        ctx!.arc(x, y, 8, 0, Math.PI * 2); ctx!.fill()
      }
      // core
      ctx!.beginPath()
      ctx!.fillStyle = 'rgba(255,255,255,0.10)'
      ctx!.arc(cx, cy, 24, 0, Math.PI * 2); ctx!.fill()
    }

    function drawWaves() {
      ctx!.lineWidth = 1.2
      for (let layer = 0; layer < 5; layer++) {
        ctx!.beginPath()
        const amp = 30 + layer * 10
        const freq = 0.006 + layer * 0.002
        const yBase = H * (0.3 + layer * 0.12)
        for (let x = 0; x <= W; x += 6) {
          const y = yBase + Math.sin(x * freq + t * (1 + layer * 0.4)) * amp
          if (x === 0) ctx!.moveTo(x, y); else ctx!.lineTo(x, y)
        }
        ctx!.strokeStyle = `rgba(250, 204, 21, ${0.18 - layer * 0.03})`
        ctx!.stroke()
      }
    }

    function drawMatrix() {
      for (const d of drops) {
        d.y += d.sp
        if (d.y - d.len > H) { d.y = -d.len; d.x = Math.random() * W }
        const grad = ctx!.createLinearGradient(d.x, d.y - d.len, d.x, d.y)
        grad.addColorStop(0, 'rgba(250,204,21,0)')
        grad.addColorStop(1, `rgba(250,204,21,${d.o})`)
        ctx!.strokeStyle = grad
        ctx!.lineWidth = 1
        ctx!.beginPath()
        ctx!.moveTo(d.x, d.y - d.len)
        ctx!.lineTo(d.x, d.y)
        ctx!.stroke()
        ctx!.beginPath()
        ctx!.fillStyle = `rgba(253,224,71,${Math.min(1, d.o + 0.3)})`
        ctx!.arc(d.x, d.y, 1.5, 0, Math.PI * 2); ctx!.fill()
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      t += 0.005
      switch (variant) {
        case 'lemniscate': drawNetwork(); drawLemniscate(); break
        case 'grid': drawGrid(); break
        case 'orbits': drawOrbits(); break
        case 'waves': drawWaves(); break
        case 'matrix': drawMatrix(); break
        case 'network':
        default: drawNetwork(); break
      }
    }

    function loop() {
      if (visible && !reduce) draw()
      raf = requestAnimationFrame(loop)
    }
    const onVis = () => { visible = !document.hidden }

    resize()
    if (reduce) draw()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVis)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{ background: '#000' }}
    />
  )
}
