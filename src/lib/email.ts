// EmailJS integration (temporary client-side solution).
// Later, replace `sendContactEmails` with a serverless call (Resend / edge function)
// without changing the Contact component.
import emailjs from '@emailjs/browser'

// ---- Config (replace with your real EmailJS keys) ----------------------------
// Create these in your EmailJS dashboard: https://dashboard.emailjs.com/
// You can also override via Vite env vars: VITE_EMAILJS_*
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder',
  // Template that delivers the form details to the team inbox (alamshahbaz2017@gmail.com)
  templateIdToOwner:
    import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER || 'template_to_owner_placeholder',
  // Template that sends an auto-reply confirmation to the user
  templateIdAutoReply:
    import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY || 'template_autoreply_placeholder',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder',
  ownerEmail: 'alamshahbaz2017@gmail.com',
}

let initialized = false
function ensureInit() {
  if (!initialized) {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey })
    initialized = true
  }
}

export interface ContactPayload {
  name: string
  email: string
  company: string
  message: string
}

/**
 * Sends two emails:
 *  1) Notification to the owner (alamshahbaz2017@gmail.com) with the form data.
 *  2) Auto-reply confirmation to the user who submitted the form.
 */
export async function sendContactEmails(data: ContactPayload): Promise<void> {
  ensureInit()

  const baseParams = {
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    company: data.company || 'N/A',
    message: data.message,
    to_email: EMAILJS_CONFIG.ownerEmail,
    user_email: data.email,
    user_name: data.name,
  }

  // 1. Notify the owner
  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateIdToOwner,
    baseParams,
  )

  // 2. Auto-confirmation to the user
  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateIdAutoReply,
    baseParams,
  )
}
