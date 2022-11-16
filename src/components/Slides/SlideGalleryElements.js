import styled from "styled-components";

export const SlideContainer = styled.div`
    color: #fff;
    background: #010606;
    border-radius: 15px;
    height: auto;
    /* max-width: 100%; */
    /* border: 5px solid green; */

    @media screen and (max-width: 768px) {
        padding: 20px 0;
        height: 100%;
    }
`

export const SlideWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 650px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    /* border: 5px solid blue; */

    @media screen and (max-width: 768px) {
        max-width: 400px;
        padding: 0 5px;
        /* padding: 30px; */
    }

    @media screen and (max-width: 480px) {
        max-width: 350px;
        padding: 0 5px;
        
    }
`

export const SlideRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col3';
        grid-template-areas: ${({addImg}) => (addImg ? `'col1 col1' 'col2 col3'` : `'col1' 'col2' 'col3'` )}
    }
`

export const Column1 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 10px;
    grid-area: col1;
    /* width: 300px; */
    /* border: 5px solid red; */
`
export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 10px;
    grid-area: col2;
    /* width: 400px; */
    /* border: 5px solid green; */
    /* flex: 100%; */
    /* max-width: 100%; */

`
export const Column3 = styled.div`
    display: flex;
    justify-content: center;
    /* flex: 100%; */
    /* max-width: 100%; */

    margin-bottom: 15px;
    padding: 0 10px;
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
    max-width: 550px;
    height: 100%;
    /* border: 1px solid red; */
    /* width: 100%;
    height: auto; */

    
    @media screen and (max-width: 768px) {
        max-width: 300px;
        height: 100%;
        /* border: 5px solid red; */
    }
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    object-fit: contain;
    /* padding-right: 0; */
    border-radius: 10px;
`
export const Img2 = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    object-fit: contain;
    /* padding-left: 0; */
    border-radius: 10px;

`
