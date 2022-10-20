import React from 'react'
import About from '../About/About'
import Hero from '../../hero/Hero'
import Services from '../Services/Services'
import Shop from '../Shop/Shop'
import Footer from '../../components/footer/Footer'
import Fab from '../../components/Fab/Fab'
function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Shop/>
    <Footer/>
    <Fab/>
    </>
  )
}

export default Home