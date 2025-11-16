import { motion } from 'framer-motion'
import { Ruler, Palette, Stamp } from 'lucide-react'

export default function CustomBranding() {
  return (
    <section id="custom" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#0b1a3a] text-center">
          Custom Boxes & Branding
        </motion.h2>
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#0b1a3a]/10 p-6 bg-gradient-to-br from-white to-[#fafbff]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#800000] to-[#0b1a3a] grid place-content-center text-white">
                <Ruler size={20} />
              </div>
              <h3 className="font-semibold text-[#0b1a3a]">Custom Box Making</h3>
            </div>
            <p className="mt-3 text-sm text-[#0b1a3a]/80">Sizes, inserts, compartments, hinges and closures tailored to your product. Share your reference and we’ll engineer the perfect box.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#0b1a3a]/10 p-6 bg-gradient-to-br from-white to-[#fafbff]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#800000] to-[#0b1a3a] grid place-content-center text-white">
                <Stamp size={20} />
              </div>
              <h3 className="font-semibold text-[#0b1a3a]">Branding on Boxes & Purses</h3>
            </div>
            <p className="mt-3 text-sm text-[#0b1a3a]/80">Hot foil, screen print and debossing with your logo. Available exclusively on products purchased from us.</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 rounded-2xl bg-[#0b1a3a] p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Bring your packaging vision to life</h3>
              <p className="text-white/80">Share your desired size, material and finish — we’ll prepare options and quotes.</p>
            </div>
            <a href="#contact" className="px-5 py-3 rounded-md bg-white text-[#0b1a3a] font-medium hover:opacity-90">Start Custom Order</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
