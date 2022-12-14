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
    left: 5%;
    font-size: 3rem;
    color:rgb(0, 0, 0, 0.8);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    /* border: 1px solid red; */
    

    @media screen and (max-width: 1323px) {
        /* padding-top: 2%; */
        color:rgb(255, 255, 255, 0.6);
        top: 40%;
        left: 7%;
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        /* top: 100%;
        padding-top: 80px; */
        padding-top: 2%;
        color:rgb(255, 255, 255, 0.6);
        top: 40%;
        left: 0;
        font-size: 2rem;
    }
`;

export const ArrowRight = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 5%;
    font-size: 3rem;
    color:rgb(0, 0, 0, 0.8);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    /* border: 1px solid red; */

    @media screen and (max-width: 1323px) {
        /* padding-top: 2%; */
        color:rgb(255, 255, 255, 0.6);
        top: 40%;
        right: 7%;
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        /* padding-top: 80px;
        top: 100% */
        padding-top: 2%;
        color:rgb(255, 255, 255, 0.6);
        top: 40%;
        right: 0;
        font-size: 2rem;
    }
`;
