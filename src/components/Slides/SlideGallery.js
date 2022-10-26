import React from 'react'
import {
    SlideContainer,
    SlideWrapper,
    SlideRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from './SlideGalleryElements'

const SlideGallery = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    img,
    bioImg,
    bioAlt, 
    alt, 
    primary, 
    dark, 
    dark2
}) => {
  return (
    <SlideContainer>
        <SlideWrapper>
            <SlideRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle>
                                {description}
                            </Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </SlideRow>
        </SlideWrapper>
    </SlideContainer>
  )
}

export default SlideGallery