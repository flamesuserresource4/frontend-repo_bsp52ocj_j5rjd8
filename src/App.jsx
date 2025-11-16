import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Varieties from './components/Varieties'
import CustomBranding from './components/CustomBranding'
import Wholesale from './components/Wholesale'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0b1a3a]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Varieties />
        <CustomBranding />
        <Wholesale />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
