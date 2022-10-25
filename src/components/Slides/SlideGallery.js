import React from 'react'
import {
    Deck,
    Slide,
    Text,
    // Image,
    FlexBox
} from 'spectacle'
import {
    SlideGalleryContainer
} from './SlideGalleryElements'

const SlideGallery = () => {
  return (
    <SlideGalleryContainer>
        <Deck transition={['slide']}>
            <Slide bgColor='#010606'>
                <FlexBox height='100%'>
                    <Text>Hello!</Text>
                </FlexBox>
            </Slide>
        </Deck>
    </SlideGalleryContainer>
  )
}

export default SlideGallery