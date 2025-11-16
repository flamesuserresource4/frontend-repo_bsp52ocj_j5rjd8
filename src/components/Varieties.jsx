import { motion } from 'framer-motion'

const items = [
  {
    name: 'Velvet Boxes',
    desc: 'Plush, premium velvet finish in a range of jewel tones.',
    color: 'from-[#800000]/10 to-[#800000]/20'
  },
  {
    name: 'Satin Boxes',
    desc: 'Smooth satin touch with refined liners and inserts.',
    color: 'from-[#0b1a3a]/10 to-[#0b1a3a]/20'
  },
  {
    name: 'Plastic Boxes',
    desc: 'Durable, clear or colored plastic options for every need.',
    color: 'from-[#0b1a3a]/10 to-[#800000]/10'
  },
  {
    name: 'Purses',
    desc: 'Elegant purses to accompany your jewellery packaging.',
    color: 'from-white to-[#e9ecf7]'
  }
]

export default function Varieties() {
  return (
    <section id="varieties" className="py-20 bg-[#f9fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#0b1a3a] text-center">
          Product Varieties
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} viewport={{ once: true }} className={`rounded-xl border border-[#0b1a3a]/10 bg-gradient-to-br ${it.color} p-6 shadow-sm hover:shadow-md transition-shadow`}>
              <h3 className="font-semibold text-[#0b1a3a]">{it.name}</h3>
              <p className="mt-2 text-sm text-[#0b1a3a]/80">{it.desc}</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="aspect-square rounded-lg bg-white/60 border border-white/40" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
