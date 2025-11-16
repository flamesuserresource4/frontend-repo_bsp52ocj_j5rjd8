import { useState } from 'react'
import { Menu, X, Gem } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Varieties', href: '#varieties' },
  { label: 'Custom Boxes', href: '#custom' },
  { label: 'Branding', href: '#branding' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#800000] to-[#0b1a3a] grid place-content-center text-white shadow-lg">
              <Gem size={18} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-[#0b1a3a]">Mahbbob kk and son</p>
              <p className="text-xs text-[#800000]">Empty Jewellery Boxes</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-[#0b1a3a]/80 hover:text-[#800000] transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-md bg-[#800000] text-white hover:shadow-lg transition-all">
              Enquire
            </a>
          </div>

          <button aria-label="Toggle Menu" className="md:hidden p-2 rounded-md text-[#0b1a3a]" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-[#0b1a3a]" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-block px-4 py-2 rounded-md bg-[#800000] text-white" onClick={() => setOpen(false)}>
              Enquire
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
