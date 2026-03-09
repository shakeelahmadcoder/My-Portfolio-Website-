import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'

export default function Page() {
  return (
    <main className="bg-[#080808] min-h-screen overflow-x-hidden">

      {/* Navbar — full width, no side padding (fixed position handles it internally) */}
      <Navbar />

      {/* Hero — full width for background effects, inner padding handled inside component */}
      <Hero />
      {/* Portfolio */}
      <Portfolio />
      {/* Services */}
      <Services />
      {/* Contact */}
      <Contact />

      {/* Footer — full width */}
      <Footer />

    </main>
  )
}