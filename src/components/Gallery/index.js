import React from 'react'
import { 
    GalleryContainer, 
    GalleryH1, 
    GalleryWrapper, 
    GalleryCard, 
    // GalleryIcon, 
    GalleryH2, 
    GalleryP } from './GalleryElements'

const Gallery = () => {
  return (
    <GalleryContainer>
        <GalleryH1>
            The Store
        </GalleryH1>
        <GalleryWrapper>
            <GalleryCard>
                <GalleryH2>Photo</GalleryH2>
                <GalleryP>caption</GalleryP>
            </GalleryCard>
            <GalleryCard>
                <GalleryH2>Photo 2</GalleryH2>
                <GalleryP>caption</GalleryP>
            </GalleryCard>
            <GalleryCard>
                <GalleryH2>Photo 3</GalleryH2>
                <GalleryP>caption</GalleryP>
            </GalleryCard>
        </GalleryWrapper>
    </GalleryContainer>
  )
}

export default Gallery