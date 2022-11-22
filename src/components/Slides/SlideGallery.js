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
    ImgWrap2,
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
    position,
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
                        <Img src={img} alt={alt} position={position} />
                        {/* <cite>{citation}</cite> */}
                    </ImgWrap>
                </Column2>             
                <Column3>
                { img2 ? (                    
                    <ImgWrap2>
                        <Img2 src={img2} alt={alt2} position={position} />
                    </ImgWrap2>) 
                    
                        : null}

                </Column3>
            </SlideRow>
        </SlideWrapper>
    </SlideContainer>
  )
}

export default SlideGallery