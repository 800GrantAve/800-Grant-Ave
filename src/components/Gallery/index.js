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
                <GalleryH2>Massage</GalleryH2>
                <GalleryP>These are the Gallery we offer</GalleryP>
            </GalleryCard>
            <GalleryCard>
                <GalleryH2>Massage 2</GalleryH2>
                <GalleryP>These are the Gallery we offer</GalleryP>
            </GalleryCard>
            <GalleryCard>
                <GalleryH2>Massage 3</GalleryH2>
                <GalleryP>These are the Gallery we offer</GalleryP>
            </GalleryCard>
        </GalleryWrapper>
    </GalleryContainer>
  )
}

export default Gallery