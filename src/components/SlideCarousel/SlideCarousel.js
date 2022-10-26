import React, { useState, useEffect } from 'react'
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
    // <SlideGallery {...slideTwo} />
]
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    // }


    const carouselInfiniteScroll = () => {
        if (currentSlide === slides.length - 1) {
            return setCurrentSlide(0)
        }
        return setCurrentSlide(currentSlide + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
        // clean up function
        return () => clearInterval(interval)
    })

  return (
    <SlideCarouselContainer>

        <SlideCarouselWrapper>
        <ArrowLeft />
        <ArrowRight />
            { slides.map((slide, index) => {
                return (
                <SlideCarouselItem style={{transform: `translate(-${currentSlide * 100}%)`}} key={index}>
                    {slide}
                </SlideCarouselItem>)
            })}
        </SlideCarouselWrapper>
    </SlideCarouselContainer>
  )
}

// const SlideCarousel = () => {
//     return(
//         <SlideCarouselContainer>
//             <SlideCarouselWrapper>
//                 <SlideGallery {...slideOne} />
//                 <SlideGallery {...slideTwo} />
//             </SlideCarouselWrapper>
//         </SlideCarouselContainer>
//     )
// }

export default SlideCarousel