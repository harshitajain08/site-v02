import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StickyScroll from '@/components/StickyScroll'
import About from '@/components/About'
import Services from '@/components/Services'
import RequirementsBuilder from '@/components/RequirementsBuilder'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        <Hero />
      <StickyScroll />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <RequirementsBuilder />
      <FinalCTA />
      <Footer />
      </main>
    </>
  )
}
