import React, { useState } from 'react'
import {
    slideOne,
    slideTwo,
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
    <SlideGallery {...slideOne} />,
    <SlideGallery {...slideTwo} />
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

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null
    // }


    // const carouselInfiniteScroll = () => {
    //     if (currentSlide === slides.length - 1) {
    //         return setCurrentSlide(0)
    //     }
    //     return setCurrentSlide(currentSlide + 1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    //     // clean up function
    //     return () => clearInterval(interval)
    // })

  return (
    <SlideCarouselContainer>
        <SlideCarouselWrapper>
        <ArrowLeft onClick={prevSlide} />
        <ArrowRight onClick={nextSlide} />
            { slides.map((slide, index) => {
                return (
                <SlideCarouselItem key={index}>
                    {slide}
                </SlideCarouselItem>)
            })}
        </SlideCarouselWrapper>
    </SlideCarouselContainer>
  )
}

export default SlideCarousel