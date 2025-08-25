import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
// import PricingSection from '@/components/PricingSection'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='px-8 sm:px-24'>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Services/>
      {/* <PricingSection/> */}
      <Contact/>
    </div>
     <Footer/>
    </>
  )
}
