import React, { useState } from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SlideCarousel from '../components/SlideCarousel/SlideCarousel'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] =  useState()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
        <Navbar
          toggle={toggle}
        />
        <Sidebar
          toggle={toggle}
          isOpen={isOpen}
        />
        <HeroSection />
        <SlideCarousel />
        <Footer />
    </Router>
  )
}

export default Home