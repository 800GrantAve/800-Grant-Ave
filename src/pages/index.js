import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Gallery />
        <Footer />
    </>
  )
}

export default Home