import styled from "styled-components"


export const HeroContainer = styled.div`
    background: #0C0C0C;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

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
    border-radius: 15px;
    background: #000;
    opacity: 0.6;
    z-index: 3;
    /* max-width: 1200px; */
    position: absolute;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        bottom: 5%;
    }

    @media screen and (max-width: 480px) {
        bottom: 10%;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 42px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 20px;
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
