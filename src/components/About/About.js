import React from 'react'
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
} from './AboutElements'
import Image from '../../images/store/about.jpg'

const About = () => {
  return (
    <AboutContainer>
        <AboutWrapper>
            <AboutRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>About this Project</TopLine>
                        <Heading>Shing Chong & Co.</Heading>
                        <Subtitle>
                            The project is dedicated to the history of Louie Wee Lee and his store located at 800 Grant Ave. In 1983, the late Thomas W. Chinn, a noted historian, and one of the founders of the Chinese Historical Society of America, wrote an article for Asian Week Newspaper about store founder Louie Wee Lee and the iconinc Shing Chong & Co. Chinn wrote: "Located on the northeast corner of Grant Avenue and Clay Street, the 800 Grant Avenue address soon became the mecca for countless thousands to whom, in the ensuing 72 years, Shing Chong became a byword for Chinese foodstuffs" - Thomas W. Chinn, Asian Week Newspaper
                        </Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={Image} alt='student' />
                    </ImgWrap>                
                </Column2>
            </AboutRow>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About