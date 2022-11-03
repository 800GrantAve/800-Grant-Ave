import React, { useState } from 'react'
import {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5
} from '../Slides/data'
import SlideGallery from '../Slides/SlideGallery'
import {
    SlideCarouselContainer,
    SlideCarouselWrapper,
    SlideCarouselItem,
    ArrowLeft,
    ArrowRight
} from './SlideCarouselElements'

const SlideCarousel = () => {
    const slides = [
        {
            item: slide1
        },
        {
            item: slide2
        },
        {
            item: slide3
        },
        {
            item: slide4
        },
        {
            item: slide5
        },
]
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
        console.log(currentSlide)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

  return (
    <SlideCarouselContainer id='photo'>
        <SlideCarouselWrapper>
        <ArrowLeft onClick={prevSlide} />
        <ArrowRight onClick={nextSlide} />
            { slides.map((slide, index) => {
                return (
                <SlideCarouselItem key={index}>
                    {index === currentSlide && (<SlideGallery {...slide.item} />)}
                    
                </SlideCarouselItem>)
            })}
        </SlideCarouselWrapper>
    </SlideCarouselContainer>
  )
}

export default SlideCarousel