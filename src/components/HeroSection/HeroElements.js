import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  /* :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } */

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
  /* border-radius: 15px; */
  /* background: #000; */
  /* opacity: 0.8; */
  z-index: 3;
  /* max-width: 1200px; */
  position: relative;
  /* padding: 0px 24px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  /* border: 3px solid red; */
  right: 130px;
  top: 322px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    /* bottom: 15%; */
    right: 0px;
    top: 240px;
  }

  @media screen and (max-width: 480px) {
    /* bottom: 15%; */
  }
`;

export const HeroH1 = styled.h1`
  color: #638078;
  font-size: 38px;
  text-align: center;
  font-family: "Acme", sans-serif;

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
