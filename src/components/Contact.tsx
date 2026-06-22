'use client'

import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react'
import { z } from 'zod'
import { sendContactEmails } from '@/lib/email'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().trim().email('Please enter a valid email').max(255),
  company: z.string().trim().min(1, 'Brand / Organization name is required').max(120),
  message: z.string().trim().min(5, 'Description is too short').max(1500, 'Description too long'),
})

// Spam guard: minimum gap between submissions (ms)
const SUBMIT_COOLDOWN_MS = 8000

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const lastSubmitRef = useRef<number>(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    // Rate-limit rapid resubmissions
    const now = Date.now()
    if (now - lastSubmitRef.current < SUBMIT_COOLDOWN_MS) {
      toast.error('Please wait a moment before sending another message.', {
        style: { background: '#dc2626', color: '#fff', border: 'none' },
      })
      return
    }

    const parsed = contactSchema.safeParse(formData)
    if (!parsed.success) {
      const firstErr = parsed.error.issues[0]?.message ?? 'Invalid form'
      toast.error(firstErr, { style: { background: '#dc2626', color: '#fff', border: 'none' } })
      return
    }

    setIsSubmitting(true)
    try {
      await sendContactEmails({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
      })
      lastSubmitRef.current = Date.now()
      toast.success("Message sent! We've emailed you a confirmation.", {
        style: { background: '#16a34a', color: '#fff', border: 'none' },
      })
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error('Contact form send failed:', err)
      toast.error('Could not send message. Please try again or email us directly.', {
        style: { background: '#dc2626', color: '#fff', border: 'none' },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
              Let's Talk
            </span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            Let's <span className="text-yellow-500">Grow Together</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tell us about your business and we'll build a tailored growth roadmap. Free consultation,
            zero obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-background clean-border rounded-3xl overflow-hidden elevated-shadow">
              <div className="bg-card/50 px-8 py-6 border-b border-border">
                <h3 className="text-xl font-black text-foreground mb-1">Get In Touch</h3>
                <p className="text-muted-foreground">We respond within 24 hours, every business day.</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                    <input id="name" type="text" maxLength={100} value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <input id="email" type="email" maxLength={255} value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                      placeholder="you@brand.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">Brand / Organization Name *</label>
                  <input id="company" type="text" maxLength={120} value={formData.company}
                    onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Brand or organization name" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Description *</label>
                  <textarea id="message" rows={5} maxLength={1500} value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-yellow-400/50 resize-none"
                    placeholder="Tell us about your channels, current challenges, and goals..." />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-yellow-400 text-black font-black text-lg hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-xl gentle-animation disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2 space-y-4">
            <a href="mailto:brands@100miles.com" className="block bg-background clean-border rounded-2xl p-6 elevated-shadow hover:-translate-y-1 gentle-animation">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="font-black text-foreground mb-1">Email</h4>
              <p className="text-muted-foreground">brands@100miles.com</p>
            </a>

            <a href="tel:+971525014194" className="block bg-background clean-border rounded-2xl p-6 elevated-shadow hover:-translate-y-1 gentle-animation">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="font-black text-foreground mb-1">Phone</h4>
              <p className="text-muted-foreground">+971 52 501 4194</p>
            </a>

            <div className="bg-background clean-border rounded-2xl p-6 elevated-shadow">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="font-black text-foreground mb-1">Head Office</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                X5MC+V7H, Dubai Investment Park 1<br />Dubai, United Arab Emirates
              </p>
              <p className="text-xs text-muted-foreground/70 mt-3 leading-relaxed">
                Also in Riyadh · New Delhi · Dublin
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="rounded-3xl overflow-hidden clean-border elevated-shadow">
            <iframe
              title="100 Miles Head Office, Dubai Investment Park 1"
              src="https://www.google.com/maps?q=Dubai+Investment+Park+1,+Dubai&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
