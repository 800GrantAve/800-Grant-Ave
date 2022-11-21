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


const SlideCarousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null)
    const length = SlideData.length

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            nextSlide()
        }
    
        if (diff < -5) {
            prevSlide()
        }
    
        setTouchPosition(null)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

  return (
    <SlideCarouselContainer id='photo'>
            <SlideCarouselWrapper
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
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