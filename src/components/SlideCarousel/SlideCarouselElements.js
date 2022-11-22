import styled from "styled-components";
import {
    FaArrowAltCircleRight,
    FaArrowAltCircleLeft
} from 'react-icons/fa'

export const SlideCarouselContainer = styled.div`
    height: 800px;
    padding-top: 100px;
    background: #f9f9f9;
    /* border: 5px solid blue; */
`

export const SlideCarouselWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 5px solid green; */

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`

export const SlideCarouselItem = styled.div`
    /* height: 20rem;
    min-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1); */
`
export const ArrowLeft = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        /* top: 100%;
        padding-top: 80px; */
        padding-top: 5%;
        color:rgb(255, 255, 255, 0.4);
        top: 95%;
    }
`;

export const ArrowRight = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        /* padding-top: 80px;
        top: 100% */
        padding-top: 5%;
        color:rgb(255, 255, 255, 0.4);
        top: 95%;
    }
`;
