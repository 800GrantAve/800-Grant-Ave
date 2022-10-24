import styled from 'styled-components'

export const StoreGalleryContainer = styled.div`
   min-height: 500px;
   display: flex;
   align-items: center;
   justify-content: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const GalleryCarousel = styled.div`
    height: 500px;
`;

export const CarouselInner = styled.div`
    
`;

export const CarouselItem = styled.div`
    
`;

export const CarouselImg = styled.img`
    
`;