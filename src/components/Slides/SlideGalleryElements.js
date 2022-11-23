import styled from "styled-components";

export const SlideContainer = styled.div`
    color: #fff;
    background: #010606;
    border-radius: 20px;
    /* height: auto; */
    /* max-width: 100%; */
    /* border: 5px solid green; */

    @media screen and (max-width: 768px) {
        padding: 50px 0;
        height: 750px;
        border-radius: 0px;;
    }
`

export const SlideWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 650px;
    /* width: 100%; */
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    /* border: 5px solid blue; */

    @media screen and (max-width: 768px) {
        height: 600px;
        padding: 0 2px;
    }
`

export const SlideRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3';
    /* row-gap: 2px; */
    /* overflow: hidden; */

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
`
export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 10px;
    grid-area: col2;
`
export const Column3 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 10px;
    grid-area: col3;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding: 0px 35px;
    }
`

export const TopLine = styled.p`
    color: #800000;
    font-size: 16px;
    line-height: 20px;
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

export const Quote = styled.p`
    max-width: 440px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const ImgWrap = styled.div`
    display: ${({flex}) => (flex ? 'flex' : 'initial')};
    /* justify-content: center; */
    /* align-items: center; */
    /* max-width: 550px;
    height: 100%; */
    max-width: 650px;
    height: 400px;
    /* border: 5px solid blue; */
    
    @media screen and (max-width: 768px) {
        max-width: 100%;
        height: 270px;
        /* border: 5px solid red; */
    }
`
export const ImgWrap2 = styled.div`
    display: ${({flex}) => (flex ? 'flex' : 'initial')};
    /* max-width: 550px; */
    max-width: 340px;
    height: 400px;
    
    @media screen and (max-width: 768px) {
        max-width: 100%;
        height: 270px;

        /* border: 5px solid red; */
    }
`

export const Img = styled.img`
    max-width: 100%;
    /* margin: 0 0 10px 0; */
    object-fit: cover;
    object-position: ${({position}) => (position ? 'right' : 'center' )};
    /* padding-right: 0; */
    border-radius: 10px;
    /* border: 5px solid red; */
`
export const Img2 = styled.img`
    max-width: 100%;
    /* margin: 0 0 10px 0; */
    object-fit: cover;
    object-position: ${({position}) => (position ? 'left' : 'center' )};
    /* padding-left: 0; */
    border-radius: 10px;

`