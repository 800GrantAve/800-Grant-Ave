import styled from "styled-components";
// import {
//     FaArrowAltCircleRight,
//     FaArrowAltCircleLeft
// } from 'react-icons/fa'
import {
    SlArrowLeft,
    SlArrowRight
} from 'react-icons/sl'


export const SlideCarouselContainer = styled.div`
    /* color: #f1f1f1; */
    /* background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; */
    height: 800px;
    padding-top: 100px;
    background: #f9f9f9;
    /* display: flex;
    flex-wrap: nowrap;
    overflow: hidden; */

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const SlideCarouselWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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
export const ArrowLeft = styled(SlArrowLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        top: 100%;
        padding-top: 25px;
    }
`;

export const ArrowRight = styled(SlArrowRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        padding-top: 25px;
        top: 100%
    }
`;
