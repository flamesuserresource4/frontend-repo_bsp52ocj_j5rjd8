import { motion } from 'framer-motion'
import { BadgeCheck, Factory, Tag, Brush } from 'lucide-react'

const services = [
  {
    icon: Tag,
    title: 'Wholesale Pricing',
    desc: 'Transparent, competitive wholesale rates with assured value.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Across Varieties',
    desc: 'Velvet, satin, plastic boxes and purses — carefully sourced and crafted.'
  },
  {
    icon: Factory,
    title: 'Custom Box Making',
    desc: 'On-demand box sizes, inserts, colors and structures for your needs.'
  },
  {
    icon: Brush,
    title: 'Branding Services',
    desc: 'Foil stamping, screen print, debossing on boxes and purses purchased from us.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#0b1a3a] text-center">
          What We Offer
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} viewport={{ once: true }} className="rounded-xl border border-[#0b1a3a]/10 bg-gradient-to-br from-white to-[#fafbff] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#800000] to-[#0b1a3a] text-white grid place-content-center mb-4">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-[#0b1a3a]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#0b1a3a]/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
