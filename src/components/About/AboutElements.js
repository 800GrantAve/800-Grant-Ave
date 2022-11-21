import styled from "styled-components";

export const AboutContainer = styled.div`
    color: #fff;
    background: #010606;
    
    /* width: auto; */

    @media screen and (max-width: 768px) {
        padding: 60px 0;
    }
`

export const AboutWrapper = styled.div`
    /* display: grid;
    z-index: 1;
    height: 860px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    height: 800px;
    /* overflow: hidden; */

    @media screen and (max-width: 768px) {
        /* max-width: 600px; */
    }

    @media screen and (max-width: 480px) {
        /* max-width: 350px; */
    }
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';
    grid-template-columns: 450px auto;

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    /* padding: 0 15px; */
    grid-area: col1;
    padding-left: 60px;
    /* border: 5px solid blue; */
`
export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    /* border: 5px solid red; */
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0px;
    padding-bottom: 60px;
    padding-right: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 0;
    }
`

export const TopLine = styled.p`
    color: color: '#f7f8fa';
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1.%;
    font-weight: 600;
    color:'#f7f8fa';

    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: '#f7f8fa';

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

export const ImgWrap = styled.div`
    max-width: 500px;
    height: 100%;
    /* border: 5px solid green; */
`
export const Img = styled.img`
    width: 100%;
    /* height: 300px; */
    margin: 0 0 10px 0;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        height: 300px;
        width: 250px;
    }
`