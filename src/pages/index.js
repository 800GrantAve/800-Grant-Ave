import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SlideCarousel from '../components/SlideCarousel/SlideCarousel'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <Router>
        <Navbar />
        <Sidebar />
        <HeroSection />
        <SlideCarousel />
        <Footer />
    </Router>
  )
}

export default Home