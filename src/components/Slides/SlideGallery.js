import React from 'react'
import {
    SlideContainer,
    SlideWrapper,
    SlideRow,
    Column1,
    Column2,
    Column3,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    Img2
} from './SlideGalleryElements'

const SlideGallery = ({
    // id,
    addImg, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    img,
    img2,
    alt,
    alt2,
    citation,
    citation2,
    primary, 
    dark, 
    dark2
}) => {
  return (
    <SlideContainer>
        <SlideWrapper>
            <SlideRow addImg={addImg}>
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
                        {/* <cite>{citation}</cite> */}
                    </ImgWrap>
                </Column2>             
                <Column3>
                    <ImgWrap>
                        <Img2 src={img2} alt={alt2} />
                    </ImgWrap>
                </Column3>
            </SlideRow>
        </SlideWrapper>
    </SlideContainer>
  )
}

export default SlideGallery