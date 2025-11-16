import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#0b1a3a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg">Mahbbob kk and son</h4>
            <p className="mt-2 text-white/70">Premium empty jewellery boxes and purses for brands and retailers.</p>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-white/70 mt-2">Email: hello@mahbbobboxes.com</p>
            <p className="text-white/70">Phone: +91-90000-00000</p>
          </div>
          <div>
            <h5 className="font-semibold">Address</h5>
            <p className="text-white/70 mt-2">Your market/location here, City, Country</p>
          </div>
        </motion.div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70">© {new Date().getFullYear()} Mahbbob kk and son. All rights reserved.</div>
      </div>
    </footer>
  )
}
