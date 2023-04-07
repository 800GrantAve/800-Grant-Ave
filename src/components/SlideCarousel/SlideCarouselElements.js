import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const SlideCarouselContainer = styled.div`
  height: 70vh;
  padding-top: 100px;
  background: #f9f9f9;
`;

export const SlideCarouselWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SlideCarouselItem = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ArrowLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 5%;
  font-size: 3rem;
  color: rgb(0, 0, 0, 0.8);
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 1323px) {
    color: rgb(255, 255, 255, 0.6);
    top: 40%;
    left: 7%;
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 2%;
    color: rgb(255, 255, 255, 0.6);
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
  color: rgb(0, 0, 0, 0.8);
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 1323px) {
    color: rgb(255, 255, 255, 0.6);
    top: 40%;
    right: 7%;
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 2%;
    color: rgb(255, 255, 255, 0.6);
    top: 40%;
    right: 0;
    font-size: 2rem;
  }
`;
