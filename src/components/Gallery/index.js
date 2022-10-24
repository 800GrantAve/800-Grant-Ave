import React from 'react'
import { 
    GalleryContainer, 
    GalleryH1, 
    GalleryWrapper, 
    // GalleryCard, 
    // GalleryIcon, 
    // GalleryH2, 
    // GalleryP 
} from './GalleryElements'
import StoreGallery from '../StoreGallery/StoreGallery'
import LouieGallery from '../LouieGallery/LouieGallery'


const ImageGallery = () => {
  return (
    <GalleryContainer>
        <GalleryWrapper>
        <GalleryH1>
            The Store
        </GalleryH1>
            <StoreGallery />
        </GalleryWrapper>

        <GalleryWrapper>
            <GalleryH1>
                Louie Wee Lee
            </GalleryH1>
            <LouieGallery />
        </GalleryWrapper>
    </GalleryContainer>
  )
}

export default ImageGallery