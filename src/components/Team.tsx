'use client'

import { ImageWithFallback } from './figma/ImageWithFallback'
import { Linkedin, Twitter } from 'lucide-react'
import p1 from '../assets/team-member-1.png'
import p2 from '../assets/team-member-2.png'
import p3 from '../assets/team-member-3.png'
import p4 from '../assets/team-member-4.png'
import p5 from '../assets/team-member-5.png'
import p6 from '../assets/team-member-6.png'

const team = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', bio: 'Ecommerce veteran with 12+ years scaling brands across Amazon, Noon, and Namshi.', image: p1 },
  { name: 'Layla Al-Rashid', role: 'Chief Operating Officer', bio: 'Operations leader behind multi-warehouse rollouts across the GCC region.', image: p2 },
  { name: 'Rohan Verma', role: 'Chief Technology Officer', bio: 'Architect of the 100 Miles AI engine, ex-marketplace platform engineer.', image: p3 },
  { name: 'Sara Khan', role: 'Head of Growth & Marketing', bio: 'Performance marketer driving ROAS for D2C and marketplace sellers.', image: p4 },
  { name: 'Daniel O\'Connor', role: 'Head of Integrations', bio: 'Builds and maintains 50+ marketplace and ad-platform integrations.', image: p5 },
  { name: 'Priya Nair', role: 'Head of Customer Success', bio: 'Ensures every brand gets to first revenue milestones, fast.', image: p6 },
]

export function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
              Meet the Team
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 text-foreground">
            Meet The <span className="text-yellow-500">Team</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Operators, engineers, and growth specialists with deep ecommerce DNA across Dubai,
            Riyadh, New Delhi, and Dublin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 max-w-7xl mx-auto">
          {team.map((m) => (
            <article
              key={m.name}
              className="group bg-card clean-border rounded-2xl overflow-hidden elevated-shadow hover:-translate-y-1 gentle-animation"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <ImageWithFallback
                  src={m.image}
                  alt={`Portrait of ${m.name}, ${m.role} at 100 Miles`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 gentle-animation">
                  <a href="#" aria-label={`${m.name} on LinkedIn`} className="w-9 h-9 rounded-full bg-white/90 hover:bg-yellow-300 flex items-center justify-center text-black gentle-animation">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label={`${m.name} on X`} className="w-9 h-9 rounded-full bg-white/90 hover:bg-yellow-300 flex items-center justify-center text-black gentle-animation">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-foreground mb-1">{m.name}</h3>
                <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 tracking-wide uppercase mb-3">
                  {m.role}
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
