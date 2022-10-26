import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
// import ImageGallery from '../components/Gallery'
import Footer from '../components/Footer'
// import StoreImages from '../components/StoreGallery/StoreImages'
// import StoreGallery from '../components/StoreGallery/StoreGallery'
import SlideCarousel from '../components/SlideCarousel/SlideCarousel'
// import SlideGallery from '../components/Slides/SlideGallery'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        {/* <ImageGallery /> */}
        {/* <StoreImages /> */}
        {/* <StoreGallery /> */}
        <SlideCarousel />
        {/* <SlideGallery /> */}
        <Footer />
    </>
  )
}

export default Home