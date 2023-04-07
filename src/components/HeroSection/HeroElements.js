import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 720px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 100%;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    object-fit: scale-down;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  right: 130px;
  top: 322px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    right: 0px;
    top: 240px;
  }
`;

export const HeroH1 = styled.h1`
  color: #638078;
  font-size: 38px;
  text-align: center;
  font-family: 'Acme', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 32px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
