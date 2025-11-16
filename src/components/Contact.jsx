import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#0b1a3a] text-center">
          Get a Quote
        </motion.h2>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <input required name="name" placeholder="Your Name" className="px-4 py-3 rounded-md border border-[#0b1a3a]/20 focus:outline-none focus:ring-2 focus:ring-[#800000]/40" />
          <input required name="email" type="email" placeholder="Email" className="px-4 py-3 rounded-md border border-[#0b1a3a]/20 focus:outline-none focus:ring-2 focus:ring-[#800000]/40" />
          <input name="phone" placeholder="Phone (optional)" className="px-4 py-3 rounded-md border border-[#0b1a3a]/20 focus:outline-none focus:ring-2 focus:ring-[#800000]/40" />
          <input name="company" placeholder="Company (optional)" className="px-4 py-3 rounded-md border border-[#0b1a3a]/20 focus:outline-none focus:ring-2 focus:ring-[#800000]/40" />
          <select name="interest" className="md:col-span-2 px-4 py-3 rounded-md border border-[#0b1a3a]/20 focus:outline-none focus:ring-2 focus:ring-[#800000]/40">
            <option>Wholesale Purchase</option>
            <option>Custom Box Making</option>
            <option>Branding on Boxes/Purses</option>
            <option>Other</option>
          </select>
          <textarea name="message" placeholder="Tell us about your requirement" rows={4} className="md:col-span-2 px-4 py-3 rounded-md border border-[#0b1a3a]/20 focus:outline-none focus:ring-2 focus:ring-[#800000]/40" />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-[#0b1a3a]/70">We typically reply within 1 business day.</p>
            <button className="px-6 py-3 rounded-md bg-[#800000] text-white hover:shadow-lg transition-all">Send</button>
          </div>
          {status && <p className="md:col-span-2 text-sm text-[#0b1a3a]">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
