import styled from "styled-components";

export const SlideContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    border-radius: 15px;
    width: auto;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

export const SlideWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    /* border: 5px solid blue; */

    @media screen and (max-width: 768px) {
        max-width: 600px;
    }

    @media screen and (max-width: 480px) {
        max-width: 350px;
    }
`

export const SlideRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1' 'col2 col2' 'col3 col3'`)};
    }
`

export const Column1 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    /* width: 300px; */
    /* border: 5px solid red; */
`
export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 5px;
    grid-area: col2;
    /* width: 400px; */
    /* border: 5px solid green; */

`
export const Column3 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0px;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 5px;
    }
`

export const TopLine = styled.p`
    color: #800000;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1.%;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const ImgWrap = styled.div`
    width: 500px;
    height: 100%;
    /* border: 1px solid red; */
    
    @media screen and (max-width: 768px) {
        max-width: 200px;
    }

    @media screen and (max-width: 480px) {
        max-width: 180px;
    }
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    /* padding-right: 0; */
    border-radius: 10px;
`
export const Img2 = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    /* padding-left: 0; */
    border-radius: 10px;
`