import React, { useState } from 'react'
import {SlideData} from '../Slides/data'
import SlideGallery from '../Slides/SlideGallery'
import {
    SlideCarouselContainer,
    SlideCarouselWrapper,
    SlideCarouselItem,
    ArrowLeft,
    ArrowRight
} from './SlideCarouselElements'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/swiper-bundle.css'

const SlideCarousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = SlideData.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

  return (
    <SlideCarouselContainer id='photo'>
            <SlideCarouselWrapper>
            <ArrowLeft onClick={prevSlide} />
            <ArrowRight onClick={nextSlide} />
                    { SlideData.map((slide, index) => {
                        return (
                            <SlideCarouselItem key={index}>
                                {index === currentSlide && (<SlideGallery {...slide} />)}
                            </SlideCarouselItem>
                        )
                    })}
            </SlideCarouselWrapper>
    </SlideCarouselContainer>
  )
}

export default SlideCarousel