import { motion } from 'framer-motion'
import { TrendingDown, ShieldCheck } from 'lucide-react'

export default function Wholesale() {
  return (
    <section id="wholesale" className="py-20 bg-[#f9fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#0b1a3a] text-center">
          Wholesale, Done Right
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#0b1a3a]/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#800000] to-[#0b1a3a] text-white grid place-content-center">
                <TrendingDown size={20} />
              </div>
              <h3 className="font-semibold text-[#0b1a3a]">Transparent Pricing</h3>
            </div>
            <p className="mt-3 text-sm text-[#0b1a3a]/80">Volume-based discounts, no hidden charges, best value for your brand.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#0b1a3a]/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#800000] to-[#0b1a3a] text-white grid place-content-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-semibold text-[#0b1a3a]">Reliable Quality</h3>
            </div>
            <p className="mt-3 text-sm text-[#0b1a3a]/80">Consistent materials, strong QC, and packaging that earns trust.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
