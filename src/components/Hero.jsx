import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff] via-[#f7f4f5] to-[#e9ecf7]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0b1a3a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Elegant Empty Jewellery Boxes
              <span className="block text-[#800000]">Built for Brands</span>
            </motion.h1>
            <motion.p className="mt-6 text-lg text-[#0b1a3a]/80 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              Mahbbob kk and son brings you premium velvet, satin, plastic boxes and purses with wholesale pricing, on-demand customization and branding under one roof.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a href="#services" className="px-6 py-3 rounded-md bg-[#800000] text-white shadow-md hover:shadow-xl transition-all">Explore Services</a>
              <a href="#contact" className="px-6 py-3 rounded-md border border-[#0b1a3a]/20 text-[#0b1a3a] hover:border-[#800000] hover:text-[#800000] transition-all">Get a Quote</a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#800000]/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-[#0b1a3a]/10 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-1 bg-gradient-to-br from-white to-[#f6f7fb] shadow-xl"
            >
              <div className="rounded-xl bg-white p-6 md:p-10 grid gap-6">
                <div className="grid grid-cols-3 gap-4">
                  {['Velvet', 'Satin', 'Plastic'].map((t, i) => (
                    <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} viewport={{ once: true }} className="aspect-square rounded-lg bg-gradient-to-br from-[#800000]/10 to-[#0b1a3a]/10 grid place-content-center text-[#0b1a3a] font-semibold">
                      {t}
                    </motion.div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-lg p-5 border border-[#0b1a3a]/10">
                  <p className="text-sm text-[#0b1a3a]/80">Custom sizes, inserts, colors and branding available on demand. Low MOQs and fast turnarounds.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
